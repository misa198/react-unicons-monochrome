import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowCircleDown: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M7.293,12.707l3.99969,3.9997a1.00354,1.00354,0,0,0,1.41468,0L16.707,12.707A.99989.99989,0,0,0,15.293,11.293L13,13.58594V8a1,1,0,0,0-2,0v5.58594L8.707,11.293A.99989.99989,0,0,0,7.293,12.707Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,22A10,10,0,1,0,2,12,10.01114,10.01114,0,0,0,12,22ZM7.293,11.293a.99963.99963,0,0,1,1.41406,0L11,13.58594V8a1,1,0,0,1,2,0v5.58594l2.293-2.293A.99989.99989,0,0,1,16.707,12.707l-3.99969,3.9997a1.00354,1.00354,0,0,1-1.41468,0L7.293,12.707A.99962.99962,0,0,1,7.293,11.293Z"
        ></path>
      </svg>
    </Wrapper>
  );
};