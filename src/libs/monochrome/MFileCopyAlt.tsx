import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileCopyAlt: React.FC<Props> = ({
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
        <path
          className="uim-quaternary"
          d="M16,13.00052h-5c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h5c0.55228,0,1,0.44771,1,1S16.55228,13.00052,16,13.00052z M18,9.00052h-7c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h7c0.55228,0,1,0.44772,1,1S18.55228,9.00052,18,9.00052z"
        ></path>
        <path
          className="uim-tertiary"
          d="M18.00275,9C18.00177,9,18.00098,9.00055,18,9.00055h-7c-0.55231,0-1-0.44775-1-1c0-0.55231,0.44769-1,1-1h3.00006C14.00006,7.00037,14,7.00018,14,7V2h-4C8.34534,1.9978,7.0022,3.33734,7,4.992C7,4.99469,7,4.99731,7,5v10c-0.0022,1.65466,1.33734,2.9978,2.992,3c0.00269,0,0.00531,0,0.008,0h8c1.65466,0.0022,2.9978-1.33734,3-2.992c0-0.00269,0-0.00531,0-0.008V9H18.00275z M16,13.00055h-5c-0.55231,0-1-0.44775-1-1c0-0.55231,0.44769-1,1-1h5c0.55231,0,1,0.44769,1,1C17,12.5528,16.55231,13.00055,16,13.00055z"
        ></path>
        <path
          className="uim-quaternary"
          d="M10,18c-0.00269,0-0.00531,0-0.008,0C8.33734,17.9978,6.9978,16.65466,7,15V6H6C4.34534,5.9978,3.0022,7.33734,3,8.992C3,8.99469,3,8.99731,3,9v10c-0.0022,1.65466,1.33734,2.9978,2.992,3C5.99469,22,5.99731,22,6,22h8c1.65466,0.0022,2.9978-1.33734,3-2.992c0-0.00269,0-0.00531,0-0.008v-1H10z"
        ></path>
        <path
          className="uim-primary"
          d="M21,9h-5c-1.10457,0-2-0.89543-2-2V2L21,9z"
        ></path>
      </svg>
    </Wrapper>
  );
};