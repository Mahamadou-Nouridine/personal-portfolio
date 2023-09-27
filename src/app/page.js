import Image from "next/image";
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
                Implementation of simples and complexes application architectures with modern technologies and frameworks.
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
                High-quality development of user interfaces at the professional level with modern technologies and frameworks.
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

      {/* <!--
    - testimonials
  --> */}

      <section class="testimonials">
        <h3 class="h3 testimonials-title">Testimonials</h3>

        <ul class="testimonials-list has-scrollbar">
          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                Daniel lewis
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  I wanted to take a moment to express my sincere appreciation
                  for the incredible work that you have done in designing our
                  new home. From the moment we first met, it was clear that you
                  had a true passion for architecture and an unwavering
                  commitment to creating spaces that are both beautiful and
                  functional.
                </p>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  src="./assets/images/avatar-2.png"
                  alt="Jessica miller"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                Jessica miller
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  I wanted to take a moment to express my sincere appreciation
                  for the incredible work that you have done in designing our
                  new home. From the moment we first met, it was clear that you
                  had a true passion for architecture and an unwavering
                  commitment to creating spaces that are both beautiful and
                  functional.
                </p>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  src="./assets/images/avatar-3.png"
                  alt="Emily evans"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                Emily evans
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  I wanted to take a moment to express my sincere appreciation
                  for the incredible work that you have done in designing our
                  new home. From the moment we first met, it was clear that you
                  had a true passion for architecture and an unwavering
                  commitment to creating spaces that are both beautiful and
                  functional.
                </p>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  src="./assets/images/avatar-4.png"
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                Henry william
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  I wanted to take a moment to express my sincere appreciation
                  for the incredible work that you have done in designing our
                  new home. From the moment we first met, it was clear that you
                  had a true passion for architecture and an unwavering
                  commitment to creating spaces that are both beautiful and
                  functional.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/*
  <!--
    - testimonials modal
  --> */}

      <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>

        <section class="testimonials-modal">
          <button class="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
              <img
                src="./assets/images/avatar-1.png"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>

            <time datetime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>

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
