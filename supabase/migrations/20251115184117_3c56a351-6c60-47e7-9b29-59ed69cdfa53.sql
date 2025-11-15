-- Drop existing insecure policies for blog_posts
DROP POLICY IF EXISTS "Authenticated users can insert posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete posts" ON public.blog_posts;

-- Create new secure policies - only admins can modify posts
CREATE POLICY "Only admins can insert posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Keep the existing SELECT policy for published posts (anyone can view)
-- "Anyone can view published posts" already exists, no need to recreate