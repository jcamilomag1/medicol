-- Primero eliminar roles que no usaremos
DELETE FROM user_roles WHERE role IN ('moderator', 'user');

-- Cambiar la columna role a TEXT temporalmente
ALTER TABLE user_roles ALTER COLUMN role TYPE TEXT;

-- Eliminar las políticas que dependen del tipo
DROP POLICY IF EXISTS "Admins can insert roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can update roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can delete roles" ON user_roles;
DROP POLICY IF EXISTS "Only admins can insert posts" ON blog_posts;
DROP POLICY IF EXISTS "Only admins can update posts" ON blog_posts;
DROP POLICY IF EXISTS "Only admins can delete posts" ON blog_posts;

-- Eliminar la función que depende del tipo
DROP FUNCTION IF EXISTS has_role(uuid, app_role);

-- Eliminar el tipo viejo
DROP TYPE IF EXISTS app_role;

-- Crear el nuevo enum con solo admin y editor
CREATE TYPE app_role AS ENUM ('admin', 'editor');

-- Volver a convertir la columna role al nuevo tipo enum
ALTER TABLE user_roles ALTER COLUMN role TYPE app_role USING role::app_role;

-- Recrear la función has_role con el nuevo tipo
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Recrear las políticas para user_roles
CREATE POLICY "Admins can insert roles"
ON user_roles FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update roles"
ON user_roles FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles"
ON user_roles FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Recrear las políticas para blog_posts (admin sigue teniendo control total)
CREATE POLICY "Only admins can insert posts"
ON blog_posts FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update posts"
ON blog_posts FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete posts"
ON blog_posts FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Nueva política: permitir a editores actualizar posts
CREATE POLICY "Editors can update posts"
ON blog_posts FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'editor'::app_role))
WITH CHECK (has_role(auth.uid(), 'editor'::app_role));