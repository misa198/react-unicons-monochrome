import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MQuestion: React.FC<Props> = ({
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
          className="uim-primary"
          d="M10.29468 16.2912a1 1 0 0 0 .6997 1.71 1.036 1.036 0 0 0 .71045-.29 1.01517 1.01517 0 0 0 0-1.41992A1.03424 1.03424 0 0 0 10.29468 16.2912zM14.39838 8.66016a3.44781 3.44781 0 0 0-1.7566-2.25348A3.50993 3.50993 0 0 0 7.96606 7.75116a1.00016 1.00016 0 0 0 1.73243 1 1.50265 1.50265 0 0 1 1.29882-.75 1.49976 1.49976 0 0 1 .00464 2.99951h-.0025a1.00013 1.00013 0 0 0-1.00079.99866l-.00135 1.00183.00342.50244a1.00016 1.00016 0 0 0 1 .99756h.00244a1.00005 1.00005 0 0 0 .99756-1.00244l-.00152-.66138A3.49137 3.49137 0 0 0 14.39838 8.66016z"
        ></path>
      </svg>
    </Wrapper>
  );
};
