import React from "react";

const NoMatch = () => (
  <div fluid className="container-fluid">
    <div className="row">
      <div size="md-12" className="col-md-12">
        <div className="jumbotron">
          <h1>404 Page Not Found</h1>
          <h3>The page you selected either no longer exists or is under construction.</h3>
          <h1><span role="img" aria-label="Surprised face">😧</span></h1>
        </div>
      </div>
    </div>
  </div>
);

export default NoMatch;
