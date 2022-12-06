import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MRestaurant: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M8.7771,15.85986,13.0213,11.616,3.72852,2.32324a1.0001,1.0001,0,0,0-1.69727.56446,11.041,11.041,0,0,0,3.11328,9.33886Z"
        ></path>
        <path
          className="uim-primary"
          d="M3.08105,21.96973a1,1,0,0,1-.707-1.707L18.25293,4.38477A.99989.99989,0,1,1,19.667,5.79883L3.78809,21.67676A.9968.9968,0,0,1,3.08105,21.96973Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21.02148,22.03027a.99674.99674,0,0,1-.707-.293l-6.30078-6.2998a.99989.99989,0,0,1,1.41406-1.41406l6.30079,6.2998a1,1,0,0,1-.707,1.707Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.83887,11.627a2.98211,2.98211,0,0,1-2.12207-.8789L13.30273,9.334a3.00422,3.00422,0,0,1,0-4.24218l2.82911-2.8291A.99989.99989,0,0,1,17.5459,3.67676l-2.8291,2.8291a1.00052,1.00052,0,0,0,.001,1.41406L16.13184,9.334a1.02257,1.02257,0,0,0,1.41406,0L20.374,6.50586a.99989.99989,0,0,1,1.41407,1.41406L18.96,10.748A2.98155,2.98155,0,0,1,16.83887,11.627Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
