import React from "react";

const ErrorMessage = ({ errors }) => {
  const errorDetails = () => {
    if (errors && errors.result.length > 0 ) {
      errors.map(error=><p key={error.text}>{error.text}</p>)       
    }
  };

  const errorType = () => {
    if (errors && errors.type) {
      return (
        <em>
          See
          <a href={errors.type} target="_blank" rel="noopener noreferrer">
            {" "}
            Twitter documentation{" "}
          </a>
          for further details.
        </em>
      );
    }
  };

  return (
    <div className="card">
      <div className={`alert alert-${error.type}`} role="alert">
        <div className="header">{error.text}</div>
        {errorDetails()}
        {errorType()}
      </div>
    </div>
  );
};

export default ErrorMessage;