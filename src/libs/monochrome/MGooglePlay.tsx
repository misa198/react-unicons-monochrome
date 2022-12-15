import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGooglePlay: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M14.556,12.89526l2.57251,2.554l3.78552-2.18652c0.50624-0.25316,0.83042-0.7661,0.8418-1.332c-0.02048-0.54732-0.3428-1.03813-0.83691-1.27441c-0.31446-0.16992-3.01075-1.73437-4.02247-2.32324l-0.00293-0.002L4.63867,1.25586C4.13772,0.9388,3.50485,0.91604,2.98242,1.19629C2.93255,1.23018,2.88489,1.2672,2.83972,1.30713L14.556,12.89526z"
      ></path>
      <path
        className="uim-secondary"
        d="M20.919,10.65625c-0.29426-0.15894-2.65741-1.52954-3.791-2.18872l-2.59662,2.57788L2.78534,22.69849c0.04799,0.04372,0.09918,0.08379,0.15314,0.11987C3.1474,22.93802,3.38424,23.00034,3.625,22.999c0.29224-0.00365,0.57843-0.08378,0.83008-0.23242C4.84375,22.541,16.89355,15.585,16.89355,15.585l4.02051-2.32226c0.50624-0.25316,0.83042-0.7661,0.8418-1.332C21.73542,11.38341,21.41312,10.89256,20.919,10.65625z"
      ></path>
      <path
        className="uim-quaternary"
        d="M13.60992,11.95953L2.84143,1.30884C2.45599,1.60718,2.22437,2.06616,2.24414,2.56055V21.5459c-0.01294,0.45239,0.19653,0.87122,0.54291,1.15094L13.60992,11.95953z"
      ></path>
      <path
        className="uim-primary"
        d="M20.919,10.65625c-0.74429-0.40077-3.37006-1.94385-3.791-2.18872l-2.59656,2.57788l-0.92145,0.91406l0.94611,0.93579l2.57251,2.554l3.78552-2.18652c0.50624-0.25316,0.83042-0.7661,0.8418-1.332C21.73548,11.38339,21.41315,10.89254,20.919,10.65625z"
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

export default MGooglePlay;
