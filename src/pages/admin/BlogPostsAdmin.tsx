import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { BlogPostTable } from "@/components/admin/BlogPostTable";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { useAllBlogPosts, BlogPost } from "@/hooks/useBlogPosts";
import { supabase } from "@/integrations/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const BlogPostsAdmin = () => {
  const { data: posts, isLoading } = useAllBlogPosts();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | undefined>();
  const [postToDelete, setPostToDelete] = useState<BlogPost | undefined>();

  const createMutation = useMutation({
    mutationFn: async (values: any) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .insert({
          ...values,
          published_at: values.published ? new Date().toISOString() : null,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      toast.success("Post creado exitosamente");
      setIsDialogOpen(false);
      setSelectedPost(undefined);
    },
    onError: (error: any) => {
      toast.error(error.message || "Error al crear el post");
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, values }: { id: string; values: any }) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .update({
          ...values,
          published_at: values.published ? new Date().toISOString() : null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      toast.success("Post actualizado exitosamente");
      setIsDialogOpen(false);
      setSelectedPost(undefined);
    },
    onError: (error: any) => {
      toast.error(error.message || "Error al actualizar el post");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      toast.success("Post eliminado exitosamente");
      setIsDeleteDialogOpen(false);
      setPostToDelete(undefined);
    },
    onError: (error: any) => {
      toast.error(error.message || "Error al eliminar el post");
    },
  });

  const handleCreate = () => {
    setSelectedPost(undefined);
    setIsDialogOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const handleDelete = (post: BlogPost) => {
    setPostToDelete(post);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmit = (values: any) => {
    if (selectedPost) {
      updateMutation.mutate({ id: selectedPost.id, values });
    } else {
      createMutation.mutate(values);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-muted-foreground">Cargando posts...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Blog Posts</h1>
            <p className="text-muted-foreground">Gestiona las entradas del blog</p>
          </div>
          <Button onClick={handleCreate}>
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Post
          </Button>
        </div>

        <BlogPostTable
          posts={posts || []}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {selectedPost ? "Editar Post" : "Crear Nuevo Post"}
              </DialogTitle>
            </DialogHeader>
            <BlogPostForm
              post={selectedPost}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsDialogOpen(false);
                setSelectedPost(undefined);
              }}
            />
          </DialogContent>
        </Dialog>

        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. El post "{postToDelete?.title_es}" será
                eliminado permanentemente.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => postToDelete && deleteMutation.mutate(postToDelete.id)}
              >
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
};

export default BlogPostsAdmin;
