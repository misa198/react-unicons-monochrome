import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPhoneAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.91406,21.93555a3.04485,3.04485,0,0,1-.38769-.02442A19.09353,19.09353,0,0,1,7.501,16.499,19.09426,19.09426,0,0,1,2.08936,5.47363a3.03693,3.03693,0,0,1,.73046-2.39355A2.99358,2.99358,0,0,1,5.06641,2.06445H8.09277a2.98147,2.98147,0,0,1,2.95459,2.48926c.03418.22852.07618.45313.12549.67676A10.03146,10.03146,0,0,0,11.56006,6.542a1.9939,1.9939,0,0,1-1.0376,2.48145l-.457.21289a12.50046,12.50046,0,0,0,4.69824,4.69824l.21338-.458a1.99635,1.99635,0,0,1,2.48145-1.03613,10.19857,10.19857,0,0,0,1.314.38769c.22217.04883.44678.09083.67188.124a2.98114,2.98114,0,0,1,2.49121,2.95508v3.02636a2.99536,2.99536,0,0,1-1.01563,2.24707A3.03634,3.03634,0,0,1,18.91406,21.93555Z"
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

export default MPhoneAlt;
