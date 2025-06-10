import React from 'react'

const Home = () => {
  return <>
  <nav class="navbar navbar-expand-lg text bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">sakshi</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active text-white" href="#">Home</a>
          <a class="nav-link text-white" href="#">Features</a>
          <a class="nav-link text-white" href="#">Pricing</a>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default Home