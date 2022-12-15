import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MApple: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M17.45825,12.62537a4.523,4.523,0,0,1,2.16138-3.80548,4.67189,4.67189,0,0,0-3.658-1.98383c-1.55768-.1579-3.03937.91693-3.82861.91693-.78974,0-2.009-.89374-3.30085-.86908A4.8959,4.8959,0,0,0,4.69385,9.39056C2.93146,12.45074,4.244,16.98425,5.96149,19.46729c.84045,1.21392,1.84228,2.58117,3.15777,2.53137,1.2677-.04981,1.74616-.81879,3.27674-.81879,1.531,0,1.9616.81879,3.30078.79407,1.36291-.02515,2.228-1.23895,3.06164-2.4574a10.94609,10.94609,0,0,0,1.3841-2.84448A4.42047,4.42047,0,0,1,17.45825,12.62537ZM14.94141,5.1933A4.40527,4.40527,0,0,0,15.98169,2a4.4833,4.4833,0,0,0-2.94617,1.51581,4.1855,4.1855,0,0,0-1.061,3.09363A3.70907,3.70907,0,0,0,14.94141,5.1933Z"
        data-name="Brand Logos"
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

export default MApple;
