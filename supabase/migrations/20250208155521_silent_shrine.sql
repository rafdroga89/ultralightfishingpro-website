/*
  # Create articles table

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `link` (text)
      - `created_at` (timestamp)
      - `published` (boolean)

  2. Security
    - Enable RLS on `articles` table
    - Add policy for public read access
    - Add policy for authenticated users to manage articles
*/

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  link text NOT NULL,
  created_at timestamptz DEFAULT now(),
  published boolean DEFAULT false
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published articles
CREATE POLICY "Public can view published articles"
  ON articles
  FOR SELECT
  TO public
  USING (published = true);

-- Allow authenticated users to manage articles
CREATE POLICY "Authenticated users can manage articles"
  ON articles
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);