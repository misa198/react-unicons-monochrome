import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPhonePause: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.91406,21.93555a3.0505,3.0505,0,0,1-.38769-.02442A19.09786,19.09786,0,0,1,7.501,16.499,19.09786,19.09786,0,0,1,2.08887,5.47363a3.04051,3.04051,0,0,1,.73047-2.39355A2.99536,2.99536,0,0,1,5.06641,2.06445H8.09277a2.98119,2.98119,0,0,1,2.95508,2.49024c.0332.22656.0752.45019.125.67383A10.019,10.019,0,0,0,11.55957,6.542a1.99176,1.99176,0,0,1-1.03809,2.48145l-.45605.21289a12.50046,12.50046,0,0,0,4.69824,4.69824l.21387-.458A1.98976,1.98976,0,0,1,17.459,12.44043a9.93165,9.93165,0,0,0,1.31348.38672q.334.0747.67188.125a2.98114,2.98114,0,0,1,2.49121,2.95508v3.02636a2.99536,2.99536,0,0,1-1.01563,2.24707A3.0354,3.0354,0,0,1,18.91406,21.93555Z"
      ></path>
      <path
        className="uim-primary"
        d="M15 10a.99943.99943 0 0 1-1-1V5a1 1 0 0 1 2 0V9A.99943.99943 0 0 1 15 10zM19 10a.99943.99943 0 0 1-1-1V5a1 1 0 0 1 2 0V9A.99943.99943 0 0 1 19 10z"
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

export default MPhonePause;
