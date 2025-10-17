import Link from "next/link";
import SEO from "../../components/SEO";
import { 
  FaUsers, 
  FaMapMarkerAlt, 
  FaBuilding, 
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
  FaUserTie,
  FaSnowflake,
  FaTv,
  FaMicrophone,
  FaCogs,
  FaGift,
  FaUtensils,
  FaHome
} from "react-icons/fa";

export const metadata = {
  title: "Mini Function Hall in Vijayawada | SLS Banquets - Intimate Events Made Special",
  description: "Perfect for intimate gatherings, our mini function hall in Vijayawada provides cozy yet elegant spaces for smaller events. Learn about our flexible layouts and personalized service at SLS Banquets.",
  keywords: "mini function hall in Vijayawada, small function hall Vijayawada, intimate event venue Vijayawada, small banquet hall Vijayawada, mini wedding hall Vijayawada, small party hall Vijayawada, intimate gathering venue Vijayawada, small event space Vijayawada, mini reception hall Vijayawada, small celebration venue Vijayawada"
};

export default function MiniFunctionHallPage() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mini Function Hall in Vijayawada
            </h1>
            <p className="text-xl text-purple-100">
              SLS Banquets - Intimate Events Made Special
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
              Perfect for intimate gatherings, our <strong>mini function hall in Vijayawada</strong> provides cozy yet elegant spaces for smaller events. At SLS Banquets, we understand that not every celebration needs a grand venue. Our mini function hall offers the perfect balance of intimacy and elegance, making it ideal for close family gatherings, small weddings, and intimate celebrations.
            </p>
          </div>

          {/* Why Choose Mini Function Hall */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Mini Function Hall in Vijayawada?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <FaHome className="text-purple-600" />
                  Intimate Atmosphere
                </h3>
                <p className="text-gray-700">
                  Our mini function hall creates a warm, intimate atmosphere perfect for close family gatherings and small celebrations. The cozy setting allows for meaningful interactions and creates lasting memories.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <FaUsers className="text-blue-600" />
                  Perfect for Small Groups
                </h3>
                <p className="text-gray-700">
                  Designed specifically for smaller gatherings, our mini function hall accommodates 20-50 guests comfortably, ensuring everyone feels included and the celebration remains personal and meaningful.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <FaGift className="text-green-600" />
                  Cost-Effective
                </h3>
                <p className="text-gray-700">
                  Our mini function hall offers excellent value for money, providing all the amenities of a larger venue at a fraction of the cost, making it perfect for budget-conscious celebrations.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <FaCogs className="text-orange-600" />
                  Flexible Layout
                </h3>
                <p className="text-gray-700">
                  The flexible layout of our mini function hall can be customized to suit different types of events, from intimate dinners to small ceremonies, ensuring your celebration is exactly as you envision.
                </p>
              </div>
            </div>
          </section>

          {/* Perfect Events */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect for These Intimate Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaHeart className="text-4xl text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Small Weddings</h3>
                <p className="text-gray-600">Intimate wedding ceremonies with close family and friends in a cozy, romantic setting</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaBirthdayCake className="text-4xl text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Birthday Parties</h3>
                <p className="text-gray-600">Perfect for milestone birthdays and intimate birthday celebrations</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-4xl text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Family Reunions</h3>
                <p className="text-gray-600">Cozy gatherings for family reunions and special family moments</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUserTie className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Business Meetings</h3>
                <p className="text-gray-600">Professional small business meetings and corporate gatherings</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaMusic className="text-4xl text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cultural Events</h3>
                <p className="text-gray-600">Small cultural programs and intimate performances</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaStar className="text-4xl text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Anniversary Celebrations</h3>
                <p className="text-gray-600">Romantic anniversary celebrations in an intimate setting</p>
              </div>
            </div>
          </section>

          {/* Features & Amenities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mini Function Hall Features</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Makes Our Mini Function Hall Special?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaSnowflake className="text-blue-500 mr-3" />
                    <span>Fully Air-Conditioned Comfort</span>
                  </li>
                  <li className="flex items-center">
                    <FaTv className="text-purple-500 mr-3" />
                    <span>Basic Stage Setup</span>
                  </li>
                  <li className="flex items-center">
                    <FaMicrophone className="text-green-500 mr-3" />
                    <span>Sound System</span>
                  </li>
                  <li className="flex items-center">
                    <FaUsers className="text-pink-500 mr-3" />
                    <span>Dressing Room Access</span>
                  </li>
                  <li className="flex items-center">
                    <FaCar className="text-orange-500 mr-3" />
                    <span>Parking Space</span>
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
                    <span>Event Support</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span>Clean & Hygienic Environment</span>
                  </li>
                  <li className="flex items-center">
                    <FaGift className="text-red-500 mr-3" />
                    <span>Affordable Pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Capacity & Layout */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Capacity & Layout Options</h2>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Flexible Layout for Every Occasion</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Theater Style</h4>
                  <p className="text-gray-700 mb-3">Up to 50 guests</p>
                  <p className="text-sm text-gray-600">Perfect for presentations and performances</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Banquet Style</h4>
                  <p className="text-gray-700 mb-3">Up to 30 guests</p>
                  <p className="text-sm text-gray-600">Ideal for intimate dinners and celebrations</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">U-Shape</h4>
                  <p className="text-gray-700 mb-3">Up to 25 guests</p>
                  <p className="text-sm text-gray-600">Perfect for meetings and discussions</p>
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
                  &ldquo;The mini function hall at SLS Banquets was perfect for our intimate wedding ceremony. The cozy atmosphere made our special day even more meaningful, and the staff was incredibly helpful.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Priya & Rajesh</div>
                <div className="text-sm text-gray-500">Intimate Wedding</div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;We celebrated our daughter&apos;s birthday in the mini function hall, and it was perfect! The intimate setting made everyone feel comfortable, and the facilities were excellent.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Suresh Kumar</div>
                <div className="text-sm text-gray-500">Birthday Celebration</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Intimate Event Today!</h2>
            <p className="text-xl text-purple-100 mb-6">
              Create unforgettable memories in our cozy mini function hall. Perfect for intimate celebrations, 
              small gatherings, and meaningful moments with your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917672024124"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now: +91 7672024124
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Get Quote
              </Link>
            </div>
          </section>
        </article>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center">
          <Link
            href="/blog/wedding-hall-kandrika-vijayawada"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-2 w-4 h-4" />
            Previous: Wedding Hall Kandrika
          </Link>
          
          <Link
            href="/blog/reception-hall-vijayawada"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Reception Hall
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
