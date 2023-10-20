import TestimonialSection from "./components/testimonial/TestimonialSection";
import ServiceSection from "./components/services/ServiceSection";
import Link from "next/link";

export default function Home() {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I&apos;m Mahamadou Nouridine, a full-stack software engineer specializing
          in MERN stack, NEXT js, NEST js, Redux, and Rails to create solutions
          for businesses and individuals. My background in solving complex
          mathematics problems during high-level studies aids me in tackling
          computer algorithms and challenges. I&apos;m passionate about
          problem-solving, driven by curiosity, and continuously improving my
          coding skills to develop innovative solutions.
          <span className="d-block">
            Consider sending me a message from my{" "}
            <Link className="d-inline" href="/contact">
              contact page
            </Link>{" "}
            or email me to{" "}
            <a className="d-inline" href="mailto:mahamadounouridinem@gmail.com">
              mahamadounouridinem@gmail.com
            </a>{" "}
            for further discussion.
          </span>
        </p>
      </section>

      <ServiceSection />

      <TestimonialSection />
    </article>
  );
}
