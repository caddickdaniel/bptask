import React, { Component } from 'react';
import { Link } from '@reach/router';

export default class Header extends Component {
  navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks h3');

    if (nav.classList) {
      nav.classList.toggle('navActive');
      burger.classList.toggle('toggle');
    }

    navLinks.forEach((h3, index) => {
      if (h3.style.animation) {
        h3.style.animation = '';
      } else {
        h3.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
  };

  render() {
    return (
      <div className="headerContainer">
        <div className="navLinks">
          <Link to="/">
            <h3 className="homeButton">HOME</h3>
          </Link>
          <Link to="/">
            <h3 className="aboutButton">ABOUT</h3>
          </Link>
          <Link to="/">
            <h3 className="tasksButton">TASKS</h3>
          </Link>
          <Link to="/">
            <h3 className="contactButton">CONTACT</h3>
          </Link>
        </div>
        <div className="burger" onClick={() => this.navSlide()}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
        <div className="searchBar">
          <div className="searchIcon">
            <i class="fas fa-search" />
          </div>
          <input
            type="text"
            placeholder="Search processes, workers, tags"
            className="searchInput"
          />
        </div>
        <div className="userIcon">
          <i class="far fa-user" />
        </div>
      </div>
    );
  }
}
