import React from "react";
import educations from '../../data/educations.json'
import EducationItem from './EducationItem'
import { useLocale } from "next-intl";

const EducationSection = () => {
  const local = useLocale()

  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="h3">Educations</h3>
      </div>

      <ol className="timeline-list p-0">
        {educations[local].map((education, index) => <EducationItem education={education} key={index}/>)}
      </ol>
    </section>
  );
};

export default EducationSection;
