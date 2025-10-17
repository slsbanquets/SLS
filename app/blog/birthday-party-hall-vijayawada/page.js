import Link from "next/link";
import SEO from "../../components/SEO";
import { 
  FaBirthdayCake, 
  FaMapMarkerAlt, 
  FaCar, 
  FaHeart, 
  FaMusic, 
  FaStar, 
  FaCheck, 
  FaPhone, 
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
  FaUsers,
  FaUserTie,
  FaSnowflake,
  FaTv,
  FaMicrophone,
  FaCogs,
  FaGift,
  FaUtensils,
  FaBuilding,
  FaChild,
  FaGamepad
} from "react-icons/fa";

export const metadata = {
  title: "Birthday Party Hall in Vijayawada | SLS Banquets - Fun Celebrations for All Ages",
  description: "From kids' parties to milestone birthdays, our birthday party hall in Vijayawada provides the perfect setting. Discover our party packages and celebration ideas at SLS Banquets.",
  keywords: "birthday party hall in Vijayawada, birthday celebration hall Vijayawada, kids birthday party hall Vijayawada, birthday party venue Vijayawada, birthday celebration venue Vijayawada, birthday party hall Kandrika, birthday party hall Payakapuram, birthday celebration hall Journalist Colony, birthday party venue Rajiv-Kandrika Road, birthday party hall Vijayawada"
};

