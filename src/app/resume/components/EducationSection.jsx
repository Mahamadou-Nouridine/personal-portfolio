import React from "react";
import educations from '../../../data/educations'
import EducationItem from './EducationItem'

const EducationSection = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="h3">Educations</h3>
      </div>

      <ol className="timeline-list p-0">
        {educations.map((education, index) => <EducationItem education={education} key={index}/>)}
      </ol>
    </section>
  );
};

export default EducationSection;
