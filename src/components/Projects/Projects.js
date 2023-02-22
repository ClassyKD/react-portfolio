import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://i.imgur.com/b9fTwE7.png" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title">Football Schedule</h5>
        <p class="card-text">
          Football schedule tracker with standings and team records pulled from teh ESPN api.
        </p>
        <a href="https://exzilium.github.io/football-schedule/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Link to project</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://i.imgur.com/tZJUSRN.png" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">My Metro Buddy</h5>
        <p class="card-text">A metro app that allows users to save their trips using the Washington D.C. metro data</p>
        <a href="https://metro-buddy.herokuapp.com/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Link to project</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://i.imgur.com/ayiQAI6.png" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Readme Generator</h5>
        <p class="card-text">
          Easy command prompt Readme generator that allows to input items into a readme.
        </p>
        <a href="https://github.com/ClassyKD/readme-generator" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Link to project</a>
      </div>
    </div>
  </div>
</div>
  );
}