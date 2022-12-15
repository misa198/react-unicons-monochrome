import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSpade: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M9.95,16.81875a4.72266,4.72266,0,0,1-4.63-7.88l5.41-5.42a1.81711,1.81711,0,0,1,2.54,0l3.74,3.75,1.67,1.67a4.72076,4.72076,0,0,1-4.63,7.88,7.86735,7.86735,0,0,0,1.71,4.18H8.24A7.86735,7.86735,0,0,0,9.95,16.81875Z"
      ></path>
      <path
        className="uim-primary"
        d="M15.75977,21.99854H8.24023a1.00021,1.00021,0,0,1-.77978-1.62647,6.92288,6.92288,0,0,0,1.24707-2.37353,5.71114,5.71114,0,0,1-5.76758-5.71973A5.6838,5.6838,0,0,1,4.61279,8.23193L10.022,2.812a2.82416,2.82416,0,0,1,3.94971-.00586l5.41553,5.42578a5.6838,5.6838,0,0,1,1.67285,4.04688,5.70821,5.70821,0,0,1-5.728,5.71777h-.04a6.9115,6.9115,0,0,0,1.24756,2.37549,1.00021,1.00021,0,0,1-.77978,1.62647Zm-5.69776-2h3.876a8.79738,8.79738,0,0,1-.88379-3.08448,1.00006,1.00006,0,0,1,1.26758-1.05761,3.7142,3.7142,0,0,0,4.73828-3.57764A3.69909,3.69909,0,0,0,17.97314,9.646L12.562,4.22461a.81044.81044,0,0,0-1.13037.00635L6.02783,9.64551a3.698,3.698,0,0,0-1.08789,2.6333,3.747,3.747,0,0,0,1.08692,2.63281,3.80937,3.80937,0,0,0,3.64843.9458,1.00023,1.00023,0,0,1,1.27051,1.05664A8.79738,8.79738,0,0,1,10.062,19.99854Z"
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

export default MSpade;
