-- Eliminar política incompleta
DROP POLICY IF EXISTS "Admins can update posts" ON blog_posts;

-- Recrear política completa con WITH CHECK
CREATE POLICY "Admins can update posts" 
ON blog_posts
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));