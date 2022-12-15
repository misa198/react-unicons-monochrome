import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHourglass: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M15.87793,9.53613l0.65771-0.65723C17.47644,7.94305,18.00372,6.66974,18,5.34277V2c0.00012-0.55212-0.44733-0.99988-0.99945-1C17.00037,1,17.00018,1,17,1H7C6.44788,0.99988,6.00012,1.44733,6,1.99945C6,1.99963,6,1.99982,6,2v3.34277C5.9964,6.6701,6.52386,7.94373,7.46484,8.87988l0.65674,0.65527C8.68597,10.09686,9.00232,10.86096,9,11.65723v1.00977c-0.00146,0.64874-0.21167,1.27979-0.59961,1.7998l-1.40088,1.86719C6.35272,17.20032,6.00226,18.25189,6,19.33301V22c-0.00012,0.55212,0.44733,0.99988,0.99945,1C6.99963,23,6.99982,23,7,23h2c-0.55212,0.00012-0.99988-0.44733-1-0.99945C8,22.00037,8,22.00018,8,22v-2.66699c-0.00024-0.56793,0.0965-1.13171,0.28613-1.66699C8.42761,17.26672,8.80536,16.99988,9.229,17H14.771c0.42365-0.00012,0.80139,0.26672,0.94287,0.66602C15.9035,18.20129,16.00024,18.76508,16,19.33301V22c0.00012,0.55212-0.44733,0.99988-0.99945,1H17c0.55212,0.00012,0.99988-0.44733,1-0.99945c0-0.00018,0-0.00037,0-0.00055v-2.66699c-0.0022-1.08118-0.35284-2.13287-1-2.99902l-1.3999-1.86719c-0.38824-0.51984-0.59869-1.15094-0.6001-1.7998v-1.00977C14.99756,10.86133,15.31372,10.09753,15.87793,9.53613z M14.53564,8.87891l-0.65771,0.65723C13.3158,10.09784,13,10.85986,13,11.65454V12h-2v-0.34277c0-0.79742-0.31726-1.56213-0.88177-2.12543L9.46484,8.87988C8.69171,8.10162,8.19904,7.08862,8.06415,6h7.8717C15.80115,7.08832,15.30859,8.10101,14.53564,8.87891z"
      ></path>
      <path
        className="uim-tertiary"
        d="M13,12v-0.34547c0-0.79464,0.31582-1.55671,0.87793-2.1184l0.65771-0.65722C15.3086,8.10102,15.80114,7.08832,15.93585,6h-7.8717c0.13488,1.08865,0.62757,2.10165,1.40069,2.87988l0.6534,0.65194C10.68275,10.09508,11,10.85977,11,11.65723V12H13z"
      ></path>
      <path
        className="uim-primary"
        d="M19,3H5C4.44772,3,4,2.55228,4,2s0.44772-1,1-1h14c0.55228,0,1,0.44772,1,1S19.55228,3,19,3z"
      ></path>
      <path
        className="uim-tertiary"
        d="M15,23H9c-0.55214,0.00014-0.99986-0.44734-1-0.99948C8,22.00035,8,22.00017,8,22v-2.667c-0.00026-0.56791,0.09651-1.13169,0.28613-1.667C8.42762,17.2667,8.80537,16.99987,9.229,17h5.542c0.42363-0.00013,0.80138,0.2667,0.94287,0.666c0.18962,0.53531,0.28639,1.09909,0.28613,1.667V22c0.00014,0.55214-0.44734,0.99986-0.99948,1C15.00035,23,15.00017,23,15,23z"
      ></path>
      <path
        className="uim-primary"
        d="M19,23H5c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h14c0.55228,0,1,0.44772,1,1S19.55228,23,19,23z"
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

export default MHourglass;
