import React from "react";

interface props {
  expertise: Expertise;
}

const ExpertiseItem: React.FC<props> = ({ expertise }) => {
  return (
    <li className="expertise-item">
      <div className="expertise-icon-box">
        {/* @ts-ignore */}
        <ion-icon name={expertise.icon}></ion-icon>
      </div>

      <div className="expertise-content-box">
        <h4 className="h4 expertise-item-title">{expertise.title}</h4>

        <p className="expertise-item-text">{expertise.description}</p>
      </div>
    </li>
  );
};

export default ExpertiseItem;
