import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MAssistiveListeningSystems: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M21,11c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114c-0.00878-2.83269-1.3448-5.49749-3.60938-7.19922c-0.44226-0.33116-0.53233-0.95813-0.20117-1.40039s0.95813-0.53233,1.40039-0.20117C20.35723,3.2801,21.98958,6.53757,22,10c0.00031,0.55197-0.44689,0.99969-0.99886,1C21.00076,11,21.00038,11,21,11z"
      ></path>
      <circle cx="7" cy="14" r="1" className="uim-quaternary"></circle>
      <path
        className="uim-tertiary"
        d="M14.50531,3.93488c-3.34436-1.93616-7.62512-0.79449-9.56128,2.54987c-1.57697,2.724-1.14099,6.16571,1.06531,8.41052c0.62836,0.62726,0.7851,1.58612,0.38928,2.38086c-0.96027,1.98151-0.13232,4.36621,1.84918,5.32642c1.91785,0.92938,4.22748,0.18616,5.24341-1.68732l3.56403-7.41907C18.99139,10.15173,17.84973,5.87103,14.50531,3.93488z M7,15c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1s1,0.44769,1,1S7.55231,15,7,15z"
      ></path>
      <circle cx="4" cy="16" r="1" className="uim-quaternary"></circle>
      <path
        className="uim-primary"
        d="M9.999,15.12012c-0.55238-0.00104-0.99933-0.44967-0.99829-1.00205c0.00038-0.20112,0.06138-0.39746,0.17505-0.56338c0.23179-0.33704,0.23179-0.7821,0-1.11914c-0.03731-0.04937-0.07844-0.09573-0.123-0.13867l-0.12011-0.126c-0.15873-0.14683-0.29939-0.31206-0.419-0.49219c-0.92713-1.37317-0.56553-3.23793,0.80764-4.16506c1.37317-0.92712,3.23793-0.56553,4.16506,0.80764C13.82113,8.81711,14,9.40172,14,10c0,0.55229-0.44771,1-1,1s-1-0.44771-1-1c-0.00052-0.55228-0.44866-0.99958-1.00095-0.99905S9.99948,9.44961,10,10.00189c0.00019,0.19831,0.05933,0.39208,0.16992,0.5567c0.04552,0.06647,0.09861,0.12742,0.1582,0.18164l0.1543,0.15918c0.12401,0.12211,0.23677,0.25513,0.33692,0.39747c0.70524,1.01892,0.70719,2.36772,0.00488,3.38867C10.63809,14.95813,10.32907,15.12087,9.999,15.12012z"
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

export default MAssistiveListeningSystems;
