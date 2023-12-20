import { useState, useEffect } from "react";

import sectionStyles from "../Sections.module.css";
import skillsStyles from "./Skills.module.css";

import { skillSet } from "./icons";

function getRandomSkillIndex() {
  return Math.floor(Math.random() * skillSet.length);
}

export function Skills() {
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    const highglightSkill = () => {
      const newIndex = getRandomSkillIndex();
      setHighlight(newIndex);
    };
    const highlightTimer = setInterval(highglightSkill, 2000);

    return () => {
      clearInterval(highlightTimer);
    };
  }, []);

  const renderSkills = () => {
    return skillSet.map((skill, index) => {
      var colorStyle;
      switch (index % 3) {
        case 0:
          colorStyle = `${skillsStyles.greenSkill}`;
          break;
        case 1:
          colorStyle = `${skillsStyles.orangeSkill}`;
          break;
        case 2:
          colorStyle = `${skillsStyles.blueSkill}`;
          break;
        default:
          colorStyle = `${skillsStyles.greenSkill}`;
      }
      return (
        <div
          key={skill.label}
          className={`${skillsStyles.singleSkillContainer} ${colorStyle} ${
            index === highlight ? `${skillsStyles.highlight}` : ""
          }`}
        >
          <div className={skillsStyles.skillName}>{skill.label}</div>
          {skill.icon}
        </div>
      );
    });
  };
  return (
    <div className={sectionStyles.sectionContainer}>
      <div className={sectionStyles.sectionHeader}>Technologies</div>
      <div className={skillsStyles.skillsContainer}>{renderSkills()}</div>
    </div>
  );
}
