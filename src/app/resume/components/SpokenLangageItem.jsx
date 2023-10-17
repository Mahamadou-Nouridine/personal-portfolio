import React from 'react'

const SpokenLangageItem = ({lang}) => {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h5 className="h5 mb-0">{lang.lang}</h5>
        <data value={lang.percentage}>{lang.percentage}%</data>
      </div>

      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill"
          style={{ width: lang.percentage + "%" }}
        ></div>
      </div>
    </li>
  )
}

export default SpokenLangageItem
