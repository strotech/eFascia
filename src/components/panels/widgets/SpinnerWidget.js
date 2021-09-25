import React from "react";
import { css } from "@emotion/react";
import variables from "assets/styles/exports.module.scss"
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const SpinnerWidget = ({loading}) => {
  return (   
    <div className="sweet-loading">
      <CircleLoader color={variables.topBlue} loading={loading} css={override} size={50} />
    </div>
  );
};

export default SpinnerWidget;