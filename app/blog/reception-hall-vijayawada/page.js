import Link from "next/link";
import SEO from "../../components/SEO";
import { 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaCar, 
  FaHeart, 
  FaBirthdayCake, 
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
  FaCamera
} from "react-icons/fa";

export const metadata = {
  title: "Reception Hall in Vijayawada | SLS Banquets - Celebrate in Style",
  description: "Make your reception unforgettable at SLS Banquets. Our reception hall in Vijayawada features modern amenities, elegant interiors, and professional service for your celebration.",
  keywords: "reception hall in Vijayawada, wedding reception hall Vijayawada, reception venue Vijayawada, marriage reception hall Vijayawada, reception party hall Vijayawada, wedding reception venue Vijayawada, reception celebration hall Vijayawada, reception function hall Vijayawada, reception banquet hall Vijayawada, reception event hall Vijayawada"
};

export default function ReceptionHallPage() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reception Hall in Vijayawada
            </h1>
            <p className="text-xl text-indigo-100">
              SLS Banquets - Celebrate in Style
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
              Make your reception unforgettable at SLS Banquets. Our <strong>reception hall in Vijayawada</strong> features modern amenities, elegant interiors, and professional service for your celebration. Whether you&apos;re planning a grand wedding reception, anniversary celebration, or special event, our venue provides the perfect setting for memorable moments.
            </p>
          </div>

          {/* Why Choose Our Reception Hall */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SLS Banquets Reception Hall?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                  <FaBuilding className="text-indigo-600" />
                  Elegant Reception Spaces
                </h3>
                <p className="text-gray-700">
                  Our reception hall features beautifully designed interiors with sophisticated lighting, elegant decorations, and spacious areas perfect for both intimate and grand celebrations.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <FaTv className="text-purple-600" />
                  Professional Stage Setup
                </h3>
                <p className="text-gray-700">
                  We provide a professionally decorated stage with premium lighting, sound system, and floral arrangements, ensuring your reception has the perfect backdrop for celebrations.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <FaUsers className="text-blue-600" />
                  Spacious Layout
                </h3>
                <p className="text-gray-700">
                  Our reception hall offers flexible seating arrangements and spacious layouts that can accommodate various guest counts, from intimate gatherings to large celebrations.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <FaCar className="text-green-600" />
                  Convenient Parking
                </h3>
                <p className="text-gray-700">
                  We understand the importance of convenient parking for your reception guests. Our venue offers ample parking space, ensuring a hassle-free experience for everyone.
                </p>
              </div>
            </div>
          </section>

          {/* Reception Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Reception Services</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Reception Services Include:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaTv className="text-indigo-500 mr-3" />
                    <span>Professional Stage Decoration</span>
                  </li>
                  <li className="flex items-center">
                    <FaMicrophone className="text-purple-500 mr-3" />
                    <span>Premium Sound & Lighting System</span>
                  </li>
                  <li className="flex items-center">
                    <FaUsers className="text-blue-500 mr-3" />
                    <span>Bridal & Groom Dressing Rooms</span>
                  </li>
                  <li className="flex items-center">
                    <FaSnowflake className="text-green-500 mr-3" />
                    <span>Fully Air-Conditioned Comfort</span>
                  </li>
                  <li className="flex items-center">
                    <FaCar className="text-orange-500 mr-3" />
                    <span>Ample Parking for Guests</span>
                  </li>
                </ul>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaUtensils className="text-red-500 mr-3" />
                    <span>Catering Support & Kitchen Access</span>
                  </li>
                  <li className="flex items-center">
                    <FaUserTie className="text-indigo-500 mr-3" />
                    <span>Professional Event Coordination</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span>Clean & Hygienic Environment</span>
                  </li>
                  <li className="flex items-center">
                    <FaStar className="text-yellow-500 mr-3" />
                    <span>Elegant Interior Design</span>
                  </li>
                  <li className="flex items-center">
                    <FaGift className="text-pink-500 mr-3" />
                    <span>Flexible Reception Packages</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reception Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect for All Types of Receptions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaHeart className="text-4xl text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Wedding Receptions</h3>
                <p className="text-gray-600">Grand wedding receptions with elegant decorations and professional stage setup</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaStar className="text-4xl text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Anniversary Celebrations</h3>
                <p className="text-gray-600">Romantic anniversary receptions in elegant settings</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaBirthdayCake className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Birthday Receptions</h3>
                <p className="text-gray-600">Special birthday receptions for milestone celebrations</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-4xl text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Family Receptions</h3>
                <p className="text-gray-600">Family reunion receptions and special family celebrations</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUserTie className="text-4xl text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Corporate Receptions</h3>
                <p className="text-gray-600">Professional corporate receptions and business celebrations</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaMusic className="text-4xl text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cultural Receptions</h3>
                <p className="text-gray-600">Cultural program receptions and traditional celebrations</p>
              </div>
            </div>
          </section>

          {/* Reception Packages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reception Packages</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Choose the Perfect Reception Package</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-indigo-900 mb-3">Basic Reception</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (6 hours)</li>
                    <li>• Basic stage decoration</li>
                    <li>• Sound system</li>
                    <li>• Air-conditioning</li>
                    <li>• Parking space</li>
                    <li>• Up to 100 guests</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="tel:+917672024124"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors block text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Premium Reception</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (8 hours)</li>
                    <li>• Premium stage setup</li>
                    <li>• Professional lighting</li>
                    <li>• Sound system</li>
                    <li>• Dressing rooms</li>
                    <li>• Up to 200 guests</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="tel:+917672024124"
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors block text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Luxury Reception</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (10 hours)</li>
                    <li>• Luxury stage decoration</li>
                    <li>• Premium lighting & sound</li>
                    <li>• Event coordination</li>
                    <li>• Premium dressing rooms</li>
                    <li>• Up to 300 guests</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="tel:+917672024124"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors block text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Happy Clients Share Their Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;SLS Banquets reception hall made our wedding reception absolutely perfect! The elegant setting, professional service, and beautiful decorations exceeded our expectations. Our guests are still talking about how wonderful the venue was.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Priya & Rajesh</div>
                <div className="text-sm text-gray-500">Wedding Reception</div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;We celebrated our 25th anniversary at SLS Banquets reception hall, and it was magical! The intimate setting, elegant decorations, and professional service made our special day unforgettable.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Anjali & Suresh</div>
                <div className="text-sm text-gray-500">Anniversary Reception</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Perfect Reception Today!</h2>
            <p className="text-xl text-indigo-100 mb-6">
              Make your reception unforgettable at SLS Banquets. Our elegant reception hall in Vijayawada 
              provides the perfect setting for your special celebration with professional service and modern amenities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917672024124"
                className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now: +91 7672024124
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Get Reception Quote
              </Link>
            </div>
          </section>
        </article>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center">
          <Link
            href="/blog/mini-function-hall-vijayawada"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-2 w-4 h-4" />
            Previous: Mini Function Hall
          </Link>
          
          <Link
            href="/blog/birthday-party-hall-vijayawada"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Birthday Party Hall
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
