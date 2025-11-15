import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BlogPost } from "@/hooks/useBlogPosts";

const blogPostSchema = z.object({
  title_es: z.string().min(1, "El título en español es requerido"),
  title_en: z.string().min(1, "El título en inglés es requerido"),
  slug: z.string().min(1, "El slug es requerido"),
  excerpt_es: z.string().optional(),
  excerpt_en: z.string().optional(),
  content_es: z.string().min(1, "El contenido en español es requerido"),
  content_en: z.string().min(1, "El contenido en inglés es requerido"),
  category: z.string().optional(),
  image_url: z.string().url("URL inválida").optional().or(z.literal("")),
  author: z.string().optional(),
  published: z.boolean(),
  meta_description_es: z.string().optional(),
  meta_description_en: z.string().optional(),
});

type BlogPostFormValues = z.infer<typeof blogPostSchema>;

interface BlogPostFormProps {
  post?: BlogPost;
  onSubmit: (values: BlogPostFormValues) => void;
  onCancel: () => void;
}

export const BlogPostForm = ({ post, onSubmit, onCancel }: BlogPostFormProps) => {
  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title_es: "",
      title_en: "",
      slug: "",
      excerpt_es: "",
      excerpt_en: "",
      content_es: "",
      content_en: "",
      category: "",
      image_url: "",
      author: "",
      published: false,
      meta_description_es: "",
      meta_description_en: "",
    },
  });

  useEffect(() => {
    if (post) {
      form.reset({
        title_es: post.title_es,
        title_en: post.title_en,
        slug: post.slug,
        excerpt_es: post.excerpt_es || "",
        excerpt_en: post.excerpt_en || "",
        content_es: post.content_es,
        content_en: post.content_en,
        category: post.category || "",
        image_url: post.image_url || "",
        author: post.author || "",
        published: post.published,
        meta_description_es: post.meta_description_es || "",
        meta_description_en: post.meta_description_en || "",
      });
    }
  }, [post, form]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="es" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="es">Español</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
          </TabsList>

          <TabsContent value="es" className="space-y-4">
            <FormField
              control={form.control}
              name="title_es"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        if (!post) {
                          form.setValue("slug", generateSlug(e.target.value));
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="excerpt_es"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Extracto</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content_es"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contenido</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={10} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="meta_description_es"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meta Descripción</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={2} />
                  </FormControl>
                  <FormDescription>Para SEO (máx 160 caracteres)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="en" className="space-y-4">
            <FormField
              control={form.control}
              name="title_en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="excerpt_en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content_en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={10} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="meta_description_en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meta Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={2} />
                  </FormControl>
                  <FormDescription>For SEO (max 160 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug (URL)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>usado en la URL del post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoría</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL de Imagen</FormLabel>
                <FormControl>
                  <Input {...field} type="url" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Autor</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <FormLabel>Publicar</FormLabel>
                <FormDescription>
                  El post será visible en el sitio web
                </FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">
            {post ? "Actualizar" : "Crear"} Post
          </Button>
        </div>
      </form>
    </Form>
  );
};
