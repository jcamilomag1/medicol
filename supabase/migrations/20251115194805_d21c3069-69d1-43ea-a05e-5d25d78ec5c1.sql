-- Add policy for admins to view all posts (published and unpublished)
CREATE POLICY "Admins can view all posts"
ON blog_posts
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add policy for editors to view all posts
CREATE POLICY "Editors can view all posts"
ON blog_posts
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'editor'::app_role));