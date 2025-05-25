import './TechSkills.css';

import pythonIcon from '../assets/tech/python-plain.svg';
import typescriptIcon from '../assets/tech/typescript-plain.svg';
import rubyIcon from '../assets/tech/ruby-plain.svg';
import golangIcon from '../assets/tech/go-plain.svg';
import javaIcon from '../assets/tech/java-original.svg';
import dockerIcon from '../assets/tech/docker-plain.svg';
import awsIcon from '../assets/tech/amazonwebservices-plain-wordmark.svg';
import terraformIcon from '../assets/tech/terraform-original.svg';
import reactIcon from '../assets/tech/react-original.svg';
import expressIcon from '../assets/tech/express-original.svg';
import fastAPIIcon from '../assets/tech/fastapi-plain.svg';
import djangoIcon from '../assets/tech/django-plain.svg';
import railsIcon from '../assets/tech/rails-plain.svg';
import postgresIcon from '../assets/tech/postgresql-plain.svg';
import dynamodbIcon from '../assets/tech/dynamodb-original.svg';
import figmaIcon from '../assets/tech/figma-original.svg';
import jupyterIcon from '../assets/tech/jupyter-original-wordmark.svg';
import latexIcon from '../assets/tech/latex-original.svg';
import stataIcon from '../assets/tech/stata-original-wordmark.svg';
import arcgisIcon from '../assets/tech/esri-3.svg';

const skillSet = [
  { id: 'python', label: <>Python</>, icon: pythonIcon },
  { id: 'ts', label: <>TypeScript</>, icon: typescriptIcon },
  { id: 'ruby', label: <>Ruby</>, icon: rubyIcon },
  { id: 'go', label: <>Go</>, icon: golangIcon },
  { id: 'java', label: <>Java</>, icon: javaIcon },
  { id: 'react', label: <>React</>, icon: reactIcon },
  { id: 'express', label: <>Express.js</>, icon: expressIcon },
  { id: 'fastapi', label: <>FastAPI</>, icon: fastAPIIcon },
  { id: 'django', label: <>Django</>, icon: djangoIcon },
  { id: 'rails', label: <>Rails</>, icon: railsIcon },
  { id: 'docker', label: <>Docker</>, icon: dockerIcon },
  { id: 'aws', label: <>AWS</>, icon: awsIcon },
  { id: 'tf', label: <>Terraform</>, icon: terraformIcon },
  { id: 'postgres', label: <>Postgre&shy;SQL</>, icon: postgresIcon },
  { id: 'dynamo', label: <>DynamoDB</>, icon: dynamodbIcon },
  { id: 'arcgis', label: <>ArcGIS Pro</>, icon: arcgisIcon },
  { id: 'figma', label: <>Figma</>, icon: figmaIcon },
  { id: 'jupyter', label: <>Jupyter</>, icon: jupyterIcon },
  { id: 'stata', label: <>Stata</>, icon: stataIcon },
  { id: 'latex', label: <>Latex</>, icon: latexIcon },
];

function renderSkills() {
  return skillSet.map((skill) => (
    <div key={skill.id} className="singleSkillContainer">
      <img src={skill.icon} className="" alt={skill.id} />
      <div className="skillName">{skill.label}</div>
    </div>
  ));
}

export function TechSkills() {
  return <div className="skillsContainer">{renderSkills()}</div>;
}
