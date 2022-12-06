import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFidgetSpinner: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M19.93405,14.079a3.96966,3.96966,0,0,0-3.63755-.96434.98437.98437,0,0,1-1.07837-.46926l-.435-.75344a1.00485,1.00485,0,0,1,.1497-1.19,4,4,0,1,0-5.86308.00281,1.00159,1.00159,0,0,1,.14739,1.18669l-.43528.75393a.98439.98439,0,0,1-1.0784.46925,4,4,0,1,0,2.90821,5.07008,1.00161,1.00161,0,0,1,.954-.721h.86871a1.00162,1.00162,0,0,1,.954.721,3.95393,3.95393,0,0,0,1.80777,2.279A4.00129,4.00129,0,0,0,19.93405,14.079Z"
        ></path>
        <circle cx="12" cy="8" r="1" className="uim-primary"></circle>
        <circle cx="6.804" cy="17" r="1" className="uim-primary"></circle>
        <circle cx="17.196" cy="17" r="1" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M6.80762,22.002a5.00218,5.00218,0,0,1-3.417-8.66064,4.94188,4.94188,0,0,1,4.542-1.19971l.418-.74951a4.97118,4.97118,0,0,1,.5332-7.30273,5.02582,5.02582,0,0,1,4.27734-.958A4.98833,4.98833,0,0,1,15.665,11.38281l.41894.76319a4.97965,4.97965,0,0,1,5.90821,6.28222,5.02885,5.02885,0,0,1-2.96875,3.22559,4.97865,4.97865,0,0,1-6.59082-3.17627l-.86719-.01367a4.92916,4.92916,0,0,1-2.26172,2.86572A4.98269,4.98269,0,0,1,6.80762,22.002Zm-.0293-7.9956a2.99707,2.99707,0,1,0,1.52539,5.59131A2.96085,2.96085,0,0,0,9.65527,17.8916a1.998,1.998,0,0,1,1.91016-1.42773h.86914a1.99865,1.99865,0,0,1,1.91016,1.42578A2.97759,2.97759,0,0,0,18.294,19.7915a2.99734,2.99734,0,0,0,.96386-4.97558l-.001-.00049a2.975,2.975,0,0,0-2.73047-.72754,1.972,1.972,0,0,1-2.17481-.94238L13.917,12.3916a2,2,0,0,1,.28223-2.36963,2.99986,2.99986,0,1,0-4.39746.00147,1.99558,1.99558,0,0,1,.28027,2.36914l-.43359.75244a1.97291,1.97291,0,0,1-2.17481.94287A3.03648,3.03648,0,0,0,6.77832,14.00635Z"
        ></path>
      </svg>
    </Wrapper>
  );
};