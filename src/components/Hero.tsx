import { ArrowRight, Award, Users, Building } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="pt-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Excellence,
                <span className="text-amber-600"> Creating Happy Homes</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Living Stone Constructions is a trusted construction company based in Tamil Nadu, founded in 2003 by
                Er. R. David Raja B.E (Civil), M.Tech (Structural). He started his engineering career in 1999 and brings
                27+ years of experience. We have delivered quality homes and projects
                for more than 500+ happy families with a strong focus on structural safety, transparency, and on-time delivery.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="public/images/Start-image.jpeg"
                alt="Construction site"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Happy Families</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2003</h3>
              <p className="text-gray-600">Year Established</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">CMDA</h3>
              <p className="text-gray-600">Registered Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Livingstone Constructions</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Living Stone Constructions was started in 2003 by Er. R. David Raja B.E (Civil), M.Tech (Structural).
              The company has successfully completed several projects across Tamil Nadu and has delivered homes to
              more than 500+ happy families. We are registered in CMDA as a developer and are proud members of the
              Builders’ Association of India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Founder highlight */}
            <div className="md:col-span-1 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg overflow-hidden">
              <img
                src="/images/about1.jpg"
                alt="Er. R. David Raja"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Er. R. David Raja</h3>
                <p className="text-amber-700 font-semibold mb-2">
                  B.E (Civil), M.Tech (Structural)
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Founder & Chief Engineer of Living Stone Constructions, personally overseeing structural
                  design, quality and on-site execution for every project.
                </p>
              </div>
            </div>

            {/* Mission / Vision / Values */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations while
                  maintaining the highest standards of quality, safety, and environmental responsibility.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as the most trusted and innovative construction company, setting
                  new benchmarks in the industry through cutting-edge technology and sustainable practices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Commitment to quality and excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Integrity and transparency in all dealings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Safety-first approach in every project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Environmental sustainability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
