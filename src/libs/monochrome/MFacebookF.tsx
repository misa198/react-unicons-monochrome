import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFacebookF: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M13.3552,21.9999v-9.123h3.06223l.45847-3.55537H13.3552v-2.27c0-1.02934.28587-1.73089,1.76209-1.73089L17,5.31981V2.13994A25.23316,25.23316,0,0,0,14.25657,2C11.54212,2,9.68374,3.65682,9.68374,6.69964v2.622H6.61359V12.877H9.68365V22l3.67155-.0001Z"
          data-name="Brand Logos"
        ></path>
      </svg>
    </Wrapper>
  );
};