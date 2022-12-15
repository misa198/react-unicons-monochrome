import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTrees: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M8.5,22c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114v-8c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v8c0.00031,0.55197-0.44689,0.99969-0.99886,1C8.50076,22,8.50038,22,8.5,22z M16.5,22c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114v-8c0-0.55229,0.44771-1,1-1c0.55228,0,1,0.44771,1,1v8c0.00031,0.55197-0.44689,0.99969-0.99886,1C16.50076,22,16.50038,22,16.5,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M16.5,5c-2.76008,0.00324-4.99676,2.23992-5,5v4c0.0032,2.37481,1.67381,4.42085,4,4.89893V13c0-0.55229,0.44771-1,1-1c0.55228,0,1,0.44771,1,1v5.89893c2.32619-0.47808,3.9968-2.52412,4-4.89893v-4C21.49676,7.23992,19.26008,5.00324,16.5,5z"
      ></path>
      <path
        className="uim-quaternary"
        d="M12.26514,16.6333C11.76732,15.84505,11.5021,14.93229,11.5,14v-4c0.00604-1.78552,0.96687-3.43137,2.51874-4.31445c-0.29638-0.72171-0.72952-1.3793-1.27558-1.93655c-2.35122-2.33997-6.15417-2.33085-8.49414,0.02037C3.13038,4.89339,2.50165,6.41419,2.5,8v4c0.00493,2.92474,2.11647,5.42044,5,5.90967V13c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v4.90527C10.51525,17.72449,11.46724,17.28657,12.26514,16.6333z"
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

export default MTrees;
