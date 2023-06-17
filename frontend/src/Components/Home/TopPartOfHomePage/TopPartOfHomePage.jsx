import React from 'react';
import './TopPartOfHomePage.css';

const TopPartOfHomePage = () => {
  return (
    <div id="TopPartOfHomePage" className="centered">
      <div>
      <div>
        <h1>Discover a place</h1>
      </div>
      <div id="second">
        <h1>you'll love to live</h1>
      </div>

      <div className="button-row">
      <button>Buy</button>
      <button>Rent</button>
      <button>Sold</button>
    </div>
      

      <div class="search-bar">
  <input type="text" class="search-input" placeholder="Search..." />
 
   <button id="boom1">search🔎</button>
 
</div>

      </div>
     
    </div>
  );
};

export default TopPartOfHomePage;
