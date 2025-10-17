import Link from "next/link";
import SEO from "../../components/SEO";
import { 
  FaDollarSign, 
  FaBullseye, 
  FaBox, 
  FaHandshake, 
  FaHeart, 
  FaBirthdayCake, 
  FaUsers, 
  FaBuilding, 
  FaMusic, 
  FaStar, 
  FaCheck, 
  FaPhone, 
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
  FaGift,
  FaUserTie,
  FaSnowflake,
  FaCar,
  FaTv,
  FaMicrophone,
  FaCogs,
  FaMapMarkerAlt
} from "react-icons/fa";

export const metadata = {
  title: "Affordable Function Hall in Vijayawada | SLS Banquets - Budget-Friendly Events",
  description: "Find the most affordable function hall in Vijayawada at SLS Banquets. Premium facilities at budget-friendly prices. Perfect for weddings, receptions, birthdays, and all special events in Kandrika.",
  keywords: "affordable function hall in Vijayawada, budget banquet hall Vijayawada, cheap function hall Kandrika, economical event venue Vijayawada, low cost marriage hall Vijayawada, affordable wedding venue Vijayawada, budget reception hall Vijayawada, cheap party hall Vijayawada, economical function hall Kandrika, affordable event space Vijayawada"
};

export default function AffordableFunctionHallPage() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Affordable Function Hall in Vijayawada
            </h1>
            <p className="text-xl text-green-100">
              SLS Banquets - Premium Quality at Budget-Friendly Prices
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
              Planning a memorable event doesn&apos;t have to strain your budget. At SLS Banquets, we believe that everyone deserves access to premium facilities for their special occasions. As the most <strong>affordable function hall in Vijayawada</strong>, we offer exceptional value without compromising on quality, service, or elegance.
            </p>
          </div>

          {/* Why We're Affordable */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why SLS Banquets is the Most Affordable Function Hall in Vijayawada</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <FaDollarSign className="text-green-600" />
                  Transparent Pricing
                </h3>
                <p className="text-gray-700">
                  No hidden costs or surprise charges. Our pricing is straightforward and includes all essential amenities. You know exactly what you&apos;re paying for, making budget planning simple and stress-free.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <FaBullseye className="text-blue-600" />
                  Value for Money
                </h3>
                <p className="text-gray-700">
                  We provide premium facilities including air-conditioning, parking, stage setup, and modern amenities at prices that won&apos;t break your budget. Every rupee spent delivers maximum value.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <FaBox className="text-purple-600" />
                  All-Inclusive Packages
                </h3>
                <p className="text-gray-700">
                  Our packages include everything you need for a successful event - from basic setup to essential amenities. No need to hire multiple vendors or worry about additional costs.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <FaHandshake className="text-orange-600" />
                  Flexible Payment Options
                </h3>
                <p className="text-gray-700">
                  We understand that event planning involves multiple expenses. That&apos;s why we offer flexible payment plans and options to help you manage your budget effectively.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable Pricing for Every Event Type</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Budget-Friendly Packages Include:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Basic Package</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (4 hours)</li>
                    <li>• Basic seating arrangement</li>
                    <li>• Air-conditioning</li>
                    <li>• Parking space</li>
                    <li>• Cleanup service</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="tel:+917672024124"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors block text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Standard Package</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (6 hours)</li>
                    <li>• Stage setup</li>
                    <li>• Basic lighting</li>
                    <li>• Dressing room access</li>
                    <li>• Sound system</li>
                    <li>• Parking & cleanup</li>
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
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Premium Package</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hall rental (8 hours)</li>
                    <li>• Professional stage setup</li>
                    <li>• Modern lighting system</li>
                    <li>• Premium sound system</li>
                    <li>• Dressing rooms</li>
                    <li>• Event coordination</li>
                    <li>• Parking & cleanup</li>
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
              </div>
            </div>
          </section>

          {/* Cost-Saving Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Make Your Event Even More Affordable</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Planning Tips:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Book during off-peak seasons for better rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Choose weekday events for lower pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Combine multiple events in one booking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Opt for our all-inclusive packages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Book well in advance for early bird discounts</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s Included in Our Affordable Rates:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Fully air-conditioned hall</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Ample parking space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Basic stage and lighting setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Clean and hygienic facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Professional event support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Flexible seating arrangements</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Event Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable Events for Every Occasion</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <FaHeart className="text-4xl text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Wedding Receptions</h3>
                <p className="text-gray-600 text-sm mb-4">Elegant and affordable wedding reception packages with premium facilities</p>
                <a
                  href="tel:+917672024124"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Plan
                </a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <FaBirthdayCake className="text-4xl text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Birthday Parties</h3>
                <p className="text-gray-600 text-sm mb-4">Fun birthday celebrations perfect for intimate gatherings</p>
                <a
                  href="tel:+917672024124"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Plan
                </a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <FaUsers className="text-4xl text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Half-Saree Functions</h3>
                <p className="text-gray-600 text-sm mb-4">Traditional ceremonies with authentic cultural ambiance</p>
                <a
                  href="tel:+917672024124"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                >
                  Get Plan
                </a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <FaUserTie className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Corporate Events</h3>
                <p className="text-gray-600 text-sm mb-4">Professional meetings and celebrations with modern amenities</p>
                <a
                  href="tel:+917672024124"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors"
                >
                  Get Plan
                </a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <FaMusic className="text-4xl text-red-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cultural Programs</h3>
                <p className="text-gray-600 text-sm mb-4">Stage and lighting for performances and cultural events</p>
                <a
                  href="tel:+917672024124"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Get Plan
                </a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <FaStar className="text-4xl text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Family Gatherings</h3>
                <p className="text-gray-600 text-sm mb-4">Intimate family celebrations in cozy and comfortable setting</p>
                <a
                  href="tel:+917672024124"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Plan
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Budget-Conscious Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;SLS Banquets proved that you don&apos;t need to spend a fortune for a beautiful event. Their affordable function hall in Vijayawada gave us everything we needed for our daughter&apos;s wedding reception at a fraction of the cost we expected.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Lakshmi & Venkatesh</div>
                <div className="text-sm text-gray-500">Wedding Reception</div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;As a small business owner, I needed an affordable venue for our annual celebration. SLS Banquets delivered excellent value with their budget-friendly packages and professional service.&rdquo;
                </p>
                <div className="font-semibold text-gray-900">- Ravi Kumar</div>
                <div className="text-sm text-gray-500">Corporate Event</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Affordable Function Hall Quote Today!</h2>
            <p className="text-xl text-green-100 mb-6">
              Don&apos;t let budget constraints limit your celebration. Contact SLS Banquets for the most 
              affordable function hall in Vijayawada and create unforgettable memories without breaking the bank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917672024124"
                className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call for Best Price: +91 7672024124
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors flex items-center justify-center gap-2"
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
            href="/blog/best-banquet-hall-vijayawada"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-2 w-4 h-4" />
            Previous: Best Banquet Hall
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
