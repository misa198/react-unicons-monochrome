import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudMoon: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M14.6665,20H5.5c-1.93321-0.0003-3.50014-1.56772-3.49983-3.50093c0.00025-1.57211,1.04858-2.95121,2.56331-3.37207c0.48096-3.2774,3.52771-5.54437,6.80511-5.06341c2.02716,0.29748,3.76222,1.60917,4.60114,3.47841c2.28057,0.71708,3.54803,3.14716,2.83095,5.42774C18.23309,18.77487,16.55877,20.00212,14.6665,20z"
      ></path>
      <path
        className="uim-primary"
        d="M21.97278,9.54846c-0.12823-0.53735-0.66779-0.86908-1.20514-0.74084c-0.21503,0.05347-0.43567,0.08099-0.65729,0.08203c-1.65607-0.00183-2.99817-1.34393-3-3c0.00104-0.22162,0.02856-0.44226,0.08203-0.65729c0.03577-0.1499,0.03644-0.30615,0.00183-0.45636c-0.12384-0.53839-0.66071-0.87445-1.1991-0.75061c-2.05896,0.46283-3.56378,2.16681-3.8299,4.21429c1.67822,0.4859,3.078,1.68359,3.8045,3.30231c1.14233,0.35919,2.02997,1.14838,2.54181,2.13306c1.70172-0.49786,3.05835-1.86987,3.46307-3.67017C22.00916,9.85461,22.00854,9.69843,21.97278,9.54846z"
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

export default MCloudMoon;
