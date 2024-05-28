import TestimonialSection from "./components/testimonial/TestimonialSection";
import ServiceSection from "./components/services/ServiceSection";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const tNav  = useTranslations('navbar')
  const tAbout  = useTranslations('about-page')
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">{tNav('about')}</h2>
      </header>

      <section className="about-text">
        <p>
          {tAbout("about")}
          <span className="d-block">
            {tAbout("consider")}{" "}
            <Link className="d-inline" href="/contact">
              {tAbout("contact-page")}
            </Link>{" "}
            {tAbout("or-email")}{" "}
            <a className="d-inline" href="mailto:mahamadounouridinem@gmail.com">
              mahamadounouridinem@gmail.com
            </a>{" "}
            {tAbout("for-more")}
          </span>
        </p>
      </section>

      <ServiceSection />

      <TestimonialSection />
    </article>
  );
}
