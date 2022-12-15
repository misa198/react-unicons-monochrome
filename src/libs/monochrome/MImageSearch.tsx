import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageSearch: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M16.52 12.90991c-1.09963-1.04992-2.83037-1.04992-3.93 0l-1.41 1.41016c-.18789.18415-.29262.43692-.29.7-.00271.26603.10182.52194.29.71l6.23 6.23c.7152-.08939 1.37132-.44242 1.84-.99C19.7334 20.42773 20.00035 19.7265 20 19v-2.62L16.52 12.90991zM16.31348 10.625c-2.38181-.00026-4.31243-1.93131-4.31217-4.31312s1.93131-4.31243 4.31312-4.31217c1.14401.00013 2.2411.4548 3.04983 1.26395l0 0c1.68465 1.68245 1.68644 4.41202.00399 6.09667C18.55853 10.17112 17.45934 10.62618 16.31348 10.625z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.36823,9.36035c-0.80969,0.81079-1.90887,1.26581-3.05475,1.26465c-2.38177-0.00024-4.31244-1.93134-4.31213-4.31311C12.0014,5.45905,12.25696,4.66919,12.6842,4H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.38V8.53192C19.82324,8.82526,19.62109,9.10718,19.36823,9.36035z"
      ></path>
      <path
        className="uim-primary"
        d="M21.70703 10.29303l-1.72565-1.72571c-.17273.28052-.37024.5498-.61316.79303C19.12597 9.6029 18.85174 9.802 18.5642 9.97821l1.72882 1.72876C20.48029 11.89484 20.73474 12.00031 21 12c.26508-.00006.51929-.10535.70679-.29279C22.09735 11.31677 22.09747 10.68359 21.70703 10.29303zM9.40997 11.12c-1.10156-1.04498-2.82837-1.04498-3.92999 0L2 14.59998V19c.00488 1.65485 1.34515 2.99512 3 3h12c.13776.00208.27527-.01135.40997-.03998.71521-.08942 1.37134-.44244 1.84003-.99005l-7.35999-7.35999L9.40997 11.12z"
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

export default MImageSearch;
