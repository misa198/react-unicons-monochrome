import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopes: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21,19.62799H7c-1.65485-0.00488-2.99512-1.34515-3-3V9.03802L2.29999,7.33801C2.10345,7.73969,2.00085,8.18079,2,8.62799v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.35443-0.00397,2.48486-0.90845,2.85815-2.14185C21.58459,19.56891,21.30042,19.62708,21,19.62799z"
      ></path>
      <path
        className="uim-primary"
        d="M4,6.62799c0.00055-0.2998,0.06299-0.59174,0.15271-0.87604C3.3504,5.98999,2.66974,6.55817,2.29999,7.33801L4,9.03802V6.62799z"
      ></path>
      <path
        className="uim-tertiary"
        d="M23.7,5.338l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596c-0.00199-0.00198-0.00398-0.00397-0.00596-0.00596L4.3,5.338C4.79464,4.29476,5.84544,3.62926,7,3.628h14C22.15456,3.62926,23.20536,4.29476,23.7,5.338z"
      ></path>
      <path
        className="uim-quaternary"
        d="M23.70001,5.33801L16.12,12.91803c-1.16754,1.17084-3.06317,1.17346-4.23401,0.00592c-0.00201-0.00195-0.00403-0.00397-0.00598-0.00592L4.29999,5.33801C4.10345,5.73969,4.00085,6.18079,4,6.62799v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C23.99915,6.18079,23.89655,5.73969,23.70001,5.33801z"
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

export default MEnvelopes;
