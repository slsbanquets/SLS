import Link from "next/link";
import SEO from "../components/SEO";
import { 
  FaHeart, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaCar, 
  FaUsers, 
  FaBirthdayCake, 
  FaMusic, 
  FaStar, 
  FaCheck, 
  FaPhone, 
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
  FaUserTie,
  FaSnowflake,
  FaTv,
  FaMicrophone,
  FaCogs,
  FaGift,
  FaUtensils,
  FaCamera,
  FaHome
} from "react-icons/fa";

export const metadata = {
  title: "Wedding Hall in Vijayawada | SLS Banquets - Perfect Wedding Venue",
  description: "Find the perfect wedding hall in Vijayawada at SLS Banquets. Located in Kandrika, we offer elegant wedding venues with modern amenities, professional stage setup, and beautiful decorations for your special day.",
  keywords: "wedding hall in Vijayawada, marriage hall Vijayawada, wedding venue Vijayawada, reception hall Vijayawada, wedding reception venue Vijayawada, marriage ceremony hall Vijayawada, wedding function hall Vijayawada, bridal venue Vijayawada, wedding celebration hall Vijayawada, matrimonial hall Vijayawada"
};

export default function WeddingHallVijayawadaPage() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-900 to-red-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wedding Hall in Vijayawada
            </h1>
            <p className="text-xl text-pink-100">
              SLS Banquets - Your Dream Wedding Destination in the Heart of Vijayawada
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
              Located in the heart of Vijayawada, SLS Banquets offers the perfect <strong>wedding hall in Vijayawada</strong> for your special day. Our elegant venue combines traditional charm with modern amenities, creating the ideal setting for your wedding celebration. With easy accessibility and beautiful surroundings, we make your dream wedding come true.
            </p>
          </div>

          {/* Why Choose SLS in Vijayawada */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SLS Banquets in Vijayawada?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-900 mb-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-pink-600" />
                  Prime Vijayawada Location
                </h3>
                <p className="text-gray-700">
                  Situated in Kandrika, our wedding hall is easily accessible from all major areas of Vijayawada including Payakapuram, Journalist Colony, and Rajiv-Kandrika Main Road. The convenient location makes it perfect for guests traveling from different parts of the city.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <FaBuilding className="text-red-600" />
                  Elegant Wedding Spaces
                </h3>
                <p className="text-gray-700">
                  Our wedding hall features beautifully designed interiors with romantic lighting, elegant decorations, and spacious areas perfect for both intimate ceremonies and grand celebrations.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <FaCar className="text-purple-600" />
                  Convenient Parking
                </h3>
                <p className="text-gray-700">
                  We understand the importance of convenient parking for your wedding guests. Our venue offers ample parking space, ensuring a hassle-free experience for everyone attending your special day.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <FaCogs className="text-orange-600" />
                  Professional Services
                </h3>
                <p className="text-gray-700">
                  Our experienced team provides professional wedding services including stage setup, decoration, and event coordination to ensure your wedding day is flawless and memorable.
                </p>
              </div>
            </div>
          </section>

          {/* Wedding Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Wedding Services in Vijayawada</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Wedding Services Include:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaTv className="text-pink-500 mr-3" />
                    <span>Professional Stage Setup & Decoration</span>
                  </li>
                  <li className="flex items-center">
                    <FaMicrophone className="text-red-500 mr-3" />
                    <span>High-Quality Sound & Lighting System</span>
                  </li>
                  <li className="flex items-center">
                    <FaUsers className="text-purple-500 mr-3" />
                    <span>Spacious Bridal & Groom Dressing Rooms</span>
                  </li>
                  <li className="flex items-center">
                    <FaSnowflake className="text-blue-500 mr-3" />
                    <span>Fully Air-Conditioned Comfort</span>
                  </li>
                  <li className="flex items-center">
                    <FaCar className="text-green-500 mr-3" />
                    <span>Ample Parking for Guests</span>
                  </li>
                </ul>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaUtensils className="text-orange-500 mr-3" />
                    <span>Catering Support & Kitchen Facilities</span>
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
                    <span>Flexible Wedding Packages</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Wedding Traditions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect for All Wedding Traditions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaHeart className="text-4xl text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">South Indian Weddings</h3>
                <p className="text-gray-600">Traditional ceremonies with authentic cultural elements and proper stage setup for rituals</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaStar className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Modern Weddings</h3>
                <p className="text-gray-600">Contemporary celebrations with modern amenities and elegant decorations</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-4xl text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Half-Saree Functions</h3>
                <p className="text-gray-600">Traditional coming-of-age ceremonies with authentic cultural ambiance</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaBirthdayCake className="text-4xl text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Engagement Ceremonies</h3>
                <p className="text-gray-600">Intimate and elegant spaces for engagement celebrations</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaMusic className="text-4xl text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Reception Parties</h3>
                <p className="text-gray-600">Grand reception celebrations with professional stage and lighting</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaGift className="text-4xl text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Anniversary Celebrations</h3>
                <p className="text-gray-600">Special anniversary celebrations in romantic settings</p>
              </div>
            </div>
          </section>

          {/* Location Benefits */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vijayawada Location Benefits</h2>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-6">
                Our location in Vijayawada offers several advantages for your wedding:
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Happy Couples from Vijayawada</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;SLS Banquets made our wedding day absolutely perfect! The location was convenient for all our guests, and the facilities were outstanding. Our wedding was everything we dreamed of and more.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Priya & Rajesh</div>
                <div className="text-sm text-gray-500">Wedding in Vijayawada</div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;We chose SLS Banquets for our wedding because of its perfect location in Vijayawada. The staff was professional, the facilities were excellent, and our guests loved the convenient parking and beautiful venue.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Anjali & Suresh</div>
                <div className="text-sm text-gray-500">Wedding Reception</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-pink-900 to-red-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Dream Wedding in Vijayawada Today!</h2>
            <p className="text-xl text-pink-100 mb-6">
              Don&apos;t wait! Secure your perfect wedding date at SLS Banquets, the most sought-after 
              wedding hall in Vijayawada. Let us help you create the wedding of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917672024124"
                className="bg-white text-pink-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now: +91 7672024124
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-900 transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Schedule Venue Visit
              </Link>
            </div>
          </section>
        </article>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Link>
          
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Visit Our Blog
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
