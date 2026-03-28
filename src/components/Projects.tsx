import { useMemo, useState } from 'react';

const TABS = ['All', 'Commercial', 'Residential', 'Interior', 'Renovation'] as const;
type Tab = (typeof TABS)[number];

interface DisplayItem {
  key: string;
  imageUrl: string;
  alt: string;
}

function gallery3to17(): DisplayItem[] {
  return Array.from({ length: 15 }, (_, i) => {
    const n = i + 3;
    return {
      key: `gallery-${n}`,
      imageUrl: `/images/${n}.jpg.jpeg`,
      alt: `Project ${n}`,
    };
  });
}

function itemsForTab(tab: Tab): DisplayItem[] {
  switch (tab) {
    case 'All':
    case 'Residential':
      return gallery3to17();
    case 'Commercial':
      return [
        {
          key: 'commercial',
          imageUrl: '/images/commercial.jpg',
          alt: 'Commercial project',
        },
      ];
    case 'Interior':
      return [
        {
          key: 'interior',
          imageUrl: '/images/interior.jpg',
          alt: 'Interior project',
        },
      ];
    case 'Renovation':
      return [
        {
          key: 'renovation',
          imageUrl: '/images/renovation.jpg',
          alt: 'Renovation project',
        },
      ];
    default:
      return [];
  }
}

export default function Projects() {
  const [filter, setFilter] = useState<Tab>('All');
  const filteredItems = useMemo(() => itemsForTab(filter), [filter]);

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
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === tab
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.key}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
