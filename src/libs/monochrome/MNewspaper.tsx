import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MNewspaper: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M8.44444,3.11121c-1.10457,0-2,0.89543-2,2v13.55556c-0.00003,1.22729-0.99493,2.22219-2.22222,2.22223h14.44445C20.50762,20.889,22,19.39662,22,17.55567c0,0,0-0.00001,0-0.00001V5.11121c0-1.10457-0.89543-2-2-2L8.44444,3.11121z"
      ></path>
      <path
        className="uim-tertiary"
        d="M6.44446,18.66675V7.55603H4c-1.10455,0-2,0.89539-2,1.99994v9.33301c0,1.10461,0.89545,2,2,2h0.22223C5.44952,20.88898,6.4444,19.89404,6.44446,18.66675z"
      ></path>
      <path
        className="uim-primary"
        d="M17,9.0001h-6c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h6c0.55228,0,1,0.44772,1,1S17.55228,9.0001,17,9.0001z M17,13.0001h-1c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h1c0.55228,0,1,0.44771,1,1S17.55228,13.0001,17,13.0001z M12,13.0001h-1c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h1c0.55229,0,1,0.44771,1,1S12.55229,13.0001,12,13.0001z M17,17.0001h-1c-0.55229,0-1-0.44772-1-1c0-0.55229,0.44771-1,1-1h1c0.55228,0,1,0.44771,1,1C18,16.55238,17.55228,17.0001,17,17.0001z M12,17.0001h-1c-0.55229,0-1-0.44772-1-1c0-0.55229,0.44771-1,1-1h1c0.55229,0,1,0.44771,1,1C13,16.55238,12.55229,17.0001,12,17.0001z"
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

export default MNewspaper;
