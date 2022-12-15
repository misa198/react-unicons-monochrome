import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrashAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20 6h-4V5c-.00183-1.65613-1.34387-2.99817-3-3h-2C9.34387 2.00183 8.00183 3.34387 8 5v1H4C3.44769 6 3 6.44769 3 7s.44769 1 1 1h5 6c.00018 0 .00037 0 .00055 0H20c.55231 0 1-.44769 1-1S20.55231 6 20 6zM10 6V5c.00055-.55206.44794-.99945 1-1h2c.55206.00055.99945.44794 1 1v1H10zM10 10c-.55231 0-1 .44769-1 1v6c0 .00018 0 .00037 0 .00055C9.00012 17.55267 9.44788 18.00012 10 18c.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-6C11 10.44769 10.55231 10 10 10zM14 10c-.55231 0-1 .44769-1 1v6c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-6C15 10.44769 14.55231 10 14 10z"
      ></path>
      <path
        className="uim-primary"
        d="M5,8v11c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3V8H5z M11,17c0.00012,0.55212-0.44733,0.99988-0.99945,1C10.00037,18,10.00018,18,10,18c-0.55212,0.00012-0.99988-0.44733-1-0.99945C9,17.00037,9,17.00018,9,17v-6c0-0.55231,0.44769-1,1-1s1,0.44769,1,1V17z M15,17c0.00012,0.55212-0.44733,0.99988-0.99945,1C14.00037,18,14.00018,18,14,18c-0.55212,0.00012-0.99988-0.44733-1-0.99945c0-0.00018,0-0.00037,0-0.00055v-6c0-0.55231,0.44769-1,1-1s1,0.44769,1,1V17z"
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

export default MTrashAlt;
