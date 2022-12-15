import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFootball: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22A10,10,0,1,1,22,12,10.01146,10.01146,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,22A10,10,0,1,1,22,12,10.01146,10.01146,0,0,1,12,22Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.7,5.62a10.19257,10.19257,0,0,0-3.37-2.63,9.96432,9.96432,0,0,0-8.66,0A10.1336,10.1336,0,0,0,4.89,4.97,9.9588,9.9588,0,0,0,2,12a8.971,8.971,0,0,0,.07,1.17,9.70819,9.70819,0,0,0,.97,3.26A9.95616,9.95616,0,0,0,12,22a8.8312,8.8312,0,0,0,1.27-.09,10.00835,10.00835,0,0,0,8.53-7.9A10.22537,10.22537,0,0,0,22,12,9.94541,9.94541,0,0,0,19.7,5.62Z"
      ></path>
      <path
        className="uim-primary"
        d="M10.05,15l-.04-.11-1.16-3.6.1-.07L12,9l3.13,2.27.02.02L13.95,15Z"
      ></path>
      <path
        className="uim-primary"
        d="M14.67773 16H9.34863l-.27881-.76953-1.39746-4.335.70313-.49414L11.999 7.76367l3.84668 2.80762.42139.43164-.16553.59473zm-3.9038-2h2.44873l.7539-2.331L12.001 10.23633 10.02441 11.6748zM16.33 2.99L12 6.13 7.67 2.99a9.96432 9.96432 0 0 1 8.66 0zM6.45 10.09L2.07 13.17A8.971 8.971 0 0 1 2 12 9.9588 9.9588 0 0 1 4.89 4.97zM9.85 21.77a10.04029 10.04029 0 0 1-6.81-5.34l5.35.19zM20.54 17.2a9.9997 9.9997 0 0 1-7.27 4.71l1.93-4.99zM22 12a10.22537 10.22537 0 0 1-.2 2.01l-4.11-3.43L19.7 5.62A9.94541 9.94541 0 0 1 22 12z"
      ></path>
      <path
        className="uim-primary"
        d="M12 11.05957a.99974.99974 0 0 1-1-1V5.12988a1 1 0 0 1 2 0v4.92969A.99974.99974 0 0 1 12 11.05957zM9.80371 12.60938a.99617.99617 0 0 1-.41162-.08887L3.4751 9.8457a1 1 0 1 1 .82422-1.82226l5.917 2.6748a1 1 0 0 1-.4126 1.91114zM7.32715 18.75488a1.00026 1.00026 0 0 1-.73-1.68359l3.7456-4a1.00009 1.00009 0 0 1 1.46 1.36719l-3.7456 4A.99831.99831 0 0 1 7.32715 18.75488z"
      ></path>
      <path
        className="uim-primary"
        d="M15.77832,18.79a1.02574,1.02574,0,0,1-.85352-.45508l-3.25146-5a.99991.99991,0,0,1,1.67676-1.08984l3.20459,4.92773A.99753.99753,0,0,1,15.77832,18.79Z"
      ></path>
      <path
        className="uim-primary"
        d="M13.26953,12.77246a1.00016,1.00016,0,0,1-.25976-1.96582l6.55957-1.76953a1.00027,1.00027,0,0,1,.5205,1.93164l-6.55957,1.76953A1.00144,1.00144,0,0,1,13.26953,12.77246Z"
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

export default MFootball;
