import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MObjectGroup: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M11,10h5c0.55228,0,1,0.44771,1,1v5c0,0.55228-0.44772,1-1,1h-5c-0.55229,0-1-0.44772-1-1v-5C10,10.44771,10.44771,10,11,10z"
      ></path>
      <path
        className="uim-primary"
        d="M10 11c0-.55231.44769-1 1-1h3V8c0-.55231-.44769-1-1-1H8C7.44769 7 7 7.44769 7 8v5c0 .55231.44769 1 1 1h2V11zM4 22c-1.10457 0-2-.89543-2-2s.89543-2 2-2 2 .89543 2 2C5.99857 21.10398 5.10398 21.99857 4 22zM4 6C2.89543 6 2 5.10457 2 4s.89543-2 2-2 2 .89543 2 2C5.99857 5.10398 5.10398 5.99857 4 6zM20 6c-1.10457 0-2-.89543-2-2s.89543-2 2-2 2 .89543 2 2C21.99857 5.10398 21.10398 5.99857 20 6zM20 22c-1.10457 0-2-.89543-2-2s.89543-2 2-2 2 .89543 2 2C21.99857 21.10398 21.10398 21.99857 20 22z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18.27832,5c-0.37109-0.61503-0.37109-1.38497,0-2H5.72168c0.37109,0.61503,0.37109,1.38497,0,2H18.27832z M20,18c0.35218,0.00201,0.69742,0.0981,1,0.27832V5.72168c-0.61502,0.37109-1.38498,0.37109-2,0v12.55664C19.30258,18.0981,19.64782,18.00201,20,18z M4,18c0.35218,0.00201,0.69742,0.0981,1,0.27832V5.72168c-0.61503,0.37109-1.38497,0.37109-2,0v12.55664C3.30258,18.0981,3.64782,18.00201,4,18z M18.27832,19H5.72168c0.37109,0.61502,0.37109,1.38498,0,2h12.55664C17.90723,20.38498,17.90723,19.61502,18.27832,19z"
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

export default MObjectGroup;
