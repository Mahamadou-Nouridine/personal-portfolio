import React from "react";
import educations from '../../../data/educations'
import EducationItem from '../../components/resume/EducationItem'

const EducationSection = () => {
  return (
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">
        {educations.map((education, index) => <EducationItem education={education} key={index}/>)}
      </ol>
    </section>
  );
};

export default EducationSection;
