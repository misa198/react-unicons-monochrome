import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArchway: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M16,22H8c-0.55197,0.00031-0.99969-0.44689-1-0.99886C7,21.00076,7,21.00038,7,21v-4.52832c-0.01068-3.12251,1.75505-5.97942,4.55273-7.36621c0.2816-0.14063,0.61294-0.14063,0.89454,0c2.79768,1.38679,4.56341,4.2437,4.55273,7.36621V21c0.00031,0.55197-0.44689,0.99969-0.99886,1C16.00076,22,16.00038,22,16,22z M22,8H2C1.44772,8,1,7.55228,1,7s0.44772-1,1-1h20c0.55228,0,1,0.44772,1,1S22.55228,8,22,8z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21 6V3c0-.00037 0-.00073 0-.00116C20.99969 2.4469 20.55194 1.99969 20 2H4C3.99963 2 3.99927 2 3.99884 2 3.4469 2.00031 2.99969 2.44806 3 3v3H21zM3 8v13c0 .00037 0 .00073 0 .00116C3.00031 21.5531 3.44806 22.00031 4 22h4c-.55194.00031-.99969-.4469-1-.99884C7 21.00073 7 21.00037 7 21v-4.52832c-.01068-3.1225 1.75507-5.97943 4.55273-7.36621.28162-.14062.61292-.14062.89453 0 2.79767 1.38678 4.56342 4.24371 4.55273 7.36621V21c.00031.55194-.4469.99969-.99884 1H20c.00037 0 .00073 0 .00116 0C20.5531 21.99969 21.00031 21.55194 21 21V8H3z"
      ></path>
      <path
        className="uim-primary"
        d="M22,22H2c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h20c0.55228,0,1,0.44772,1,1S22.55228,22,22,22z"
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

export default MArchway;
