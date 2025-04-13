import { Metadata } from "next";
import { ExploreCategories } from "@/components/ExploreCategories";

export const metadata: Metadata = {
  title: "Explore Wedding Categories | Vivahsaj",
  description: "Explore different wedding categories and services for your perfect wedding",
};

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-8 pb-20 md:pb-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-text-primary text-center">
          Explore Categories
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto text-center mb-8">
          Discover curated services from our premium vendors to create your dream wedding.
          Each category offers specially selected options to suit your unique style and preferences.
        </p>
      </div>
      <ExploreCategories />
    </div>
  );
}
