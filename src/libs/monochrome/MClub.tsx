import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MClub: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,15.32A4.49541,4.49541,0,0,1,4,12.5,4.49516,4.49516,0,0,1,7.54,8.1a4.03228,4.03228,0,0,1-.04-.6,4.5,4.5,0,0,1,9,0,4.03228,4.03228,0,0,1-.04.6A4.502,4.502,0,0,1,15.5,17,4.44983,4.44983,0,0,1,12,15.32Z"
      ></path>
      <path
        className="uim-primary"
        d="M15.5,18A5.45106,5.45106,0,0,1,12,16.74316,5.45106,5.45106,0,0,1,8.5,18,5.502,5.502,0,0,1,6.50146,7.37256a5.5,5.5,0,0,1,10.99708,0A5.502,5.502,0,0,1,15.5,18ZM12,14.31982a.9998.9998,0,0,1,.78271.37745A3.45115,3.45115,0,0,0,15.5,16a3.50179,3.50179,0,0,0,.748-6.92236,1.00018,1.00018,0,0,1-.77686-1.127A2.97245,2.97245,0,0,0,15.5,7.5a3.5,3.5,0,0,0-7,0,2.97245,2.97245,0,0,0,.02881.45068,1.00018,1.00018,0,0,1-.77686,1.127,3.5008,3.5008,0,1,0,3.46534,5.61963A.9998.9998,0,0,1,12,14.31982Z"
      ></path>
      <path
        className="uim-primary"
        d="M14.05,16.82A7.86735,7.86735,0,0,0,15.76,21H8.24a7.86735,7.86735,0,0,0,1.71-4.18"
      ></path>
      <path
        className="uim-primary"
        d="M15.75977,22H8.24023a1.0002,1.0002,0,0,1-.77978-1.62646,6.85448,6.85448,0,0,0,1.49414-3.64893,1.00015,1.00015,0,1,1,1.99121.19043A8.8,8.8,0,0,1,10.062,20h3.876a8.8,8.8,0,0,1-.88379-3.085,1.00015,1.00015,0,0,1,1.99121-.19043,6.85448,6.85448,0,0,0,1.49414,3.64893A1.0002,1.0002,0,0,1,15.75977,22Z"
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

export default MClub;
