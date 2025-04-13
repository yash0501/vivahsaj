"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { weddingCategories, type Category } from "@/lib/data";

export function ExploreCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {weddingCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={category.route} className="block h-full">
      <article className="bg-background-main rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg h-full flex flex-col">
        <div className="relative w-full h-48">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-text-primary hover:text-brand-primary transition">
            {category.name}
          </h2>
          
          <p className="text-text-secondary mb-4 flex-grow">{category.description}</p>
          
          <span className="text-brand-primary font-medium hover:text-brand-secondary transition inline-flex items-center">
            View Services <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
