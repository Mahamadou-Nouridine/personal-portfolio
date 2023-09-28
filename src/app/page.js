import Image from "next/image";
import TestimonialSection from './components/testimonial/TestimonialSection'
// import styles from "./page.module.css";

export default function Home() {
  return (
    <article class="about  active" data-page="about">
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          I am a Fullstack web developer with strong knowledge of many different
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

      {/* <!--
    - service
  --> */}

      <section class="service">
        <h3 class="h3 service-title">What I Do</h3>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <Image
                src="./assets/images/svg-icons/backend.svg"
                alt="design icon"
                width={70}
                height={70}
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Backend Development</h4>

              <p class="service-item-text">
                Implementation of simples and complexes application
                architectures with modern technologies and frameworks.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <Image
                src="./assets/images/svg-icons/frontend.svg"
                alt="Web development icon"
                width={70}
                height={70}
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Front-End Development</h4>

              <p class="service-item-text">
                High-quality development of user interfaces at the professional
                level with modern technologies and frameworks.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <Image
                src="./assets/images/svg-icons/mobile.svg"
                alt="mobile app icon"
                width={70}
                height={70}
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Mobile apps</h4>

              <p class="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <Image
                src="./assets/images/svg-icons/deployment.svg"
                alt="Deployment"
                width={70}
                height={70}
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Deployment</h4>

              <p class="service-item-text">
                I bring your solutions ready to be consumed by your end users.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <TestimonialSection />

      {/* <!--
    - clients
  --> */}

      <section class="clients">
        <h3 class="h3 clients-title">Clients</h3>

        <ul class="clients-list has-scrollbar">
          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
