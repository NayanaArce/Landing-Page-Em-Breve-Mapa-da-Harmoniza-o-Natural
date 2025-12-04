import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { EmailCapture } from "./components/EmailCapture";
import { ContentPreview } from "./components/ContentPreview";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { MetaPixel } from "./components/MetaPixel";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <MetaPixel />
      <Navbar />
      <Hero />
      <Benefits />
      <ContentPreview />
      <EmailCapture />
      <Footer />
    </div>
  );
}