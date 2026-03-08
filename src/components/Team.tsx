import { useState, useEffect } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { supabase, Engineer } from '../lib/supabase';

export default function Team() {
  const [engineers, setEngineers] = useState<Engineer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEngineers();
  }, []);

  const fetchEngineers = async () => {
    try {
      const { data, error } = await supabase
        .from('engineers')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setEngineers(data || []);
    } catch (error) {
      console.error('Error fetching engineers:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Engineers</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our team of highly qualified and experienced engineers is dedicated to delivering
            exceptional results on every project.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-amber-600 border-r-transparent"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineers.map((engineer) => (
              <div
                key={engineer.id}
                className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={engineer.image_url}
                    alt={engineer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{engineer.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{engineer.role}</p>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <GraduationCap className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Qualification</p>
                        <p className="text-sm text-gray-600">{engineer.qualification}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Briefcase className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Experience</p>
                        <p className="text-sm text-gray-600">{engineer.experience}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Award className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Specialization</p>
                        <p className="text-sm text-gray-600">{engineer.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
