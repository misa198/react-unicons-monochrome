import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWeight: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-secondary"
          d="M14.23438,12H9.76562c-1.51214-0.00209-2.78708-1.12771-2.97656-2.62793l-0.5-4C6.0834,3.7282,7.2493,2.22886,8.89317,2.0232C9.01672,2.00775,9.14111,2,9.26562,2h5.46876c1.65668-0.00004,2.99972,1.34293,2.99976,2.99962c0,0.12451-0.00775,0.2489-0.0232,0.37245l-0.5,4C17.02146,10.87229,15.74652,11.99791,14.23438,12z M9.26562,4C8.71315,4.00027,8.2655,4.44835,8.26577,5.00083C8.26579,5.042,8.26835,5.08314,8.27344,5.124l0.5,4C8.83653,9.62411,9.26155,9.99936,9.76562,10h4.46876c0.50408-0.00064,0.92909-0.37589,0.99218-0.876l0.5-4c0.0683-0.54823-0.32077-1.04803-0.86901-1.11633C14.81669,4.00258,14.77556,4.00002,14.73438,4H9.26562z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,4h-1.44946c0.11163,0.31409,0.18359,0.64722,0.18359,0.99963c0,0.12451-0.00775,0.2489-0.02319,0.37244l-0.5,4C17.02148,10.87231,15.74652,11.99792,14.23438,12H9.76562c-1.51215-0.00208-2.78711-1.12769-2.97656-2.62793l-0.5-4C6.22888,4.89099,6.29767,4.42749,6.45001,4H5C3.34387,4.00183,2.00183,5.34387,2,7v12c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3V7C21.99817,5.34387,20.65613,4.00183,19,4z"
        ></path>
        <path
          className="uim-quaternary"
          d="M14.85754,4.00769C14.81671,4.00256,14.77557,4,14.73438,4H9.26562C8.71313,4.00024,8.2655,4.44836,8.26575,5.00085c0.00006,0.04114,0.00262,0.08228,0.00769,0.12317l0.5,4C8.83655,9.62408,9.26154,9.99939,9.76562,10h4.46875c0.50409-0.00061,0.92908-0.37592,0.99219-0.87598l0.5-4C15.79486,4.57574,15.40576,4.07599,14.85754,4.00769z"
        ></path>
        <path
          className="uim-primary"
          d="M13.25977 6.26904c-.49835-.2381-1.0954-.02716-1.3335.47119L10.36932 10h2.21655l1.14508-2.39746C13.96906 7.10419 13.75812 6.50714 13.25977 6.26904zM14 16h-4c-.55231 0-1 .44769-1 1s.44769 1 1 1h4c.55231 0 1-.44769 1-1S14.55231 16 14 16z"
        ></path>
      </svg>
    </Wrapper>
  );
};