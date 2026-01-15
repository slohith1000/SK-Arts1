import React from "react";

function Paintings() {
  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">GALLERY OF PAINTINGS</h4>

      <div className="row g-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div className="col-md-4" key={i}>
            <div className="border p-3 text-center">
              <div className="mb-2">IMG {i}</div>
              <p>Name</p>
              <p>Artwork Type</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paintings;
