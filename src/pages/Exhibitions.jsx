import React from "react";

function Exhibitions() {
  return (
    <div className="container mt-4">

      <h4>EXHIBITIONS</h4>

      <div className="border p-4 mb-4">
        <h5>Exhibition Name | Place | Year</h5>
        <p>Brief info about exhibition in paragraph.</p>
      </div>

      <h5>List of paintings held in exhibition</h5>

      {[1,2].map(i=>(
        <div className="row border p-3 mb-3" key={i}>
          <div className="col-md-6 text-center">PAINTING IMAGE</div>
          <div className="col-md-6">
            <h6>Painting Name</h6>
            <p>Info about the painting</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Exhibitions;
