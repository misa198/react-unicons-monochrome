import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAdobe: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M2.00049,22.041A.99825.99825,0,0,1,1,21.041V2.959a.99974.99974,0,0,1,1-1H9.4248a1.00047,1.00047,0,0,1,.9253,1.37989L2.92529,21.4209A1.00048,1.00048,0,0,1,2.00049,22.041Zm14.24316,0H13.63086a.99994.99994,0,0,1-.89111-.5459l-1.522-2.99024H8.96289a1,1,0,0,1-.92822-1.37207L11.09375,9.501A.99988.99988,0,0,1,12.022,8.873h.00977a.99993.99993,0,0,1,.92578.64648l4.22168,11.168a1.00016,1.00016,0,0,1-.93555,1.35352Zm5.75586-.23243a.99894.99894,0,0,1-.9209-.6123L13.561,3.34668a.99994.99994,0,0,1,.92138-1.3877H22a.99974.99974,0,0,1,1,1V20.80859a1.00094,1.00094,0,0,1-.80225.98047A1.04879,1.04879,0,0,1,21.99951,21.80859Z"
          data-name="Brand Logos"
        ></path>
      </svg>
    </Wrapper>
  );
};
