import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWaterGlass: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M15.15039,22H8.84961a3.01187,3.01187,0,0,1-2.98633-2.77344L5.43262,13.667a1.00007,1.00007,0,0,1,1.15625-1.06445,2.62465,2.62465,0,0,0,1.96-.90332,1.03613,1.03613,0,0,1,1.50195,0,2.64231,2.64231,0,0,0,3.89844,0,1.03613,1.03613,0,0,1,1.50195,0,2.60618,2.60618,0,0,0,1.94922.90039,1.01026,1.01026,0,0,1,1.167,1.06738l-.43066,5.56055A3.01176,3.01176,0,0,1,15.15039,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M15.14746,22H8.85254a3.014,3.014,0,0,1-2.99121-2.77051L5.00293,8.07715a1.00064,1.00064,0,0,1,.91992-1.07422.98711.98711,0,0,1,1.07422.91992l.8584,11.15332A1.00443,1.00443,0,0,0,8.85254,20h6.29492a1.00433,1.00433,0,0,0,.99707-.92285l.8584-11.1543a.98914.98914,0,0,1,1.07422-.91992,1.00064,1.00064,0,0,1,.91992,1.07422l-.8584,11.15332A3.01385,3.01385,0,0,1,15.14746,22Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,8.99987A2.44035,2.44035,0,0,1,9.56247,6.56234a4.6755,4.6755,0,0,1,2.01564-3.43291.75222.75222,0,0,1,.83864-.00366,4.624,4.624,0,0,1,2.02078,3.43657A2.44035,2.44035,0,0,1,12,8.99987Z"
      ></path>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MWaterGlass;
