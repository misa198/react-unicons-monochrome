import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileQuestion: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,9l-7-7H7C5.34315,2,4,3.34315,4,5v14c0,1.65685,1.34315,3,3,3h10c1.65685,0,3-1.34315,3-3V9z"
      ></path>
      <path
        className="uim-primary"
        d="M20,9h-5c-1.10457,0-2-0.89543-2-2V2L20,9z M11.86621,16.00031c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1s1-0.44771,1-1s-0.44771-1-1-1c-0.35723,0.00033-0.68726,0.19083-0.86621,0.5c-0.27637,0.47826-0.88812,0.64193-1.36638,0.36557c-0.47795-0.27618-0.64177-0.88736-0.36604-1.36557c0.82832-1.43507,2.66315-1.92694,4.09822-1.09862c1.43507,0.82832,1.92694,2.66315,1.09862,4.09822C13.92857,15.42828,12.93813,16.00024,11.86621,16.00031z M11.86963,19.00031c-0.13391-0.00055-0.26637-0.02777-0.38965-0.08008c-0.11941-0.0485-0.22822-0.11983-0.32031-0.21c-0.09111-0.09702-0.16538-0.20859-0.21973-0.33008c-0.09375-0.24458-0.09375-0.51518,0-0.75976c0.05173-0.12292,0.12629-0.23493,0.21973-0.33008c0.39719-0.37012,1.01296-0.37012,1.41015,0c0.09674,0.09253,0.17193,0.20522,0.22022,0.33008c0.10612,0.24214,0.10612,0.51762,0,0.75976c-0.05094,0.12346-0.12578,0.23564-0.22022,0.33008c-0.09192,0.09016-0.20056,0.16149-0.31982,0.21C12.12967,18.97155,12.00044,18.99876,11.86963,19.00031z"
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

export default MFileQuestion;
