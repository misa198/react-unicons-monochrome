import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MSchedule: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M7,5.99976C6.44803,6.00007,6.00031,5.55287,6,5.0009c0-0.00038,0-0.00076,0-0.00114v-2c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v2c0.00031,0.55197-0.44689,0.99969-0.99886,1C7.00076,5.99976,7.00038,5.99976,7,5.99976z M17,5.99976c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114v-2c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v2c0.00031,0.55197-0.44689,0.99969-0.99886,1C17.00076,5.99976,17.00038,5.99976,17,5.99976z"
      ></path>
      <path
        className="uim-primary"
        d="M19,4.00024h-1v0.99952c0,0.55228-0.44772,1-1,1s-1-0.44772-1-1V4.00024H8v0.99952c0,0.55228-0.44772,1-1,1s-1-0.44772-1-1V4.00024H5c-1.65685,0-3,1.34315-3,3v2h20v-2C22,5.34339,20.65685,4.00024,19,4.00024L19,4.00024z"
      ></path>
      <circle cx="7" cy="13" r="1" className="uim-primary"></circle>
      <circle cx="7" cy="17" r="1" className="uim-primary"></circle>
      <circle cx="12" cy="13" r="1" className="uim-primary"></circle>
      <circle cx="12" cy="17" r="1" className="uim-primary"></circle>
      <circle cx="17" cy="13" r="1" className="uim-primary"></circle>
      <circle cx="17" cy="17" r="1" className="uim-primary"></circle>
      <path
        className="uim-tertiary"
        d="M2,9.00024v10c0,1.65685,1.34315,3,3,3h14c1.65685,0,3-1.34315,3-3v-10H2z M7,18.00024c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1S7.55228,18.00024,7,18.00024z M7,14.00024c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1s1,0.44771,1,1S7.55228,14.00024,7,14.00024z M12,18.00024c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1s1,0.44772,1,1S12.55229,18.00024,12,18.00024z M12,14.00024c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1s1,0.44771,1,1S12.55229,14.00024,12,14.00024z M17,18.00024c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1S17.55228,18.00024,17,18.00024z M17,14.00024c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1s1,0.44771,1,1S17.55228,14.00024,17,14.00024z"
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

export default MSchedule;
