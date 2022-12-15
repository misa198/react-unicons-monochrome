import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSetting: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M11.63916,16a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,11.63916,16Zm0-6a2,2,0,1,0,2,2A2.002,2.002,0,0,0,11.63916,10Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.90332,12.66357a1.00089,1.00089,0,0,1,0-1.32714l1.27783-1.44092a1.00078,1.00078,0,0,0,.11817-1.16358l-2-3.46386a1.0037,1.0037,0,0,0-1.06641-.48l-1.88721.38623a1.00026,1.00026,0,0,1-1.14892-.66309l-.60889-1.82715A.99978.99978,0,0,0,13.63916,2h-4a1.00043,1.00043,0,0,0-.94873.68359L8.08105,4.51123a1.00326,1.00326,0,0,1-1.14941.66309L5.04492,4.78809a1.00646,1.00646,0,0,0-1.0664.48l-2,3.46386a1.00078,1.00078,0,0,0,.11816,1.16358l1.27783,1.44092a1.00089,1.00089,0,0,1,0,1.32714L2.09668,14.10449a1.00078,1.00078,0,0,0-.11816,1.16358l2,3.46386a.99873.99873,0,0,0,1.06689.4795l1.88623-.38575a.99792.99792,0,0,1,1.14941.66358l.60938,1.82715A1.00043,1.00043,0,0,0,9.63916,22h4a.99978.99978,0,0,0,.94873-.68408l.60889-1.82715a1.00337,1.00337,0,0,1,1.14892-.66357l1.88672.38623a.99618.99618,0,0,0,1.0669-.4795l2-3.46386a1.00078,1.00078,0,0,0-.11817-1.16358ZM11.63916,16a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,11.63916,16Z"
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

export default MSetting;
