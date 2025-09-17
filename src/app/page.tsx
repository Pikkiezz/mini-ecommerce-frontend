import { Header } from '@/components/layout';
import Hero from '@/components/home/Hero';
import ScrollingTags from '@/components/shared/ScrollingTags';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import { Footer } from '@/components/layout';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ScrollingTags />
        <FeaturedProducts />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
