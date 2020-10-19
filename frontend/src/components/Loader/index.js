import React from "react";
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
  return (
    <div className="sweet-loading">
      <GridLoader css={override} size={10} margin={2} color={"#36D7B7"} />
    </div>
  );
};

export default Loader;
