import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPanoramaHAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12,20a37.44775,37.44775,0,0,1-8.59082-1l-.10986-.02637a1,1,0,0,1-.7583-.7998,35.4102,35.4102,0,0,1,0-12.34766,1,1,0,0,1,.7583-.7998L3.4126,5A37.583,37.583,0,0,1,20.59082,5l.10986.02637a1,1,0,0,1,.7583.7998,35.4102,35.4102,0,0,1,0,12.34766,1,1,0,0,1-.7583.7998L20.5874,19A37.39642,37.39642,0,0,1,12,20Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
