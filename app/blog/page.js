import Link from "next/link";
import Image from "next/image";
import SEO from "../components/SEO";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaTag, 
  FaArrowRight, 
  FaPhone, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaGift,
  FaUsers,
  FaBuilding,
  FaMusic,
  FaCamera
} from "react-icons/fa";

export const metadata = {
  title: "Blog | SLS Banquets - Event Planning Tips & Venue Guide",
  description: "Discover expert tips for planning weddings, receptions, and events at SLS Banquets. Learn about venue selection, decoration ideas, and event planning in Vijayawada.",
  keywords: "event planning tips, wedding planning, reception ideas, banquet hall guide, Vijayawada events, SLS Banquets blog"
};

const blogPosts = [
  {
    id: "best-banquet-hall-vijayawada",
    title: "Best Banquet Hall in Vijayawada: Your Complete Guide to SLS Banquets",
    excerpt: "Discover why SLS Banquets is considered the best banquet hall in Vijayawada. Learn about our premium facilities, location advantages, and what makes us the top choice for your special events.",
    date: "2024-01-15",
    category: "Venue Guide",
    readTime: "5 min read",
    image: "/galleryimg1.jpg",
    icon: FaStar
  },
  {
    id: "affordable-function-hall-vijayawada",
    title: "Affordable Function Hall in Vijayawada: Quality Events on Budget",
    excerpt: "Planning a memorable event doesn't have to break the bank. Explore how SLS Banquets offers premium facilities at affordable rates, making your dream event accessible in Vijayawada.",
    date: "2024-01-12",
    category: "Budget Planning",
    readTime: "4 min read",
    image: "/galleryimg2.jpg",
    icon: FaGift
  },
  {
    id: "wedding-hall-kandrika-vijayawada",
    title: "Wedding Hall in Kandrika Vijayawada: Perfect Venue for Your Big Day",
    excerpt: "Located in the heart of Kandrika, SLS Banquets offers the perfect wedding hall in Vijayawada. Discover our elegant spaces, modern amenities, and why couples choose us for their special day.",
    date: "2024-01-10",
    category: "Wedding Planning",
    readTime: "6 min read",
    image: "/galleryimg3.jpg",
    icon: FaHeart
  },
  {
    id: "mini-function-hall-vijayawada",
    title: "Mini Function Hall in Vijayawada: Intimate Events Made Special",
    excerpt: "Perfect for intimate gatherings, our mini function hall in Vijayawada provides cozy yet elegant spaces for smaller events. Learn about our flexible layouts and personalized service.",
    date: "2024-01-08",
    category: "Event Types",
    readTime: "3 min read",
    image: "/galleryimg4.jpg",
    icon: FaUsers
  },
  {
    id: "reception-hall-vijayawada",
    title: "Reception Hall in Vijayawada: Celebrate in Style at SLS Banquets",
    excerpt: "Make your reception unforgettable at SLS Banquets. Our reception hall in Vijayawada features modern amenities, elegant interiors, and professional service for your celebration.",
    date: "2024-01-05",
    category: "Reception Planning",
    readTime: "5 min read",
    image: "/galleryimg5.jpg",
    icon: FaBuilding
  },
  {
    id: "birthday-party-hall-vijayawada",
    title: "Birthday Party Hall in Vijayawada: Fun Celebrations for All Ages",
    excerpt: "From kids' parties to milestone birthdays, our birthday party hall in Vijayawada provides the perfect setting. Discover our party packages and celebration ideas.",
    date: "2024-01-03",
    category: "Party Planning",
    readTime: "4 min read",
    image: "/heroimg.jpg",
    icon: FaMusic
  }
];

export default function BlogPage() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SLS Banquets Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert Tips, Event Planning Guides, and Venue Insights for Your Perfect Celebration
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                      <IconComponent className="text-xs" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <FaClock className="mr-1 text-green-500" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact SLS Banquets today to book your perfect venue in Vijayawada. 
            Let us help make your special day unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917672024124"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <FaPhone />
              Call Now: +91 7672024124
            </a>
            <a
              href="tel:+917672024124"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              Get Event Plan
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
