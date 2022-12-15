import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRepeat: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M11.4978,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.39048-0.39029-0.39064-1.02322-0.00036-1.4137c0.00012-0.00012,0.00024-0.00024,0.00036-0.00036l2.5-2.5c0.39214-0.38882,1.02523-0.38613,1.41405,0.00601c0.38649,0.38979,0.38648,1.01827-0.00002,1.40805l-1.793,1.793l1.793,1.793c0.39047,0.39058,0.39037,1.02375-0.00021,1.41421C12.01713,21.89464,11.7629,21.99995,11.4978,22z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21,4.5h-2c-0.55228,0-1,0.44772-1,1s0.44772,1,1,1h1v11h-8.58813l-1,1l1,1H21c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052v-13c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00035,4.5,21.00017,4.5,21,4.5z"
      ></path>
      <path
        className="uim-primary"
        d="M12.5,2c0.26527-0.0003,0.51971,0.10515,0.707,0.293l2.5,2.5c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368C15.70726,6.2068,15.70713,6.20693,15.707,6.20706l-2.5,2.5c-0.39296,0.38799-1.02604,0.38396-1.41403-0.009C11.40846,8.30862,11.40847,7.68242,11.793,7.293L13.586,5.5l-1.793-1.793c-0.39047-0.39058-0.39037-1.02375,0.00021-1.41421C11.98069,2.10537,12.23491,2.00006,12.5,2z"
      ></path>
      <path
        className="uim-primary"
        d="M5,17.5H4v-11h8.58594l1-1l-1-1H3C2.44786,4.49986,2.00014,4.94734,2,5.49948C2,5.49965,2,5.49983,2,5.5v13c-0.00014,0.55214,0.44734,0.99986,0.99948,1c0.00017,0,0.00035,0,0.00052,0h2c0.55228,0,1-0.44772,1-1S5.55228,17.5,5,17.5z"
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

export default MRepeat;
