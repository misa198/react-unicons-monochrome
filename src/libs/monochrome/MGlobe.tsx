import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MGlobe: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12,22.0003a10,10,0,1,1,10-10A10.01146,10.01146,0,0,1,12,22.0003Z"
      ></path>
      <path
        className="uim-primary"
        d="M12,2.0003a10,10,0,1,0,10,10A10.01145,10.01145,0,0,0,12,2.0003Zm-8,10a7.95978,7.95978,0,0,1,.26331-2h1.853a17.25948,17.25948,0,0,0,0,4h-1.853A7.95985,7.95985,0,0,1,4,12.0003Zm4,0a14.84371,14.84371,0,0,1,.13739-2H11v4H8.13739A14.84394,14.84394,0,0,1,8,12.0003Zm5-7.70276A6.36881,6.36881,0,0,1,15.43488,8.0003H13Zm-2,0V8.0003H8.56512A6.36881,6.36881,0,0,1,11,4.29754ZM11,16.0003v3.70275A6.36881,6.36881,0,0,1,8.56512,16.0003Zm2,3.70275V16.0003h2.43488A6.36881,6.36881,0,0,1,13,19.70305Zm0-5.70275v-4h2.86261a14.6258,14.6258,0,0,1,0,4Zm4.88373-4h1.853a7.72726,7.72726,0,0,1,0,4h-1.853a17.25948,17.25948,0,0,0,0-4Zm1.03381-2h-1.4024a12.10582,12.10582,0,0,0-.96411-2.571A8.05373,8.05373,0,0,1,18.91754,8.0003ZM7.449,5.42925a12.10582,12.10582,0,0,0-.96411,2.571H5.08246A8.05373,8.05373,0,0,1,7.449,5.42925ZM5.08246,16.0003H6.48492a12.10893,12.10893,0,0,0,.96405,2.571A8.0537,8.0537,0,0,1,5.08246,16.0003Zm11.46857,2.571a12.10893,12.10893,0,0,0,.96405-2.571h1.40246A8.0537,8.0537,0,0,1,16.551,18.57134Z"
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

export default MGlobe;
