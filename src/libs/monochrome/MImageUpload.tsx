import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageUpload: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M11.89,13.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.6V19c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.61z M22.707,4.293l-3-3c-0.39027-0.39048-1.02319-0.39065-1.41368-0.00038C18.2932,1.29274,18.29307,1.29287,18.29294,1.293l-3,3c-0.38801,0.39294-0.38402,1.02602,0.00892,1.41403C15.69131,6.09159,16.31757,6.09158,16.707,5.707L18,4.41406V10c0,0.55229,0.44772,1,1,1s1-0.44771,1-1V4.41406l1.293,1.293c0.39292,0.38803,1.026,0.38407,1.41403-0.00884C23.09164,5.30876,23.09163,4.68244,22.707,4.293z"
      ></path>
      <path
        className="uim-quaternary"
        d="M12.89001,14.60999L19.25,20.96997l0.00006,0.00006C19.73346,20.42767,20.00037,19.7265,20,19v-2.62l-3.47998-3.47009c-1.09967-1.04993-2.83038-1.04993-3.92999,0l-0.698,0.69806L12.89001,14.60999z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,11c-0.55231,0-1-0.44769-1-1V4.41406l-1.29297,1.29291c-0.38947,0.38458-1.01575,0.38464-1.40515,0.00006c-0.39294-0.388-0.39697-1.02112-0.00891-1.414L15.586,4H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.00201-0.00201l0.698-0.69806c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.38V10C20,10.55231,19.55231,11,19,11z"
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

export default MImageUpload;
