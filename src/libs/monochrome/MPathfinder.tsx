import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPathfinder: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M11.43066 9.55273a.96735.96735 0 0 1-.58886-.19531.9791.9791 0 0 1-.21-1.38086l.03027-.04A1.00041 1.00041 0 0 1 11.46 7.54a1.02139 1.02139 0 0 1 1.02539 1 .98317.98317 0 0 1-.84668.99219A1.06553 1.06553 0 0 1 11.43066 9.55273zM16.28809 9.54h-.11621a1 1 0 0 1 0-2h.11621a1 1 0 1 1 0 2zM21 9.56543a.9934.9934 0 0 1-.92578-.60059.95665.95665 0 0 1-.09863-.4248.97808.97808 0 0 1 .97461-1H21a.99942.99942 0 0 1 1 1A1.0214 1.0214 0 0 1 21 9.56543zM21 17.89746a.99942.99942 0 0 1-1-1V16.7959a1 1 0 0 1 2 0v.10156A.99942.99942 0 0 1 21 17.89746zm0-4.15332a.99942.99942 0 0 1-1-1v-.10156a1 1 0 0 1 2 0v.10156A.99942.99942 0 0 1 21 13.74414zM21 22a1.02054 1.02054 0 0 1-1.02441-1 .99256.99256 0 0 1 .59961-.92578A.95665.95665 0 0 1 21 19.97559a.97808.97808 0 0 1 1 .97461V21A.99943.99943 0 0 1 21 22zM16.89746 22H16.7959a1 1 0 0 1 0-2h.10156a1 1 0 0 1 0 2zm-4.15332 0h-.10156a1 1 0 0 1 0-2h.10156a1 1 0 1 1 0 2zM8.58984 22H8.54a.99942.99942 0 0 1-1-1 1.02053 1.02053 0 0 1 1-1.02441.99256.99256 0 0 1 .92578.59961A.95737.95737 0 0 1 9.56543 21 .9789.9789 0 0 1 8.58984 22zM8.54 17.58008a.99942.99942 0 0 1-1-1V16.4707a1 1 0 1 1 2 0v.10938A.99943.99943 0 0 1 8.54 17.58008zm.21387-4.4082a.99988.99988 0 0 1-.80567-1.5918l.06446-.08789A1.00044 1.00044 0 1 1 9.626 12.67578l-.06446.08789A1.001 1.001 0 0 1 8.75391 13.17188zM11.46 16.46a1.02139 1.02139 0 0 1-1.02539-1 .98385.98385 0 0 1 .80859-.98633.99622.99622 0 0 1 .73829.10352.98018.98018 0 0 1 .36523 1.34863l-.02539.043A1.00123 1.00123 0 0 1 11.46 16.46z"
        ></path>
        <path
          className="uim-tertiary"
          d="M7.28125 16.46H7.17773a1 1 0 1 1 0-2h.10352a1 1 0 1 1 0 2zM3.0498 16.46H3a.99942.99942 0 0 1-1-1 1.0214 1.0214 0 0 1 1-1.02539.9934.9934 0 0 1 .92578.60059.95665.95665 0 0 1 .09863.4248A.97808.97808 0 0 1 3.0498 16.46zM3 12.35742a.99942.99942 0 0 1-1-1v-.10156a1 1 0 0 1 2 0v.10156A.99942.99942 0 0 1 3 12.35742zM3 8.2041a.99942.99942 0 0 1-1-1V7.10254a1 1 0 0 1 2 0V7.2041A.99942.99942 0 0 1 3 8.2041zM3 4.02441A.97808.97808 0 0 1 2 3.0498V3A.99943.99943 0 0 1 3 2 1.02054 1.02054 0 0 1 4.02441 3a.99256.99256 0 0 1-.59961.92578A.95665.95665 0 0 1 3 4.02441zM11.35742 4h-.10156a1 1 0 0 1 0-2h.10156a1 1 0 0 1 0 2zM7.2041 4H7.10254a1 1 0 0 1 0-2H7.2041a1 1 0 0 1 0 2zM15.46 4.02441a.99256.99256 0 0 1-.92578-.59961A.95737.95737 0 0 1 14.43457 3a.9789.9789 0 0 1 .97559-1H15.46a.99942.99942 0 0 1 1 1A1.02053 1.02053 0 0 1 15.46 4.02441zM13.68848 12.60352a1.00006 1.00006 0 0 1-.86719-1.4961l.05469-.0957a.99991.99991 0 1 1 1.73632.99219l-.05468.0957A.99842.99842 0 0 1 13.68848 12.60352zM15.46 8.56445a.99942.99942 0 0 1-1-1V7.4541a1 1 0 1 1 2 0v.11035A.99942.99942 0 0 1 15.46 8.56445z"
        ></path>
        <path
          className="uim-primary"
          d="M15.46191,16.46191H8.53809a.99942.99942,0,0,1-1-1V8.53809a.99942.99942,0,0,1,1-1h6.92382a.99942.99942,0,0,1,1,1v6.92382A.99942.99942,0,0,1,15.46191,16.46191Zm-5.92382-2h4.92382V9.53809H9.53809Z"
        ></path>
        <path
          className="uim-primary"
          d="M15.46191,16.46191H8.53809a.99942.99942,0,0,1-1-1V8.53809a.99942.99942,0,0,1,1-1h6.92382a.99942.99942,0,0,1,1,1v6.92382A.99942.99942,0,0,1,15.46191,16.46191Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
