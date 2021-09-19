import React from "react";

const ErrorMessage = ({ error }) => {
  const errorDetails = () => {
    if (error && error.text) {
      return <p key={error.text}>{error.text}</p>
    }
  };

  const errorType = () => {
    if (error && error.type) {
      return (
        <em>
          See
          <a href={error.type} target="_blank" rel="noopener noreferrer">
            {" "}
            Twitter documentation{" "}
          </a>
          for further details.
        </em>
      );
    }
  };

  return (
   
    <div className={`alert alert-${error.type}`} role="alert">
      <div className="header">{error.text}</div>
      {errorDetails()}
      {errorType()}
    </div>
     
  );
};

export default ErrorMessage;