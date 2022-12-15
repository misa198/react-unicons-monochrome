import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MReceipt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,20V3c-0.00005-0.55215-0.44769-0.99971-0.99984-0.99966c-0.17446,0.00002-0.34588,0.04569-0.49723,0.13247L13.5,3.85352l-3.00293-1.72071c-0.3079-0.17643-0.68624-0.17643-0.99414,0L6.5,3.85352L3.49707,2.13281c-0.47899-0.27466-1.08994-0.10903-1.3646,0.36996C2.04569,2.65411,2.00002,2.82554,2,3v17c0,1.10457,0.89543,2,2,2h16C18.89543,22,18,21.10457,18,20z"
      ></path>
      <path
        className="uim-primary"
        d="M21.999,14v6c0,1.10457-0.89543,2-2,2l0,0c-1.10457,0-2-0.89543-2-2v-8h2C21.10357,12,21.999,12.89543,21.999,14z M12,10H8c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h4c0.55229,0,1,0.44771,1,1S12.55229,10,12,10z M9,14H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44771,1,1S9.55229,14,9,14z M9,18H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44772,1,1S9.55229,18,9,18z M13,14c-0.54662,0.00567-0.99433-0.43286-1-0.97947c-0.00143-0.13758,0.02585-0.27396,0.08008-0.40041c0.19341-0.50537,0.75987-0.75826,1.26524-0.56486c0.13406,0.0513,0.25521,0.13144,0.35488,0.23474c0.09659,0.09256,0.17161,0.20525,0.21972,0.33008C13.97119,12.74027,13.9984,12.86934,14,13C13.99622,13.55071,13.55071,13.99622,13,14z M13,18c-0.13064-0.00161-0.25971-0.02881-0.37988-0.08008c-0.12124-0.05058-0.23289-0.12162-0.33008-0.21c-0.09109-0.09725-0.16564-0.20875-0.2207-0.33008C12.02149,17.25901,11.99793,17.12994,12,17c0.00346-0.26481,0.10708-0.51849,0.29-0.71c0.23601-0.23439,0.57326-0.33583,0.89941-0.27051c0.06633,0.00976,0.13064,0.03021,0.19043,0.06055c0.06372,0.02159,0.12418,0.05182,0.17969,0.08984c0.0525,0.03702,0.10274,0.07713,0.15047,0.12012c0.18254,0.19176,0.28609,0.44528,0.29,0.71c0.00226,0.26594-0.1022,0.52169-0.29,0.71c-0.09735,0.08817-0.20896,0.15918-0.33008,0.21C13.25973,17.97124,13.13065,17.99842,13,18z"
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

export default MReceipt;
