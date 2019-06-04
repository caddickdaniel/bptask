import React from 'react';

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="burger">
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
