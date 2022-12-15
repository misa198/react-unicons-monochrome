import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCalling: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.38184,21.93555a3.05054,3.05054,0,0,1-.3877-.02442A19.09786,19.09786,0,0,1,6.96875,16.499,19.09792,19.09792,0,0,1,1.55664,5.47363a3.04051,3.04051,0,0,1,.73047-2.39355A2.99536,2.99536,0,0,1,4.53418,2.06445H7.56055a2.98117,2.98117,0,0,1,2.95507,2.49024c.03321.22656.0752.45019.125.67383a10.16493,10.16493,0,0,0,.3877,1.31445A1.99244,1.99244,0,0,1,9.98926,9.02344l-.45606.21289a12.50039,12.50039,0,0,0,4.69825,4.69824l.21386-.458a1.98843,1.98843,0,0,1,2.48145-1.03613,9.93151,9.93151,0,0,0,1.31347.38672q.334.0747.67286.125a2.98118,2.98118,0,0,1,2.49023,2.95508v3.02636a2.99539,2.99539,0,0,1-1.01562,2.24707A3.03542,3.03542,0,0,1,18.38184,21.93555Z"
      ></path>
      <circle cx="20.468" cy="8" r="1" className="uim-quaternary"></circle>
      <circle cx="17.468" cy="8" r="1" className="uim-tertiary"></circle>
      <circle cx="14.468" cy="8" r="1" className="uim-primary"></circle>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MCalling;
