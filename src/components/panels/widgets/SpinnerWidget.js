import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const SpinnerWidget = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Spinner animation="grow" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerWidget;