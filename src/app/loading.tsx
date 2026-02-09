import { 
  SkeletonHero, 
  SkeletonAbout, 
  SkeletonSection, 
  SkeletonWhyChooseCard, 
  SkeletonCard 
} from "@/components/Skeletons";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-neutral-off-white">
      {/* Hero */}
      <SkeletonHero />
      
      {/* About */}
      <SkeletonAbout />
      
      {/* Why Choose Marina */}
      <SkeletonSection 
        cardCount={3} 
        Component={SkeletonWhyChooseCard} 
        bgClass="bg-white"
        titleWidth="w-1/2"
      />
      
      {/* Portfolio */}
      <SkeletonSection 
        cardCount={6} 
        Component={SkeletonCard} 
        bgClass="bg-primary-beige/50"
        titleWidth="w-1/4"
      />
      
      {/* Testimonials */}
      <SkeletonSection 
        cardCount={3} 
        Component={SkeletonCard} 
        bgClass="bg-white"
        titleWidth="w-1/3"
      />
    </div>
  );
}
