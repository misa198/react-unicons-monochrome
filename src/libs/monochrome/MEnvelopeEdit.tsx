import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeEdit: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.7,7.19845l-7.58,7.58008c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00599c-0.002-0.00199-0.004-0.00399-0.00599-0.00599L2.3,7.19845c0.49465-1.04323,1.54544-1.70874,2.7-1.71h14C20.15456,5.48971,21.20535,6.15522,21.7,7.19845z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.70001,7.19843L14.12,14.7785c-1.16754,1.1709-3.06317,1.17352-4.23401,0.00604C9.88397,14.78253,9.88202,14.78052,9.88,14.7785L2.29999,7.19843C2.10345,7.6001,2.00085,8.04126,2,8.48846v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.99915,8.04126,21.89655,7.6001,21.70001,7.19843z"
      ></path>
      <path
        className="uim-primary"
        d="M16.41992,11.51172H14c-0.55227-0.00003-0.99997-0.44773-1-1V8.09131c0.00007-0.26519,0.10546-0.5195,0.293-0.707l4.58008-4.57959c0.39027-0.39048,1.02319-0.39065,1.41368-0.00038c0.00013,0.00013,0.00026,0.00026,0.00039,0.00038L21.707,5.22461c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368c-0.00013,0.00013-0.00026,0.00026-0.00038,0.00038l-4.58,4.58008C16.93948,11.4063,16.68513,11.51168,16.41992,11.51172z"
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

export default MEnvelopeEdit;
