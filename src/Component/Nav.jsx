import React from 'react'

function Nav() {
  return (
    <>
    <nav class="Nav navbar navbar-default navbar-fixed-top ">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">E.G Ventures</a>
            <img class="log" src="images/clothing.png" alt="logo" />
          </div>
      
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">About</a></li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Nav