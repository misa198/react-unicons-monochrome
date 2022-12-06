import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTwitter: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M22,5.79608a8.19187,8.19187,0,0,1-2.35652.6463A4.11484,4.11484,0,0,0,21.44754,4.1726a8.19665,8.19665,0,0,1-2.606.99566,4.10461,4.10461,0,0,0-7.097,2.80768,4.15,4.15,0,0,0,.1057.93523A11.64962,11.64962,0,0,1,3.39364,4.62449,4.10694,4.10694,0,0,0,4.6632,10.10193,4.08409,4.08409,0,0,1,2.80454,9.589v.05185a4.10474,4.10474,0,0,0,3.29107,4.02274,4.08161,4.08161,0,0,1-1.081.14383,4.16469,4.16469,0,0,1-.77234-.07223,4.10792,4.10792,0,0,0,3.8322,2.84908A8.2615,8.2615,0,0,1,2,18.28267a11.61106,11.61106,0,0,0,6.28924,1.84421A11.594,11.594,0,0,0,19.96265,8.45346q0-.267-.0125-.53069A8.35975,8.35975,0,0,0,22,5.79608Z"
          data-name="Brand Logos"
        ></path>
      </svg>
    </Wrapper>
  );
};
