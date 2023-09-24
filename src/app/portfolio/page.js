import React from "react";

const portfolio = () => {
  return (
    <article class="portfolio" data-page="portfolio">
      <header>
        <h2 class="h2 article-title">Portfolio</h2>
      </header>

      <section class="projects">
        <ul class="filter-list">
          <li class="filter-item">
            <button class="active" data-filter-btn>
              All
            </button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>Building Drawing</button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>3D Modeling</button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>House Blueprint</button>
          </li>
        </ul>

        <div class="filter-select-box">
          <button class="filter-select" data-select>
            <div class="select-value" data-selecct-value>
              Select category
            </div>

            <div class="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul class="select-list">
            <li class="select-item">
              <button data-select-item>All</button>
            </li>

            <li class="select-item">
              <button data-select-item>Building Drawing</button>
            </li>

            <li class="select-item">
              <button data-select-item>3D Modeling</button>
            </li>

            <li class="select-item">
              <button data-select-item>House Blueprint</button>
            </li>
          </ul>
        </div>

        <ul class="project-list">
          <li
            class="project-item  active"
            data-filter-item
            data-category="building drawing"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/house.jpg"
                  alt="finance"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">architecture</h3>

              <p class="project-category">Building Drawing</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="building drawing"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/house2.jpg"
                  alt="orizon"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Architecture</h3>

              <p class="project-category">Building Drawing</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="building drawing"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/house4.jpg"
                  alt="fundo"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Architecture</h3>

              <p class="project-category">Building Drawing</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="3d modeling"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/drawing.jpg"
                  alt="brawlhalla"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Architecture</h3>

              <p class="project-category">3D Modeling</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="3d modeling"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/house3.jpg"
                  alt="dsm."
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Architecture</h3>

              <p class="project-category">3D Modeling</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="house blueprint"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-6.png"
                  alt="metaspark"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Architecture</h3>

              <p class="project-category">House Blueprint</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="house blueprint"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-7.png"
                  alt="summary"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Architecture</h3>

              <p class="project-category">House Blueprint</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="3d modeling"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-8.jpg"
                  alt="task manager"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Architecture</h3>

              <p class="project-category">3D Modeling</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="house blueprint"
          >
            <a href="#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-9.png"
                  alt="arrival"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Architecture</h3>

              <p class="project-category">House Blueprint</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default portfolio;
