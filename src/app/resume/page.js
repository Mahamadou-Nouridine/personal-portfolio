import React from "react";

const resume = () => {
  return (
    // <div style={{color: "white"}}>This is the resume</div>
    <article class="resume" data-page="resume">
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Federal University of Technology Akure
            </h4>

            <span>2013 — 2017</span>

            <p class="timeline-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ut delectus et odit eligendi corporis.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Military High school</h4>

            <span>2006 — 2007</span>

            <p class="timeline-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ut delectus et odit eligendi corporis.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              High school of art and design
            </h4>

            <span>2002 — 2004</span>

            <p class="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Freelance Architect</h4>

            <span>2015 — Present</span>

            <p class="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
              atque corrupti, quos dolores et qvuas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Freelance Architect</h4>

            <span>2013 — 2015</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Freelance Architect</h4>

            <span>2010 — 2013</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Building Drawing</h5>
              <data value="90">90%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">3D Modeling</h5>
              <data value="85">850%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "70%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Machine Drawing</h5>
              <data value="80">80%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "50%" }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default resume;
