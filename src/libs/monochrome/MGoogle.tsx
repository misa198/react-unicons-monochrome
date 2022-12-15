import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGoogle: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-secondary"
        d="M12.22182,5.97728c1.42137-0.02391,2.79488,0.51341,3.82273,1.49545l2.86819-2.86818c-1.81006-1.7-4.20788-2.63339-6.69092-2.60455C8.44087,1.99855,4.98265,4.13047,3.28544,7.5091L6.62636,10.1C7.41416,7.66784,9.66545,6.00909,12.22182,5.97728z"
      ></path>
      <path
        className="uim-primary"
        d="M3.28547,7.50908c-1.41819,2.82599-1.41819,6.15582,0,8.98181L6.62634,13.9c-0.41812-1.23216-0.41812-2.56784,0-3.8L3.28547,7.50908z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15.60822,17.06822c-2.80401,1.79981-6.53614,0.98574-8.33595-1.81827c-0.2705-0.42143-0.48748-0.8749-0.64593-1.34995l-3.34087,2.59089C4.98265,19.86954,8.44089,22.00147,12.22185,22c2.43429,0.06602,4.8018-0.80065,6.61815-2.42269L15.60822,17.06822z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.64001,10.18182h-9.41815v3.86816h5.38177c-0.22498,1.23639-0.94592,2.3269-1.99542,3.01819c-0.00317,0.00208-0.00647,0.0036-0.00964,0.00562c0.00317-0.00201,0.00647-0.00354,0.00964-0.00555l3.23175,2.50909l0.00006-0.00006c1.9903-1.91693,3.07397-4.5882,2.98181-7.34998C21.82239,11.54138,21.76154,10.85687,21.64001,10.18182z"
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

export default MGoogle;
