import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "10 Must-Visit Attractions Near Our Hotel",
    excerpt:
      "Discover the best local attractions and make the most of your stay with our curated list of nearby sights and experiences.",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80",
    author: "Emily Johnson",
  },
  {
    title: "A Foodie's Guide to Our Hotel's Restaurants",
    excerpt:
      "Embark on a culinary journey through our hotel's diverse dining options, from fine dining to casual cafes.",
    date: "June 2, 2023",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
  },
  {
    title: "Wellness Retreat: Rejuvenate at Our Spa",
    excerpt:
      "Learn about our spa's signature treatments and how you can create a personalized wellness experience during your stay.",
    date: "June 20, 2023",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    author: "Sophia Patel",
  },
  // Add more blog posts as needed
]

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-64 relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">Our Blog</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-4 inline-block text-[#b4975a] hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

