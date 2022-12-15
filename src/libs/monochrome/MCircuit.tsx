import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCircuit: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M3 13h2v-2H3c-.55231 0-1 .44769-1 1S2.44769 13 3 13zM13 5V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v2H13zM3 9h2V8c.00037-.35254.07269-.68579.18463-1H3C2.44769 7 2 7.44769 2 8S2.44769 9 3 9zM19 8v1h2c.55231 0 1-.44769 1-1s-.44769-1-1-1h-2.18463C18.92731 7.31421 18.99963 7.64746 19 8zM16 5c.35254.00037.68579.07269 1 .18463V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v2H16zM8 5h1V3c0-.55231-.44769-1-1-1S7 2.44769 7 3v2.18463C7.31421 5.07269 7.64746 5.00037 8 5zM5 16v-1H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h2.18463C5.07269 16.68579 5.00037 16.35254 5 16zM21 15h-2v1c-.00037.35254-.07269.68579-.18463 1H21c.55231 0 1-.44769 1-1S21.55231 15 21 15zM21 11h-2v2h2c.55231 0 1-.44769 1-1S21.55231 11 21 11zM16 19h-1v2c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2.18463C16.68579 18.92731 16.35254 18.99963 16 19zM8 19c-.35254-.00037-.68579-.07269-1-.18463V21c0 .00018 0 .00037 0 .00055C7.00012 21.55267 7.44788 22.00012 8 22c.00018 0 .00037 0 .00055 0C8.55267 21.99988 9.00012 21.55212 9 21v-2H8zM11 19v2c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2H11z"
      ></path>
      <g>
        <circle cx="10" cy="10" r="1" className="uim-quaternary"></circle>
        <circle cx="14" cy="10" r="1" className="uim-quaternary"></circle>
        <circle cx="14" cy="14" r="1" className="uim-quaternary"></circle>
        <circle cx="10" cy="14" r="1" className="uim-quaternary"></circle>
      </g>
      <path
        className="uim-tertiary"
        d="M16,5H8C6.34387,5.00183,5.00183,6.34387,5,8v8c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3V8C18.99817,6.34387,17.65613,5.00183,16,5z M10,15c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1s1,0.44769,1,1S10.55231,15,10,15z M10,11c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1s1,0.44769,1,1S10.55231,11,10,11z M14,15c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1s1,0.44769,1,1S14.55231,15,14,15z M14,11c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1s1,0.44769,1,1S14.55231,11,14,11z"
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

export default MCircuit;
