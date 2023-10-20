import Image from "next/image";
import TestimonialSection from "./components/testimonial/TestimonialSection";
import ServiceSection from "./components/services/ServiceSection";
import ClientSection from "./components/clients/ClientSection";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a Full-stack web developer with strong knowledge of many different
          front-end and back-end technologies, responsive frameworks, databases,
          and best code practices. My objective is simply to be the best web
          developer that I can be and to contribute to the technology industry
          with all that I know and can do. I am dedicated to perfecting my craft
          by learning from more seasoned developers, remaining humble, and
          continuously making strides to learn all that I can about development.
          I&apos;m passionate about AI, I&apos;m currently learning machine
          learning in parallel with Python. I&apos;m curious about learning new
          things and updating my knowledge. I studied Mathematics, and I believe
          that my understanding of problem-solving and complex algorithms are
          also skills that have and will continue to contribute to my overall
          success as a developer.
        </p>
      </section>

      <ServiceSection />

      <TestimonialSection />
    </article>
  );
}
