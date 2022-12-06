import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFacebookMessenger: React.FC<Props> = ({
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
          d="M18.00409,9.46484l-2.93567,4.658c-0.44268,0.70108-1.36989,0.91055-2.07097,0.46787c-0.03356-0.02119-0.06626-0.0437-0.09803-0.06748l-2.33606-1.7525c-0.21433-0.16036-0.50891-0.15954-0.72235,0.002L6.684,15.16919c-0.20877,0.15853-0.50652,0.11781-0.66505-0.09095c-0.11984-0.15781-0.12903-0.37345-0.02306-0.54089l2.93762-4.66c0.4428-0.70112,1.37013-0.91053,2.07125-0.46773c0.03348,0.02115,0.06612,0.04361,0.09783,0.06734l2.33606,1.75256c0.21433,0.16036,0.50891,0.15954,0.72235-0.002l3.155-2.39441c0.20876-0.15851,0.50649-0.11777,0.665,0.09099C18.10078,9.08187,18.10999,9.29744,18.00409,9.46484z"
        ></path>
        <path
          className="uim-primary"
          d="M12.59064,2C12.3938,1.99402,12.19684,1.99402,12,2c-5.3266-0.19293-9.80103,3.96881-9.99396,9.29541c-0.00488,0.13489-0.00696,0.2699-0.00616,0.40491c-0.03491,2.73236,1.10974,5.34717,3.14087,7.17511c0.16345,0.14539,0.26074,0.35089,0.26965,0.56946l0.05432,1.77869c0.01416,0.44238,0.38428,0.78949,0.82666,0.77527c0.10205-0.00323,0.20258-0.026,0.29608-0.06702l1.98401-0.87524c0.16779-0.07434,0.35614-0.08856,0.5332-0.04028c0.94342,0.25769,1.9173,0.38696,2.89532,0.38434c5.35736,0.16309,9.83252-4.04767,9.99567-9.40497C22.15875,6.63831,17.948,2.16309,12.59064,2z M18.00409,9.46484l-2.93567,4.65802c-0.44269,0.70105-1.36987,0.91052-2.07098,0.46783c-0.03357-0.02118-0.06622-0.0437-0.09802-0.06744l-2.33606-1.7525c-0.21436-0.1604-0.50891-0.15955-0.72235,0.00195l-3.15698,2.39648c-0.2088,0.15851-0.50653,0.1178-0.6651-0.09094c-0.11981-0.15784-0.12903-0.37347-0.02301-0.54089l2.93762-4.65997c0.44275-0.70117,1.37012-0.91058,2.07123-0.46777c0.03351,0.02118,0.0661,0.04364,0.09784,0.06738l2.33606,1.7525c0.21429,0.1604,0.50891,0.15955,0.72235-0.00195l3.15497-2.39441c0.2088-0.15851,0.50653-0.1178,0.66504,0.09094C18.10077,9.08185,18.10999,9.29742,18.00409,9.46484z"
        ></path>
      </svg>
    </Wrapper>
  );
};
