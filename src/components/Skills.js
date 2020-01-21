import React from 'react'

const Skills = () => {

  // Programming languages: JavaScript, Python
  // Markup languages: HTML, Markdown, LaTeX
  // Stylesheet languages: CSS, SCSS/SASS
  // Web: React.js, Node.js, Express.js, Webpack, Django, Bulma
  // Databases: MongoDB, PostgreSQL
  // Package managers: NPM, Yarn, Pip
  // Version control: Git, GitHub
  // Testing: Chai, Mocha
  // Other programming tools: VSCode, Insomnia

  // Statistics and research: Stata, EViews, Matlab
  // Design: Adobe inDesign, Adobe Photoshop Elements
  // Geospatial analysis: ArcGIS Pro
  // Productivity: Microsoft Office (Excel, Powerpoint, Outlook, Word), Trello

  return (<section className="section" id="skills">
    <div className="container">
      <div className="title">
        <span className="backslash">/</span>
        <span className="backslash">/ </span>
        Skills
      </div>

      <div className="columns is-mobile is-multiline">
        
        <div className="column is-one-fifth"><i className="devicon-javascript-plain"></i><div className="label">JavaScript</div></div>
        <div className="column is-one-fifth"><i className="devicon-python-plain"></i><div className="label">Python</div></div>
        <div className="column is-one-fifth"><i className="devicon-html5-plain"></i><div className="label">HTML</div></div>
        <div className="column is-one-fifth"><i className="devicon-css3-plain"></i><div className="label">CSS</div></div>
        <div className="column is-one-fifth"><i className="devicon-sass-original"></i><div className="label">SASS</div></div>

        <div className="column is-one-fifth"><i className="devicon-react-original"></i><div className="label">React.js</div></div>
        <div className="column is-one-fifth"><i className="devicon-nodejs-plain"></i><div className="label">Node.js</div></div>
        <div className="column is-one-fifth"><i className="devicon-express-original"></i><div className="label">Express.js</div></div>
        <div className="column is-one-fifth"><i className="devicon-webpack-plain"></i><div className="label">Webpack</div></div>
        <div className="column is-one-fifth"><i className="devicon-django-plain"></i><div className="label">Django</div></div>

        <div className="column is-one-fifth"><i className="fab fa-npm"></i><div className="label">NPM</div></div>
        <div className="column is-one-fifth"><i className="fab fa-yarn"></i><div className="label">Yarn</div></div>
        <div className="column is-one-fifth"><i className="devicon-babel-plain"></i><div className="label">Babel</div></div>
        <div className="column is-one-fifth"><i className="devicon-mongodb-plain"></i><div className="label">MongoDB</div></div>
        <div className="column is-one-fifth"><i className="devicon-postgresql-plain"></i><div className="label">PostgreSQL</div></div>

        <div className="column is-one-fifth"><i className="devicon-mocha-plain"></i><div className="label">Mocha</div></div>
        <div className="column is-one-fifth"><i className="devicon-git-plain"></i><div className="label">Git</div></div>
        <div className="column is-one-fifth"><i className="devicon-github-plain"></i><div className="label">GitHub</div></div>
        <div className="column is-one-fifth"><i className="devicon-visualstudio-plain"></i><div className="label">VSCode</div></div>
        <div className="column is-one-fifth"><i className="devicon-trello-plain"></i><div className="label">Trello</div></div>

      </div>



    </div>
  </section>)

}

export default Skills