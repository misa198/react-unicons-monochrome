import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MTicket: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M9,5.0001H3c-0.55228,0-1,0.44772-1,1v4c-0.00442,0.54785,0.43611,0.99555,0.98396,0.99997C2.98564,11.00009,2.98732,11.0001,2.989,11.0001c0.55228-0.00605,1.0049,0.43676,1.01095,0.98905c0.00605,0.55229-0.43676,1.0049-0.98905,1.01095c-0.0073,0.00008-0.0146,0.00008-0.0219,0c-0.54786,0.00164-0.99067,0.4471-0.98903,0.99496C1.99998,13.99674,1.99999,13.99842,2,14.0001v4c0,0.55228,0.44772,1,1,1h6V5.0001z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21,5.00012H9c0.55231,0,1,0.44769,1,1v1c0.00031,0.55194-0.4469,0.99963-0.99884,1c-0.00037,0-0.00079,0-0.00116,0v2c0.55231,0,1,0.44769,1,1v2c0.00031,0.55194-0.4469,0.99963-0.99884,1c-0.00037,0-0.00079,0-0.00116,0v2c0.55231,0,1,0.44769,1,1v1c0.00031,0.55194-0.4469,0.99963-0.99884,1H21c0.00037,0,0.00079,0,0.00116,0c0.55194-0.00037,0.99915-0.44806,0.99884-1v-4c0-0.00043,0-0.00079,0-0.00116c-0.00031-0.552-0.44806-0.99921-1-0.99884c-0.55231,0-1-0.44775-1-1c0-0.55231,0.44769-1,1-1c0.00037,0,0.00079,0,0.00116,0c0.55194-0.00037,0.99915-0.44806,0.99884-1v-4c0-0.00043,0-0.00079,0-0.00116C21.99969,5.44696,21.55194,4.99976,21,5.00012z"
      ></path>
      <path
        className="uim-primary"
        d="M9,19.0001c-0.55196,0.00032-0.99968-0.44687-1-0.99884c0-0.00039,0-0.00077,0-0.00116v-1c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v1c0.00032,0.55196-0.44688,0.99968-0.99884,1C9.00077,19.0001,9.00039,19.0001,9,19.0001z M9,8.0001C8.44804,8.00042,8.00032,7.55322,8,7.00126C8,7.00087,8,7.00049,8,7.0001v-1c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v1c0.00032,0.55196-0.44688,0.99968-0.99884,1C9.00077,8.0001,9.00039,8.0001,9,8.0001z M9,14.0001c-0.55196,0.00032-0.99968-0.44688-1-0.99884c0-0.00039,0-0.00077,0-0.00116v-2c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v2c0.00032,0.55196-0.44688,0.99968-0.99884,1C9.00077,14.0001,9.00039,14.0001,9,14.0001z"
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

export default MTicket;
