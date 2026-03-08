import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  year: string;
  category: string;
}

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Project 1 - Residential Home',
      description: 'Completed residential project. You can update this text with actual project details.',
      imageUrl: '/images/image_1.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Residential',
    },
    {
      id: 2,
      title: 'Project 2 - Apartment / Villa',
      description: 'Sample project using your second image. Replace this with your real project name and description.',
      imageUrl: '/images/image_2.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Residential',
    },
    {
      id: 3,
      title: 'Project 3 - Commercial Building',
      description: 'Sample commercial project. Update with client name, location and year.',
      imageUrl: '/images/image_3.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Commercial',
    },
    {
      id: 4,
      title: 'Project 4 - Individual House',
      description: 'Sample individual house / duplex project. You can edit this text later.',
      imageUrl: '/images/image_4.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Residential',
    },
    {
      id: 5,
      title: 'Project 5 - Interior Work',
      description: 'Sample interior / office fit-out work. Replace with your actual interior project information.',
      imageUrl: '/images/image_5.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Interior',
    },
    {
      id: 6,
      title: 'Project 6 - Renovation / Extension',
      description: 'Sample renovation or extension project. Update with structural / remodeling details.',
      imageUrl: '/images/image_6.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Renovation',
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'Sample project attached with image_7.jpg.',
      imageUrl: '/images/image_7.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Residential',
    },
    {
      id: 8,
      title: 'Project 8',
      description: 'Sample project attached with image_8.jpg.',
      imageUrl: '/images/image_8.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Residential',
    },
    {
      id: 9,
      title: 'Project 9',
      description: 'Sample project attached with image_9.jpg.',
      imageUrl: '/images/image_9.jpg',
      location: 'Tamil Nadu',
      year: 'Year',
      category: 'Commercial',
    },
  ]);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our portfolio of successfully completed projects that showcase our expertise
            and commitment to excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
