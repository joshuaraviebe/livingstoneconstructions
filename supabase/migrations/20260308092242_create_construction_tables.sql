/*
  # Construction Website Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `description` (text) - Project description
      - `image_url` (text) - Project image URL
      - `location` (text) - Project location
      - `year` (text) - Year completed
      - `category` (text) - Project category (residential, commercial, etc.)
      - `order_index` (integer) - For ordering projects
      - `created_at` (timestamptz)
    
    - `engineers`
      - `id` (uuid, primary key)
      - `name` (text) - Engineer name
      - `role` (text) - Position/role
      - `qualification` (text) - Educational qualification
      - `experience` (text) - Years of experience
      - `specialization` (text) - Area of specialization
      - `image_url` (text) - Profile image URL
      - `order_index` (integer) - For ordering engineers
      - `created_at` (timestamptz)
    
    - `contact_requests`
      - `id` (uuid, primary key)
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `message` (text) - Request message
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Public read access for projects and engineers
    - Public insert access for contact_requests
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  location text NOT NULL,
  year text NOT NULL,
  category text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create engineers table
CREATE TABLE IF NOT EXISTS engineers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  qualification text NOT NULL,
  experience text NOT NULL,
  specialization text NOT NULL,
  image_url text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact_requests table
CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE engineers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Projects policies
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

-- Engineers policies
CREATE POLICY "Anyone can view engineers"
  ON engineers FOR SELECT
  TO anon
  USING (true);

-- Contact requests policies
CREATE POLICY "Anyone can submit contact requests"
  ON contact_requests FOR INSERT
  TO anon
  WITH CHECK (true);

-- Insert sample projects
INSERT INTO projects (title, description, image_url, location, year, category, order_index)
VALUES 
  ('Modern Residential Complex', 'A state-of-the-art residential complex featuring modern architecture and premium amenities', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', 'Bangalore', '2024', 'Residential', 1),
  ('Commercial Office Building', 'Contemporary office space designed for maximum efficiency and comfort', 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800', 'Mumbai', '2023', 'Commercial', 2),
  ('Luxury Villa Project', 'Premium luxury villas with world-class finishes and amenities', 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', 'Goa', '2024', 'Residential', 3),
  ('Industrial Warehouse', 'Large-scale industrial facility with modern infrastructure', 'https://images.pexels.com/photos/1390390/pexels-photo-1390390.jpeg?auto=compress&cs=tinysrgb&w=800', 'Pune', '2023', 'Industrial', 4),
  ('Shopping Mall Complex', 'Multi-level shopping complex with entertainment facilities', 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800', 'Delhi', '2022', 'Commercial', 5),
  ('Apartment Towers', 'High-rise apartment towers with panoramic city views', 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800', 'Hyderabad', '2024', 'Residential', 6);

-- Insert sample engineers
INSERT INTO engineers (name, role, qualification, experience, specialization, image_url, order_index)
VALUES 
  ('Rajesh Kumar', 'Chief Engineer', 'B.Tech Civil Engineering, M.Tech Structural', '15+ years', 'Structural Design & Analysis', 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400', 1),
  ('Priya Sharma', 'Project Manager', 'B.E Civil Engineering, PMP Certified', '12+ years', 'Project Management & Planning', 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400', 2),
  ('Amit Patel', 'Senior Architect', 'B.Arch, M.Arch', '10+ years', 'Architectural Design & Planning', 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400', 3),
  ('Sunita Reddy', 'Structural Engineer', 'B.Tech Civil Engineering', '8+ years', 'Foundation & RCC Design', 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400', 4);