import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeUploadAlt: React.FC<Props> = ({
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
          className="uim-primary"
          d="M12,9c-0.55229,0-1-0.44771-1-1V3c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v5C13,8.55229,12.55229,9,12,9z"
        ></path>
        <path
          className="uim-primary"
          d="M14,6c-0.26527,0.0003-0.51971-0.10515-0.707-0.293L12,4.41406L10.707,5.707c-0.39402,0.38691-1.02709,0.38116-1.414-0.01286c-0.38195-0.38896-0.38195-1.01218,0-1.40114l2-2c0.39027-0.39048,1.02319-0.39065,1.41368-0.00038c0.00013,0.00013,0.00026,0.00026,0.00038,0.00038l2,2c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C14.51936,5.89465,14.26511,5.99996,14,6z"
        ></path>
        <path
          className="uim-tertiary"
          d="M16,11H8c-1.10765,0.00547-2.12393,0.61524-2.65,1.59l4.53,4.52c0.55932,0.56808,1.32279,0.8886,2.12,0.89c0.79506-0.0023,1.55702-0.31858,2.12-0.88l4.53-4.53C18.12393,11.61524,17.10765,11.00547,16,11z"
        ></path>
        <path
          className="uim-quaternary"
          d="M18.638,12.60205L14.12,17.12C13.55701,17.6814,12.79504,17.99768,12,18c-0.79724-0.0014-1.56067-0.3219-2.12-0.89001L5.362,12.60205C5.13898,13.02124,5.00055,13.49219,5,14v5c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3v-5C18.99945,13.49219,18.86102,13.02124,18.638,12.60205z"
        ></path>
      </svg>
    </Wrapper>
  );
};
