import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MStoreAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M18,9.21973c-1.13037,1.04034-2.86963,1.04034-4,0c-1.13037,1.04034-2.86963,1.04034-4,0c-1.13037,1.04034-2.86963,1.04034-4,0C5.44641,9.72479,4.72321,10.0033,3.97382,10C3.63055,9.99847,3.30646,9.92731,3,9.8194V21c-0.00031,0.55194,0.4469,0.99969,0.99884,1C3.99927,22,3.99963,22,4,22h16c0.55194,0.00031,0.99969-0.4469,1-0.99884c0-0.00043,0-0.00079,0-0.00116V9.81805C19.99646,10.16986,18.84064,9.98663,18,9.21973z"
      ></path>
      <path
        className="uim-primary"
        d="M16,22H8v-5.82264c-0.03571-2.1016,1.51608-3.89326,3.60125-4.15792c2.20057-0.21802,4.16123,1.38917,4.37925,3.58974C15.99336,15.73906,15.99987,15.86949,16,16V22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M22,2H2C1.44803,1.99969,1.00031,2.44689,1,2.99886C1,2.99924,1,2.99962,1,3v4c-0.00723,1.64963,1.3242,2.99277,2.97383,3C4.72318,10.00328,5.4464,9.72477,6,9.21973c1.13039,1.04036,2.86961,1.04036,4,0c1.13039,1.04036,2.86961,1.04036,4,0c1.13039,1.04036,2.86961,1.04036,4,0c1.2187,1.1118,3.10794,1.02514,4.21973-0.19356C22.72478,8.47257,23.00328,7.74936,23,7V3c0.00031-0.55197-0.44689-0.99969-0.99886-1C22.00076,2,22.00038,2,22,2z"
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

export default MStoreAlt;
