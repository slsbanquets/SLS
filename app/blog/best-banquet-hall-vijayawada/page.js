import Link from "next/link";
import SEO from "../../components/SEO";
import { 
  FaMapMarkerAlt, 
  FaSnowflake, 
  FaCar, 
  FaCogs, 
  FaHeart, 
  FaBirthdayCake, 
  FaBuilding, 
  FaMusic, 
  FaUserTie, 
  FaStar, 
  FaCheck, 
  FaPhone, 
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
  FaUsers,
  FaUtensils,
  FaWifi,
  FaParking,
  FaTv,
  FaMicrophone,
  FaGift
} from "react-icons/fa";

export const metadata = {
  title: "Best Banquet Hall in Vijayawada | SLS Banquets - Premium Event Venue",
  description: "Discover why SLS Banquets is the best banquet hall in Vijayawada. Located in Kandrika, we offer premium facilities, air-conditioning, parking, and elegant interiors for weddings, receptions, and all special events.",
  keywords: "best banquet hall in Vijayawada, premium function hall Vijayawada, top-rated event venue Kandrika, elegant banquet hall Vijayawada, luxury event space Vijayawada, best wedding venue Vijayawada, reception hall Kandrika, marriage hall Vijayawada, corporate event venue Vijayawada, family gathering hall Vijayawada"
};

export default function BestBanquetHallPage() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Best Banquet Hall in Vijayawada
            </h1>
            <p className="text-xl text-blue-100">
              SLS Banquets - Your Premier Event Destination in Kandrika
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
              When it comes to finding the <strong>best banquet hall in Vijayawada</strong>, SLS Banquets stands out as the premier choice for discerning clients. Located strategically in Kandrika, our venue combines accessibility, elegance, and world-class facilities to create the perfect setting for your special events.
            </p>
          </div>

          {/* Why SLS Banquets is the Best */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SLS Banquets as the Best Banquet Hall in Vijayawada?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  Prime Location
                </h3>
                <p className="text-gray-700">
                  Situated in Kandrika, Vijayawada, our banquet hall is easily accessible from all major areas including Payakapuram, Journalist Colony, and Rajiv-Kandrika Main Road. The convenient location makes it perfect for guests traveling from different parts of the city.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <FaBuilding className="text-green-600" />
                  Modern Facilities
                </h3>
                <p className="text-gray-700">
                  Our banquet hall features fully air-conditioned spaces, modern lighting systems, professional sound equipment, and elegant interiors. Every detail is designed to provide comfort and sophistication for your guests.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <FaCar className="text-purple-600" />
                  Ample Parking
                </h3>
                <p className="text-gray-700">
                  We understand the importance of convenient parking for your guests. Our venue offers dedicated parking spaces, ensuring a hassle-free experience for everyone attending your event.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <FaCogs className="text-orange-600" />
                  Versatile Spaces
                </h3>
                <p className="text-gray-700">
                  Whether you&apos;re planning a grand wedding reception, intimate birthday party, or corporate event, our flexible spaces can be customized to meet your specific requirements and guest count.
                </p>
              </div>
            </div>
          </section>

          {/* Event Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect for Every Occasion</h2>
            <p className="text-gray-700 mb-6">
              As the <strong>best banquet hall in Vijayawada</strong>, SLS Banquets is the ideal venue for:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaHeart className="text-4xl text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Weddings & Receptions</h3>
                <p className="text-gray-600">Elegant spaces for your special day with professional stage setup and decoration services.</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaBirthdayCake className="text-4xl text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Birthday Parties</h3>
                <p className="text-gray-600">Fun and festive atmosphere for birthday celebrations of all ages.</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUserTie className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Corporate Events</h3>
                <p className="text-gray-600">Professional setting for meetings, conferences, and corporate celebrations.</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaMusic className="text-4xl text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cultural Programs</h3>
                <p className="text-gray-600">Perfect stage and lighting for cultural events and performances.</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-4xl text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Half-Saree Functions</h3>
                <p className="text-gray-600">Traditional South Indian ceremonies with authentic cultural ambiance.</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaStar className="text-4xl text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Family Gatherings</h3>
                <p className="text-gray-600">Intimate spaces for family reunions and special celebrations.</p>
              </div>
            </div>
          </section>

          {/* Features & Amenities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Features & Amenities</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Makes Us the Best Banquet Hall in Vijayawada?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaSnowflake className="text-blue-500 mr-3" />
                    <span>Fully Air-Conditioned Halls</span>
                  </li>
                  <li className="flex items-center">
                    <FaTv className="text-purple-500 mr-3" />
                    <span>Professional Stage Setup</span>
                  </li>
                  <li className="flex items-center">
                    <FaMicrophone className="text-green-500 mr-3" />
                    <span>Modern Lighting & Sound System</span>
                  </li>
                  <li className="flex items-center">
                    <FaUsers className="text-pink-500 mr-3" />
                    <span>Dedicated Dressing Rooms</span>
                  </li>
                  <li className="flex items-center">
                    <FaCar className="text-orange-500 mr-3" />
                    <span>Ample Parking Space</span>
                  </li>
                </ul>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaStar className="text-yellow-500 mr-3" />
                    <span>Elegant Interior Design</span>
                  </li>
                  <li className="flex items-center">
                    <FaCogs className="text-indigo-500 mr-3" />
                    <span>Flexible Seating Arrangements</span>
                  </li>
                  <li className="flex items-center">
                    <FaUserTie className="text-blue-500 mr-3" />
                    <span>Professional Event Support</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span>Clean & Hygienic Environment</span>
                  </li>
                  <li className="flex items-center">
                    <FaGift className="text-red-500 mr-3" />
                    <span>Affordable Pricing Packages</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Location Benefits */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Location in Kandrika, Vijayawada</h2>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-6">
                Our location in Kandrika makes SLS Banquets easily accessible from all major areas of Vijayawada:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Nearby Areas:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Payakapuram (5 minutes)</li>
                    <li>• Journalist Colony (3 minutes)</li>
                    <li>• Rajiv-Kandrika Main Road (2 minutes)</li>
                    <li>• Benz Circle (10 minutes)</li>
                    <li>• Railway Station (15 minutes)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Transportation:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 48R Bus Route (Direct access)</li>
                    <li>• Auto-rickshaw available</li>
                    <li>• Taxi services nearby</li>
                    <li>• Private vehicle parking</li>
                    <li>• Easy GPS navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;SLS Banquets truly deserves to be called the best banquet hall in Vijayawada. The facilities are excellent, the staff is professional, and the location is perfect. Our wedding reception was flawless!&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Priya & Rajesh</div>
                <div className="text-sm text-gray-500">Wedding Reception</div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;We&apos;ve been to many function halls in Vijayawada, but SLS Banquets stands out. The air-conditioning, parking, and overall ambiance make it the best choice for any event.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Suresh Kumar</div>
                <div className="text-sm text-gray-500">Corporate Event</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Book the Best Banquet Hall in Vijayawada Today!</h2>
            <p className="text-xl text-blue-100 mb-6">
              Experience the difference that makes SLS Banquets the top choice for events in Vijayawada. 
              Contact us now to secure your date and create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917672024124"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now: +91 7672024124
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Get Free Quote
              </Link>
            </div>
          </section>
        </article>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
          
          <Link
            href="/blog/affordable-function-hall-vijayawada"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Affordable Function Hall
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
