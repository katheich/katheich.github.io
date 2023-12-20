import { DataDogLogo } from "./SVGs/DataDog";
import { ArcGISLogo } from "./SVGs/ArcGIS";
import { StataLogo } from "./SVGs/Stata";

import iconStyles from "./icons.module.css";

const pythonIcon = (
  <i className={`devicon-python-plain ${iconStyles.skillIcon}`}></i>
);

const javascriptIcon = (
  <i className={`devicon-javascript-plain ${iconStyles.skillIcon}`}></i>
);

const typescriptIcon = (
  <i className={`devicon-typescript-plain ${iconStyles.skillIcon}`}></i>
);

const rubyIcon = (
  <i className={`devicon-ruby-plain ${iconStyles.skillIcon}`}></i>
);

const golangIcon = (
  <i className={`devicon-go-plain ${iconStyles.skillIcon}`}></i>
);

const postgresIcon = (
  <i className={`devicon-postgresql-plain ${iconStyles.skillIcon}`}></i>
);

const dockerIcon = (
  <i className={`devicon-docker-plain ${iconStyles.skillIcon}`}></i>
);

const awsIcon = <i className={`fa-brands fa-aws ${iconStyles.skillIcon}`}></i>;

const terraformIcon = (
  <i className={`devicon-terraform-plain ${iconStyles.skillIcon}`}></i>
);

const datadogIcon = (
  <figure className={`${iconStyles.logoSVG} ${iconStyles.skill}`}>
    <DataDogLogo />
  </figure>
);

const reactIcon = (
  <i className={`devicon-react-original ${iconStyles.skillIcon}`}></i>
);

const nodeIcon = (
  <i className={`devicon-nodejs-plain ${iconStyles.skillIcon}`}></i>
);

const djangoIcon = (
  <i className={`devicon-django-plain ${iconStyles.skillIcon}`}></i>
);

const bootstrapIcon = (
  <i className={`devicon-bootstrap-plain ${iconStyles.skillIcon}`}></i>
);

const mongoIcon = (
  <i className={`devicon-mongodb-plain ${iconStyles.skillIcon}`}></i>
);

const figmaIcon = (
  <i className={`devicon-figma-plain ${iconStyles.skillIcon}`}></i>
);

const jupyterIcon = (
  <i className={`devicon-jupyter-plain ${iconStyles.skillIcon}`}></i>
);

const arcgisIcon = (
  <figure className={`${iconStyles.logoSVG} ${iconStyles.skill}`}>
    <ArcGISLogo />
  </figure>
);

const stataIcon = (
  <figure className={`${iconStyles.logoSVG} ${iconStyles.skill}`}>
    <StataLogo />
  </figure>
);

const latexIcon = (
  <i className={`devicon-latex-original ${iconStyles.skillIcon}`}></i>
);

export const skillSet = [
  { id: "python", label: <>Python</>, icon: pythonIcon },
  { id: "js", label: <>JavaScript</>, icon: javascriptIcon },
  { id: "ts", label: <>TypeScript</>, icon: typescriptIcon },
  { id: "ruby", label: <>Ruby</>, icon: rubyIcon },
  { id: "go", label: <>Go</>, icon: golangIcon },
  { id: "postgres", label: <>Postgre&shy;SQL</>, icon: postgresIcon },
  { id: "docker", label: <>Docker</>, icon: dockerIcon },
  { id: "aws", label: <>AWS</>, icon: awsIcon },
  { id: "tf", label: <>Terraform</>, icon: terraformIcon },
  { id: "d", label: <>DataDog</>, icon: datadogIcon },
  { id: "react", label: <>React</>, icon: reactIcon },
  { id: "node", label: <>Node.js</>, icon: nodeIcon },
  { id: "django", label: <>Django</>, icon: djangoIcon },
  { id: "bootstrap", label: <>Bootstrap</>, icon: bootstrapIcon },
  { id: "mongo", label: <>MongoDB</>, icon: mongoIcon },
  { id: "figma", label: <>Figma</>, icon: figmaIcon },
  { id: "jupyter", label: <>Jupyter</>, icon: jupyterIcon },
  { id: "arcgis", label: <>ArcGIS Pro</>, icon: arcgisIcon },
  { id: "stata", label: <>Stata</>, icon: stataIcon },
  { id: "latex", label: <>Latex</>, icon: latexIcon },
];