export default function BirthdayPartyHallPage() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-900 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Birthday Party Hall in Vijayawada
            </h1>
            <p className="text-xl text-yellow-100">
              SLS Banquets - Fun Celebrations for All Ages
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              From kids&apos; parties to milestone birthdays, our <strong>birthday party hall in Vijayawada</strong> provides the perfect setting for unforgettable celebrations. At SLS Banquets, we understand that every birthday is special, and we&apos;re here to make your celebration memorable with our fun-filled party packages and celebration ideas.
            </p>
          </div>

          {/* Why Choose Our Birthday Party Hall */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SLS Banquets for Birthday Parties?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                  <FaBirthdayCake className="text-yellow-600" />
                  Fun & Festive Atmosphere
                </h3>
                <p className="text-gray-700">
                  Our birthday party hall creates a vibrant, fun atmosphere perfect for celebrations of all ages. With colorful decorations and festive lighting, we set the mood for an unforgettable birthday party.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <FaUsers className="text-orange-600" />
                  Perfect for All Ages
                </h3>
                <p className="text-gray-700">
                  Whether you&apos;re celebrating a child&apos;s birthday, teenager&apos;s party, or milestone adult birthday, our flexible space can be customized to suit any age group and celebration style.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <FaMusic className="text-red-600" />
                  Entertainment Ready
                </h3>
                <p className="text-gray-700">
                  Our birthday party hall comes equipped with sound system, stage setup, and lighting perfect for music, dancing, games, and entertainment activities that make your party memorable.
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-900 mb-3 flex items-center gap-2">
                  <FaCar className="text-pink-600" />
                  Convenient for Guests
                </h3>
                <p className="text-gray-700">
                  Located in Kandrika with easy access and ample parking, our birthday party hall is convenient for all your guests, making it easy for everyone to join in the celebration.
                </p>
              </div>
            </div>
          </section>

          {/* Birthday Party Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect for Every Birthday Celebration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaChild className="text-4xl text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Kids&apos; Birthday Parties</h3>
                <p className="text-gray-600">Fun-filled parties for children with games, decorations, and entertainment perfect for young celebrants</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaGamepad className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Teen Birthday Parties</h3>
                <p className="text-gray-600">Cool and trendy parties for teenagers with modern entertainment and party activities</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaStar className="text-4xl text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Milestone Birthdays</h3>
                <p className="text-gray-600">Special celebrations for milestone birthdays like 18th, 21st, 25th, 50th, and other significant ages</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaHeart className="text-4xl text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Adult Birthday Parties</h3>
                <p className="text-gray-600">Elegant and sophisticated birthday celebrations for adults with refined entertainment and dining</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-4xl text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Family Birthday Celebrations</h3>
                <p className="text-gray-600">Multi-generational birthday celebrations bringing together family members of all ages</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaGift className="text-4xl text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Surprise Birthday Parties</h3>
                <p className="text-gray-600">Memorable surprise birthday parties with special arrangements and secret planning support</p>
              </div>
            </div>
          </section>

          {/* Birthday Party Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Birthday Party Features & Amenities</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Makes Our Birthday Party Hall Special?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaBirthdayCake className="text-yellow-500 mr-3" />
                    <span>Birthday Cake Table Setup</span>
                  </li>
                  <li className="flex items-center">
                    <FaMusic className="text-orange-500 mr-3" />
                    <span>Sound System for Music & Entertainment</span>
                  </li>
                  <li className="flex items-center">
                    <FaTv className="text-blue-500 mr-3" />
                    <span>Stage Setup for Performances</span>
                  </li>
                  <li className="flex items-center">
                    <FaSnowflake className="text-green-500 mr-3" />
                    <span>Fully Air-Conditioned Comfort</span>
                  </li>
                  <li className="flex items-center">
                    <FaCar className="text-purple-500 mr-3" />
                    <span>Ample Parking for Guests</span>
                  </li>
                </ul>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaStar className="text-pink-500 mr-3" />
                    <span>Decorative Lighting & Ambiance</span>
                  </li>
                  <li className="flex items-center">
                    <FaCogs className="text-indigo-500 mr-3" />
                    <span>Flexible Seating Arrangements</span>
                  </li>
                  <li className="flex items-center">
                    <FaUserTie className="text-red-500 mr-3" />
                    <span>Party Coordination Support</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span>Clean & Safe Environment</span>
                  </li>
                  <li className="flex items-center">
                    <FaGift className="text-yellow-500 mr-3" />
                    <span>Affordable Party Packages</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Birthday Party Packages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Birthday Party Packages</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Choose the Perfect Birthday Party Package</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-yellow-900 mb-3">Kids&apos; Party Package</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (4 hours)</li>
                    <li>• Basic decorations</li>
                    <li>• Sound system</li>
                    <li>• Air-conditioning</li>
                    <li>• Parking space</li>
                    <li>• Up to 30 kids</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="tel:+917672024124"
                      className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-700 transition-colors block text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-orange-900 mb-3">Teen Party Package</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (5 hours)</li>
                    <li>• Modern decorations</li>
                    <li>• Sound & lighting system</li>
                    <li>• Stage setup</li>
                    <li>• Parking space</li>
                    <li>• Up to 50 guests</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="tel:+917672024124"
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors block text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-red-900 mb-3">Adult Party Package</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (6 hours)</li>
                    <li>• Elegant decorations</li>
                    <li>• Premium sound & lighting</li>
                    <li>• Professional stage setup</li>
                    <li>• Dressing room access</li>
                    <li>• Up to 100 guests</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="tel:+917672024124"
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors block text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Birthday Party Ideas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Birthday Party Ideas & Themes</h2>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Popular Birthday Party Themes</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Kids&apos; Party Themes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Superhero Theme</li>
                    <li>• Princess & Prince Theme</li>
                    <li>• Cartoon Character Theme</li>
                    <li>• Sports Theme</li>
                    <li>• Animal Theme</li>
                    <li>• Rainbow Theme</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Adult Party Themes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Retro/Vintage Theme</li>
                    <li>• Hollywood Glamour Theme</li>
                    <li>• Tropical/Luau Theme</li>
                    <li>• Masquerade Theme</li>
                    <li>• Bollywood Theme</li>
                    <li>• Garden Party Theme</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Happy Birthday Celebrants Share Their Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;SLS Banquets made my daughter&apos;s 10th birthday party absolutely magical! The kids had a blast, and the parents were impressed with the facilities. The staff was incredibly helpful and made everything stress-free for us.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Priya Kumar</div>
                <div className="text-sm text-gray-500">Kids&apos; Birthday Party</div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;We celebrated my 50th birthday at SLS Banquets, and it was perfect! The elegant setting, professional service, and beautiful decorations made my milestone birthday truly special. Highly recommended!&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Rajesh Kumar</div>
                <div className="text-sm text-gray-500">Milestone Birthday</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-yellow-900 to-orange-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Perfect Birthday Party Today!</h2>
            <p className="text-xl text-yellow-100 mb-6">
              Make your birthday celebration unforgettable at SLS Banquets. Our birthday party hall in Vijayawada 
              provides the perfect setting for fun-filled celebrations with all the amenities you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917672024124"
                className="bg-white text-yellow-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now: +91 7672024124
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-900 transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Get Party Quote
              </Link>
            </div>
          </section>
        </article>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center">
          <Link
            href="/blog/reception-hall-vijayawada"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-2 w-4 h-4" />
            Previous: Reception Hall
          </Link>
          
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Back to Blog
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
