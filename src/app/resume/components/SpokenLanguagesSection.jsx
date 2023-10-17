import React from 'react'

const SpokenLanguagesSection = () => {
    return (
        <section className="skill">
            <h3 className="h3 skills-title">Spoken Languages</h3>

            <ul className="skills-list content-card">
                {skills.filter(skil => skil.type == "tech").sort((a, b) => b.percentage - a.percentage).map((skill, index) => (
                    <SkillItem skill={skill} key={index} />
                ))}
            </ul>
        </section>
    )
}

export default SpokenLanguagesSection