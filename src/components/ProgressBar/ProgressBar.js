/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizeParams = {
  large: "24px",
  medium: "12px",
  small: "8px",
};

const borderParams = {
  large: "8px",
  medium: "4px",
  small: "4px",
};

const paddingParams = {
  large: "4px",
  medium: "0px",
  small: "0px",
};

const ProgressBar = ({ value, size }) => {
  let widthProgress = parseInt(
    (value / (370 - (size === "large" ? 8 : 0))) * 100
  );
  widthProgress = Math.min(widthProgress, 100);
  widthProgress = Math.max(widthProgress, 0);

  return (
    <ProgressContainer
      style={{
        "--size": sizeParams[size],
        "--border-radius": borderParams[size],
        "--padding": paddingParams[size],
      }}
    >
      <CurrentProgess value={widthProgress} />
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  width: 370px;
  height: var(--size);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: ${"inset 0px 2px 4px " + COLORS.transparentGray35};
  padding: var(--padding);
  overflow: hidden;
`;

const CurrentProgess = styled(ProgressContainer)`
  height: 100%;
  width: ${(props) => props.value + "%"};
  background-color: ${COLORS.primary};
  border-top-right-radius: ${(props) =>
    props.value === 100 ? "inherit" : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.value === 100 ? "inherit" : "0px"};
  box-shadow: none;
  padding: 0px;
`;

export default ProgressBar;
