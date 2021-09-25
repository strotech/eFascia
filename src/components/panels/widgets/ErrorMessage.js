import React from "react";

const ErrorMessage = ({ errors }) => {
  console.log("errors",errors)
  const errorDetails = () => {
    if (errors && errors.result.length > 0 ) {
      return (
        <div>
          {errors.result.map(error=>{
            return (<p key={error.text}>{error.text}</p>) 
          })}
        </div>
      )   
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
    <div className="card search-empty">
      <div className={`border border-warning alert alert-${errors.type} custom-alert`} role="alert">
        {errorDetails()}
        {errorType()}
      </div>
    </div>
  );
};

export default ErrorMessage;