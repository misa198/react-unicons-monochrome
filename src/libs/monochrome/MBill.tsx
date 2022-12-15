import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBill: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
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
        d="M21.999,14v6c0,1.10457-0.89543,2-2,2l0,0c-1.10457,0-2-0.89543-2-2v-8h2C21.10357,12,21.999,12.89543,21.999,14z M10.5,16.5H8c-0.55228,0-1-0.44772-1-1c0-0.55229,0.44772-1,1-1h2.5c0.27614,0,0.5-0.22386,0.5-0.5s-0.22386-0.5-0.5-0.5h-1C8.11929,13.5,7,12.38071,7,11s1.11929-2.5,2.5-2.5H12c0.55229,0,1,0.44771,1,1s-0.44771,1-1,1H9.5C9.22386,10.5,9,10.72386,9,11s0.22386,0.5,0.5,0.5h1c1.38071,0,2.5,1.11929,2.5,2.5S11.88071,16.5,10.5,16.5z"
      ></path>
      <path
        className="uim-primary"
        d="M10,10.5c-0.55197,0.00031-0.99969-0.44689-1-0.99886C9,9.50076,9,9.50038,9,9.5V8c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v1.5c0.00031,0.55197-0.44689,0.99969-0.99886,1C10.00076,10.5,10.00038,10.5,10,10.5z M10,18c-0.55197,0.00031-0.99969-0.44689-1-0.99886C9,17.00076,9,17.00038,9,17v-1.5c0-0.55229,0.44771-1,1-1s1,0.44771,1,1V17c0.00031,0.55197-0.44689,0.99969-0.99886,1C10.00076,18,10.00038,18,10,18z"
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

export default MBill;
