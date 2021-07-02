import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import beers from '../assets/beers.png';
import NewBeer from '../assets/new-beer.png';
import RandomBeer from '../assets/random-beer.png';

export default function HomePage() {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <div className="card" style={{ width: '50rem' }}>
          <img src={beers} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">All Beers</h2>
            <p className="card-text, text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              neque turpis. Pellentesque sit amet convallis ante, a pellentesque
              velit. Duis in felis justo. Ut consectetur convallis dolor sed
              rhoncus. Integer feugiat ac ante non maximus. Etiam sed auctor
              velit. Nulla nulla tortor, imperdiet finibus elit eget, hendrerit
              fermentum lorem. Vestibulum vitae vehicula velit, at fringilla
              mauris. Pellentesque ut magna et tortor ullamcorper ultrices.
              Etiam neque ipsum, elementum et leo ut, porta viverra orci.
              Phasellus viverra est id sodales blandit. Curabitur quis felis vel
              massa placerat imperdiet. Suspendisse maximus, odio et porta
              sodales, nibh tellus venenatis tortor, nec porta urna nisi sed
              ipsum. Sed non quam vel tortor lobortis facilisis facilisis vel
              lorem. Nam eu augue diam.
            </p>
            <a href="/beers" className="btn btn-primary">
              Add New
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '50rem' }}>
          <img src={RandomBeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Random Beer</h2>
            <p className="card-text, text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              neque turpis. Pellentesque sit amet convallis ante, a pellentesque
              velit. Duis in felis justo. Ut consectetur convallis dolor sed
              rhoncus. Integer feugiat ac ante non maximus. Etiam sed auctor
              velit. Nulla nulla tortor, imperdiet finibus elit eget, hendrerit
              fermentum lorem. Vestibulum vitae vehicula velit, at fringilla
              mauris. Pellentesque ut magna et tortor ullamcorper ultrices.
              Etiam neque ipsum, elementum et leo ut, porta viverra orci.
              Phasellus viverra est id sodales blandit. Curabitur quis felis vel
              massa placerat imperdiet. Suspendisse maximus, odio et porta
              sodales, nibh tellus venenatis tortor, nec porta urna nisi sed
              ipsum. Sed non quam vel tortor lobortis facilisis facilisis vel
              lorem. Nam eu augue diam.
            </p>
            <a href="/beers/random" className="btn btn-primary">
              Add New
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '50rem' }}>
          <img src={NewBeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">New Beer</h2>
            <p className="card-text, text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              neque turpis. Pellentesque sit amet convallis ante, a pellentesque
              velit. Duis in felis justo. Ut consectetur convallis dolor sed
              rhoncus. Integer feugiat ac ante non maximus. Etiam sed auctor
              velit. Nulla nulla tortor, imperdiet finibus elit eget, hendrerit
              fermentum lorem. Vestibulum vitae vehicula velit, at fringilla
              mauris. Pellentesque ut magna et tortor ullamcorper ultrices.
              Etiam neque ipsum, elementum et leo ut, porta viverra orci.
              Phasellus viverra est id sodales blandit. Curabitur quis felis vel
              massa placerat imperdiet. Suspendisse maximus, odio et porta
              sodales, nibh tellus venenatis tortor, nec porta urna nisi sed
              ipsum. Sed non quam vel tortor lobortis facilisis facilisis vel
              lorem. Nam eu augue diam.
            </p>
            <a href="#" className="btn btn-primary">
              Add New
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
