import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MWindy: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M5.75,16.97559c-.02637,0-.05176-.001-.07812-.00293a3.99519,3.99519,0,0,1-.61622-7.86524A6.99925,6.99925,0,0,1,18.4209,7.21191a4.99283,4.99283,0,0,1,.13769,9.53418,1.00186,1.00186,0,0,1-.29394.04883l-12.5.18067Z"
      ></path>
      <path
        className="uim-primary"
        d="M16.96191 17.00488a3.6729 3.6729 0 0 1-1.89843-.52636 1.13322 1.13322 0 0 0-1.20313 0 3.7435 3.7435 0 0 1-3.79687 0 1.13322 1.13322 0 0 0-1.20313 0 3.6729 3.6729 0 0 1-1.89844.52636 1 1 0 0 1 0-2 1.67759 1.67759 0 0 0 .86524-.23926 3.11818 3.11818 0 0 1 3.26953 0 1.71427 1.71427 0 0 0 1.73047 0 3.11818 3.11818 0 0 1 3.26953 0 1.67755 1.67755 0 0 0 .86523.23926 1 1 0 1 1 0 2zM16.96191 21.00488a3.6729 3.6729 0 0 1-1.89843-.52636 1.13322 1.13322 0 0 0-1.20313 0 3.7435 3.7435 0 0 1-3.79687 0 1.13322 1.13322 0 0 0-1.20313 0 3.6729 3.6729 0 0 1-1.89844.52636 1 1 0 0 1 0-2 1.67759 1.67759 0 0 0 .86524-.23926 3.11818 3.11818 0 0 1 3.26953 0 1.71427 1.71427 0 0 0 1.73047 0 3.11818 3.11818 0 0 1 3.26953 0 1.67755 1.67755 0 0 0 .86523.23926 1 1 0 1 1 0 2z"
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

export default MWindy;
