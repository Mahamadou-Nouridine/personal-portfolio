import TestimonialSection from "./components/testimonial/TestimonialSection";
import ServiceSection from "./components/services/ServiceSection";
import AboutMeSection from "./components/AboutMeSection";
import PageTile from "./components/PageTitle";

export default function Home() {
  return (
    <article className="about  active" data-page="about">
      <PageTile section="about" />

      <AboutMeSection />

      <ServiceSection />

      <TestimonialSection />
    </article>
  );
}
