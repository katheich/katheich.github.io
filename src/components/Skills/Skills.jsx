import sectionStyles from "../Sections.module.css";
import skillsStyles from "./Skills.module.css";

import { skillSet } from "./icons";

export function Skills() {
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
        <div className={`${skillsStyles.singleSkillContainer} ${colorStyle}`}>
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
