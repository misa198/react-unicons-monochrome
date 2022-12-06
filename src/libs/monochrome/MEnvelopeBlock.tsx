import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeBlock: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle
          cx="17.5"
          cy="8.258"
          r="4.021"
          className="uim-quaternary"
        ></circle>
        <path
          className="uim-tertiary"
          d="M13.47894,8.258c0-0.73199,0.21033-1.40906,0.55212-2.00024H4.5C3.34546,6.25897,2.29462,6.9245,1.79999,7.96771L9.38,15.54779c0.00195,0.00201,0.00397,0.00403,0.00598,0.00598c1.17084,1.16754,3.06647,1.16492,4.23401-0.00598l3.32465-3.32471C14.9892,11.95032,13.47894,10.28851,13.47894,8.258z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21.4574,8.88959c-0.30481,1.91864-1.953,3.38947-3.9574,3.38947c-0.19025,0-0.37213-0.0304-0.55536-0.05597L13.62,15.54779c-1.16754,1.1709-3.06317,1.17352-4.23401,0.00598C9.38397,15.55182,9.38196,15.5498,9.38,15.54779L1.79999,7.96771C1.60345,8.36945,1.50085,8.81055,1.5,9.25775v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.49976,9.13342,21.47321,9.01227,21.4574,8.88959z"
        ></path>
        <path
          className="uim-primary"
          d="M17.5,13.25537c-2.76008-0.00203-4.99591-2.24116-4.99389-5.00123s2.24116-4.99591,5.00123-4.99389s4.99591,2.24116,4.99389,5.00123c-0.00097,1.32506-0.52814,2.5955-1.46559,3.53198l0,0C20.09845,12.73163,18.82608,13.25773,17.5,13.25537z M17.5,5.25928c-1.65604,0.00143-2.99737,1.34508-2.99593,3.00113c0.00143,1.65604,1.34508,2.99737,3.00113,2.99593c1.65604-0.00144,2.99737-1.34509,2.99593-3.00113c-0.00069-0.79499-0.31706-1.55718-0.87955-2.11898C19.05911,5.57346,18.29566,5.25789,17.5,5.25928z M20.32861,11.08643L20.32861,11.08643z"
        ></path>
        <path
          className="uim-primary"
          d="M14.67139,12.08643c-0.55229-0.00012-0.9999-0.44793-0.99979-1.00021c0.00006-0.26509,0.10537-0.51931,0.29279-0.70679l5.65722-5.65722c0.39048-0.39048,1.02358-0.39048,1.41406,0s0.39048,1.02358,0,1.41406l-5.65722,5.65723C15.19113,11.98134,14.93667,12.08676,14.67139,12.08643z"
        ></path>
      </svg>
    </Wrapper>
  );
};
