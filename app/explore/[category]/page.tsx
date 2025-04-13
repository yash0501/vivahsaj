import { Metadata } from "next";
import { weddingCategories } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

// Dynamic metadata based on the category
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  // Await the entire params object first
  const params = await props.params;
  const categoryId = String(params.category || '');

  const category = weddingCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return {
      title: "Category Not Found | Vivahsaj",
    };
  }

  return {
    title: `${category.name} Services | Vivahsaj`,
    description: category.description,
  };
}

// Generate static params for all categories
export async function generateStaticParams() {
  return weddingCategories.map(category => ({
    category: category.id,
  }));
}

// Mock data for vendors in each category - replace with real data later
const mockVendors = [
  { id: 1, name: "Royal Gardens", description: "Luxurious venue with spacious gardens", rating: 4.8, price: "₹₹₹", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Blue Petals", description: "Elegant indoor venue with customizable themes", rating: 4.7, price: "₹₹", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Horizon Events", description: "Modern venue with panoramic city views", rating: 4.9, price: "₹₹₹₹", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Riverside Manor", description: "Historic venue with waterfront views", rating: 4.6, price: "₹₹₹", image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export default async function CategoryPage(props: PageProps) {
  // Await the entire params object first
  const params = await props.params;
  const categoryId = String(params.category || '');

  const category = weddingCategories.find(cat => cat.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-20 md:pb-8">
      <Link href="/explore" className="inline-flex items-center text-brand-primary mb-6 hover:text-brand-secondary transition">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to categories
      </Link>
      
      <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
          <p className="text-white/90 max-w-2xl">{category.description}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Top {category.name} Vendors</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-text-secondary">Filter</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-text-secondary">Sort</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVendors.map(vendor => (
            <Link key={vendor.id} href={`/explore/${categoryId}/${vendor.id}`} className="block h-full">
              <article className="bg-background-main rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-text-primary">{vendor.name}</h3>
                    <span className="text-text-secondary">{vendor.price}</span>
                  </div>
                  <p className="text-text-secondary mb-4 text-sm">{vendor.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      ★ {vendor.rating}
                    </div>
                    <span className="text-brand-primary font-medium hover:text-brand-secondary transition">
                      View Details →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-brand-primary text-white px-8 py-3 rounded-lg hover:bg-brand-secondary transition font-medium">
          See More {category.name} Options
        </button>
      </div>
    </div>
  );
}
