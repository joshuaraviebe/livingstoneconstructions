/*
  # Update Engineer Details

  Update the engineers table with more detailed and realistic engineer profiles
  including comprehensive qualifications, experience, and specializations.
*/

DELETE FROM engineers;

INSERT INTO engineers (name, role, qualification, experience, specialization, image_url, order_index)
VALUES 
  (
    'Rajesh Kumar',
    'Chief Engineer & Director',
    'B.Tech Civil Engineering (IIT Delhi), M.Tech Structural Engineering (IIT Bombay)',
    '15+ years',
    'Structural Design, High-Rise Construction, Seismic Analysis',
    'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    1
  ),
  (
    'Priya Sharma',
    'Senior Project Manager',
    'B.E Civil Engineering (NIT Trichy), PMP Certified, PRINCE2',
    '12+ years',
    'Project Management, Budget Control, Client Relations, Quality Assurance',
    'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    2
  ),
  (
    'Amit Patel',
    'Lead Architect',
    'B.Arch (CEPT), M.Arch Urban Design (Cranbrook Academy), LEED AP',
    '10+ years',
    'Architectural Design, Sustainable Design, Urban Planning, 3D Modeling',
    'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    3
  ),
  (
    'Sunita Reddy',
    'Structural Design Engineer',
    'B.Tech Civil Engineering (JNTU), Diploma in Advanced RCC (IIT Kharagpur)',
    '8+ years',
    'RCC Design, Foundation Engineering, CAD Detailing, STAAD Pro',
    'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    4
  ),
  (
    'Vikram Singh',
    'Site Engineer & Safety Officer',
    'Diploma in Civil Engineering, NEBOSH IGC Certified, Site Safety Management',
    '6+ years',
    'Site Supervision, Safety Management, Quality Control, Progress Monitoring',
    'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=400',
    5
  ),
  (
    'Dr. Neha Gupta',
    'Material Testing & Quality Head',
    'B.Tech Civil Engineering, M.Tech Materials Engineering, PhD (Concrete Technology)',
    '9+ years',
    'Material Testing, Quality Certification, Lab Management, Code Compliance',
    'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    6
  ),
  (
    'Rohan Desai',
    'MEP (Mechanical, Electrical, Plumbing) Lead',
    'B.Tech Mechanical Engineering, Diploma in Electrical Systems',
    '7+ years',
    'MEP Systems Design, HVAC Planning, Electrical Coordination, Fire Safety',
    'https://images.pexels.com/photos/3785080/pexels-photo-3785080.jpeg?auto=compress&cs=tinysrgb&w=400',
    7
  ),
  (
    'Anjali Mishra',
    'Cost Estimation & Tender Expert',
    'B.Tech Civil Engineering, Certified Cost Estimator',
    '5+ years',
    'Cost Analysis, Tender Preparation, Rate Analysis, Budget Planning',
    'https://images.pexels.com/photos/3756682/pexels-photo-3756682.jpeg?auto=compress&cs=tinysrgb&w=400',
    8
  );