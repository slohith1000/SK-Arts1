import React from "react";

function AvailableArt() {
  return (
    <div className="container mt-4">

      <h4>AVAILABLE ARTWORKS</h4>

      {[1,2].map(i=>(
        <div className="row border p-4 mb-3" key={i}>
          <div className="col-md-6">
            <h6>Artwork Name</h6>
            <p>Type of artwork</p>
            <p>Brief information</p>
            <p>Date of Completion</p>
          </div>
          <div className="col-md-6 text-center">ARTWORK IMAGE</div>
        </div>
      ))}

    </div>
  );
}

export default AvailableArt;
