import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStoreSlash: React.FC<Props> = ({
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
          d="M20,18.58594V11.44342a3.94736,3.94736,0,0,1-5-.80084A3.95669,3.95669,0,0,1,13.21106,11.797Z"
        ></path>
        <path
          className="uim-primary"
          d="M22,23a.99676.99676,0,0,1-.707-.293l-20-20A.99989.99989,0,0,1,2.707,1.293l20,20A1,1,0,0,1,22,23Z"
        ></path>
        <path
          className="uim-secondary"
          d="M12.58594,14H10a1,1,0,0,0-1,1v7h6V16.41406Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M10 14h2.58594L10.0954 11.50946A3.83957 3.83957 0 0 1 9 10.64258a3.998 3.998 0 0 1-5 .821v9.537A.99974.99974 0 0 0 5 22H9V15A1 1 0 0 1 10 14zM15 16.41406V22h4.00055a.993.993 0 0 0 .92993-.65546z"
        ></path>
        <path
          className="uim-tertiary"
          d="M13.21106 11.797A3.95669 3.95669 0 0 0 15 10.64258 3.99808 3.99808 0 0 0 22 8a1.00611 1.00611 0 0 0-.07129-.37109l-2-5A1.00088 1.00088 0 0 0 19 2H5a1.00088 1.00088 0 0 0-.92871.62891l-.00812.0202zM3.25519 4.66925L2.07129 7.62891A1.00611 1.00611 0 0 0 2 8a3.99811 3.99811 0 0 0 7 2.64258 3.83957 3.83957 0 0 0 1.0954.86688z"
        ></path>
      </svg>
    </Wrapper>
  );
};
