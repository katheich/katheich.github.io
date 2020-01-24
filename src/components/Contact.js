import React from 'react'

const Contact = () => {

  return (<section className="section" id="contact">
    <div className="container">
      <div className="title">
        <span className="backslash">// </span>
        Contact
      </div>

      <div className="level">
        <a className="level-item is-centered is-size-6" href="https://github.com/katheich" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-square"></i>
          <div className="text">github.com<span className="backslash">/</span>katheich</div>
        </a>
        <a className="level-item is-centered is-size-6" href="https://www.linkedin.com/in/kathrineichinger" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
          <div className="text">linkedin.com<span className="backslash">/</span>in<span className="backslash">/</span>kathrineichinger</div>
        </a>
      </div>
    </div>
  </section>)

}

export default Contact