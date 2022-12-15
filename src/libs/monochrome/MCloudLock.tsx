import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudLock: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M14,16h-4c-0.55214,0.00014-0.99986-0.44734-1-0.99948C9,15.00035,9,15.00017,9,15v-2c0-1.65685,1.34315-3,3-3s3,1.34315,3,3v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C14.00035,16,14.00017,16,14,16z M11,14h2v-1c0-0.55229-0.44771-1-1-1s-1,0.44771-1,1V14z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,12c-0.55231,0-1,0.44769-1,1v1h2v-1C13,12.44769,12.55231,12,12,12z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18.42926,7.23242c-1.52637-3.54962-5.64124-5.18976-9.1908-3.66339c-2.2785,0.9798-3.86798,3.09271-4.17767,5.55353c-2.14478,0.51538-3.46564,2.67188-2.95026,4.81665C2.54248,15.73663,4.15143,17.00275,6,17h11c2.75391,0.00757,4.99249-2.21881,5-4.97272C22.0061,9.8136,20.55188,7.8609,18.42926,7.23242z M15,15c0.00012,0.55212-0.44733,0.99988-0.99945,1C14.00037,16,14.00018,16,14,16h-4c-0.55212,0.00012-0.99988-0.44733-1-0.99945C9,15.00037,9,15.00018,9,15v-2c0-1.65686,1.34314-3,3-3s3,1.34314,3,3V15z"
      ></path>
      <path
        className="uim-primary"
        d="M14,22h-4c-1.65685,0-3-1.34315-3-3v-2c0-1.65685,1.34315-3,3-3h4c1.65685,0,3,1.34315,3,3v2C17,20.65685,15.65685,22,14,22z"
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

export default MCloudLock;
