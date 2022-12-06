import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeSend: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M16,10H8c-1.10765,0.00547-2.12393,0.61524-2.65,1.59l4.53,4.52c0.55932,0.56808,1.32279,0.8886,2.12,0.89c0.79506-0.0023,1.55702-0.31858,2.12-0.88l4.53-4.53C18.12393,10.61524,17.10765,10.00547,16,10z"
        ></path>
        <path
          className="uim-quaternary"
          d="M18.638,11.60205L14.12,16.12C13.55701,16.6814,12.79504,16.99768,12,17c-0.79724-0.0014-1.56067-0.3219-2.12-0.89001L5.362,11.60205C5.13898,12.02124,5.00055,12.49219,5,13v5c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3v-5C18.99945,12.49219,18.86102,12.02124,18.638,11.60205z"
        ></path>
        <path
          className="uim-primary"
          d="M15,6H9C8.44771,6,8,5.55228,8,5s0.44771-1,1-1h6c0.55229,0,1,0.44772,1,1S15.55229,6,15,6z"
        ></path>
        <path
          className="uim-primary"
          d="M13,8c-0.55229-0.00012-0.9999-0.44793-0.99979-1.00021C12.00027,6.7347,12.10558,6.48048,12.293,6.293L13.58594,5L12.293,3.707c-0.38692-0.39401-0.38118-1.02708,0.01283-1.414c0.38896-0.38196,1.01221-0.38196,1.40117,0l2,2c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368C15.70726,5.7068,15.70713,5.70693,15.707,5.70706l-2,2C13.5197,7.89489,13.26526,8.00032,13,8z"
        ></path>
      </svg>
    </Wrapper>
  );
};
