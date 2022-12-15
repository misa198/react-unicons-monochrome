import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPlug: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M19,8H5C4.44775,8,4,7.55225,4,7s0.44775-1,1-1h14c0.55273,0,1,0.44775,1,1S19.55273,8,19,8z"
      ></path>
      <path
        className="uim-primary"
        d="M16 6V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v3H16zM10 6V3c0-.55231-.44769-1-1-1S8 2.44769 8 3v3H10z"
      ></path>
      <path
        className="uim-tertiary"
        d="M6,8v5c0,0.2652,0.10541,0.51953,0.29303,0.70697l3,3C9.48047,16.89459,9.7348,17,10,17h4c0.2652,0,0.51953-0.10541,0.70703-0.29303l3-3C17.89459,13.51953,18,13.2652,18,13V8H6z"
      ></path>
      <path
        className="uim-quaternary"
        d="M14.70703,16.70697C14.51953,16.89459,14.2652,17,14,17h-4c-0.2652,0-0.51953-0.10541-0.70697-0.29303L9,16.41394V21c0,0.55273,0.44775,1,1,1h4c0.55273,0,1-0.44727,1-1v-4.586L14.70703,16.70697z"
      ></path>
      <path
        className="uim-primary"
        d="M13,13h-2c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h2c0.55229,0,1,0.44771,1,1S13.55229,13,13,13z"
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

export default MPlug;
