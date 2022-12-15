import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImagePlus: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M19.25,20.97009C19.7334,20.42773,20.00037,19.7265,20,19v-2.62l-3.47998-3.47009c-1.09967-1.04993-2.83038-1.04993-3.92999,0l-0.70001,0.70007l0,0L19.25,20.96997"
      ></path>
      <path
        className="uim-primary"
        d="M9.40997 11.12c-1.10156-1.04498-2.82837-1.04498-3.92999 0L2 14.59998V19c.00488 1.65485 1.34515 2.99512 3 3h12c.13776.00208.27527-.01135.40997-.03998.71521-.08942 1.37134-.44244 1.84003-.99005l-7.35999-7.35999L9.40997 11.12zM21 4h-1V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1h-1c-.55231 0-1 .44769-1 1s.44769 1 1 1h1v1c0 .00037 0 .00073 0 .00116C18.00031 7.5531 18.44806 8.00031 19 8c.00037 0 .00073 0 .00116 0C19.5531 7.99969 20.00031 7.55194 20 7V6h1c.55231 0 1-.44769 1-1S21.55231 4 21 4z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.00116,8C19.00073,8,19.00037,8,19,8c-0.55194,0.00031-0.99969-0.4469-1-0.99884C18,7.00073,18,7.00037,18,7V6h-1c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.38V7C20.00031,7.55194,19.5531,7.99969,19.00116,8z"
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

export default MImagePlus;
