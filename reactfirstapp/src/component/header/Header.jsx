
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const isActive = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
    fontWeight: isActive ? 'bold' : 'normal'
  })

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">
          React JS
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={isActive}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/courses"
                style={isActive}
              >
                Courses
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/product"
                style={isActive}
              >
                Product
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/counter"
                style={isActive}
              >
                Counter
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={isActive}
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={isActive}
              >
                About
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header
