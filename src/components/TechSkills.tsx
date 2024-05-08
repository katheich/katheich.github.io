import './TechSkills.css';

import pythonIcon from '../assets/logos/python-plain.svg';
import typescriptIcon from '../assets/logos/typescript-plain.svg';
import rubyIcon from '../assets/logos/ruby-plain.svg';
import golangIcon from '../assets/logos/go-plain.svg';
import javaIcon from '../assets/logos/java-original.svg';
import dockerIcon from '../assets/logos/docker-plain.svg';
import awsIcon from '../assets/logos/amazonwebservices-plain-wordmark.svg';
import terraformIcon from '../assets/logos/terraform-original.svg';
import reactIcon from '../assets/logos/react-original.svg';
import expressIcon from '../assets/logos/express-original.svg';
import djangoIcon from '../assets/logos/django-plain.svg';
import railsIcon from '../assets/logos/rails-plain.svg';
import postgresIcon from '../assets/logos/postgresql-plain.svg';
import dynamodbIcon from '../assets/logos/dynamodb-original.svg';
import mongoIcon from '../assets/logos/mongodb-plain.svg';
import figmaIcon from '../assets/logos/figma-original.svg';
import jupyterIcon from '../assets/logos/jupyter-original-wordmark.svg';
import latexIcon from '../assets/logos/latex-original.svg';
import stataIcon from '../assets/logos/stata-original-wordmark.svg';
import arcgisIcon from '../assets/logos/esri-3.svg';

const skillSet = [
  { id: 'python', label: <>Python</>, icon: pythonIcon },
  { id: 'ts', label: <>TypeScript</>, icon: typescriptIcon },
  { id: 'ruby', label: <>Ruby</>, icon: rubyIcon },
  { id: 'go', label: <>Go</>, icon: golangIcon },
  { id: 'java', label: <>Java</>, icon: javaIcon },
  { id: 'docker', label: <>Docker</>, icon: dockerIcon },
  { id: 'aws', label: <>AWS</>, icon: awsIcon },
  { id: 'tf', label: <>Terraform</>, icon: terraformIcon },
  { id: 'react', label: <>React</>, icon: reactIcon },
  { id: 'express', label: <>Express.js</>, icon: expressIcon },
  { id: 'django', label: <>Django</>, icon: djangoIcon },
  { id: 'rails', label: <>Rails</>, icon: railsIcon },
  { id: 'postgres', label: <>Postgre&shy;SQL</>, icon: postgresIcon },
  { id: 'dynamo', label: <>DynamoDB</>, icon: dynamodbIcon },
  { id: 'mongo', label: <>MongoDB</>, icon: mongoIcon },
  { id: 'figma', label: <>Figma</>, icon: figmaIcon },
  { id: 'jupyter', label: <>Jupyter</>, icon: jupyterIcon },
  { id: 'arcgis', label: <>ArcGIS Pro</>, icon: arcgisIcon },
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
