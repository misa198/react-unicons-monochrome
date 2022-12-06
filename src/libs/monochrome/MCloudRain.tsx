import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudRain: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M5.75,17.48047c-.02637,0-.05176-.001-.07812-.00293A3.99519,3.99519,0,0,1,5.05566,9.6123,6.99925,6.99925,0,0,1,18.4209,7.7168a4.99283,4.99283,0,0,1,.13769,9.53418,1.00185,1.00185,0,0,1-.29394.04882l-12.5.18067Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,20.5a3.25377,3.25377,0,0,1-3.25-3.25c0-2.71777,2.57812-4.502,2.68749-4.57715a1.00473,1.00473,0,0,1,1.11817-.00488C12.665,12.74219,15.25,14.499,15.25,17.25A3.25377,3.25377,0,0,1,12,20.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
