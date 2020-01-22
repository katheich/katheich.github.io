import React, { useState, useEffect } from 'react'

const Projects = () => {

  const [page, setPage] = useState(1)

  function handlePrevious() {
    if (page !== 1) {
      setPage(page - 1)
    }
    return
  }

  function handleNext() {
    if (page !== 5) {
      setPage(page + 1)
    }
    return
  }

  function handlePage(e) {
    setPage(parseInt(e.target.id))
  }

  return (<section className="section" id="projects">
    <div className="container">
      <div className="title">
        <span className="backslash">/</span>
        <span className="backslash">/ </span>
        Projects
      </div>

      <div className="slidecontrol">
        <nav className="level is-centered is-mobile" role="navigation" aria-label="pagination">
          <a className={'arrow level-item is-centered is-size-5 ' + `${page === 1 ? '' : 'active'}`} onClick={handlePrevious}><i className="fas fa-angle-left"></i></a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 1 ? 'current' : ''}`} onClick={handlePage} id='1' aria-label="Goto page 1">1</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 2 ? 'current' : ''}`} onClick={handlePage} id='2' aria-label="Goto page 2">2</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 3 ? 'current' : ''}`} onClick={handlePage} id='3' aria-label="Goto page 3">3</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 4 ? 'current' : ''}`} onClick={handlePage} id='4' aria-label="Goto page 4">4</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 5 ? 'current' : ''}`} onClick={handlePage} id='5' aria-label="Goto page 5">5</a>
          <a className={'arrow level-item is-centered is-size-5 ' + `${page === 5 ? '' : 'active'}`} onClick={handleNext}><i className="fas fa-angle-right"></i></a>
        </nav>
      </div>

      <div className={'slide ' + `${page === 1 ? 'selected' : ''}`} id="slide1">

        <div className="title is-size-4">Tripbit</div>

      </div>


      <div className={'slide ' + `${page === 2 ? 'selected' : ''}`} id="slide2">

        <div className="title is-size-4">Placeholder</div>

      </div>

      <div className={'slide ' + `${page === 3 ? 'selected' : ''}`} id="slide3">

        <div className="title is-size-4">Metropolists</div>

      </div>


      <div className={'slide ' + `${page === 4 ? 'selected' : ''}`} id="slide3">

        <div className="title is-size-4">Skystalker</div>

      </div>


      <div className={'slide ' + `${page === 5 ? 'selected' : ''}`} id="slide3">

        <div className="title is-size-4">Vac-Man</div>

      </div>

      

      
    </div>
  </section>)

}

export default Projects