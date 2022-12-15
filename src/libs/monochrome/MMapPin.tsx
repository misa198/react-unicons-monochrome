import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMapPin: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22c-4.48633,0-8-2.19629-8-5c0-1.73535,1.35742-3.30957,3.63184-4.21c0.51306-0.20431,1.09461,0.04598,1.29892,0.55904s-0.04598,1.09461-0.55904,1.29892c-0.00119,0.00047-0.00237,0.00094-0.00356,0.00141C6.90723,15.22754,6,16.12891,6,17c0,1.41895,2.46387,3,6,3s6-1.58105,6-3c0-0.87109-0.90723-1.77246-2.36816-2.35059c-0.51346-0.20333-0.76487-0.7844-0.56155-1.29787c0.20333-0.51346,0.7844-0.76487,1.29787-0.56154l0,0C18.64258,13.69043,20,15.26465,20,17C20,19.80371,16.48633,22,12,22z"
      ></path>
      <circle cx="12" cy="6" r="4" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M12,10c-0.34741,0-0.67859-0.05817-1-0.14142V17c0,0.00037,0,0.00073,0,0.00116C11.00031,17.5531,11.44806,18.00031,12,18c0.00037,0,0.00073,0,0.00116,0C12.5531,17.99969,13.00031,17.55194,13,17V9.85858C12.67859,9.94183,12.34741,10,12,10z"
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

export default MMapPin;
