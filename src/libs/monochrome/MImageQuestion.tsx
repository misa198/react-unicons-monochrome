import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageQuestion: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M16.52,12.90591c-1.09963-1.04993-2.83037-1.04993-3.93,0l-1.41,1.41015c-0.18788,0.18414-0.2926,0.43689-0.29,0.69995c-0.00271,0.26603,0.10182,0.52194,0.29,0.71l6.23,6.23c0.7152-0.08939,1.37132-0.44242,1.84-0.99c0.48338-0.54232,0.75034-1.24352,0.75-1.97v-2.62L16.52,12.90591z"
      ></path>
      <path
        className="uim-primary"
        d="M11.89,13.606l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.596v4.4c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.606z M19,8.00391c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1c0.55228-0.00032,0.99974-0.4483,0.99941-1.00059s-0.4483-0.99974-1.00059-0.99941c-0.35747,0.00021-0.68764,0.19122-0.86601,0.501c-0.27668,0.47786-0.88835,0.64094-1.36621,0.36426c-0.47786-0.27668-0.64094-0.88835-0.36426-1.36621c0.82892-1.43462,2.66389-1.92564,4.09851-1.09671c1.43462,0.82892,1.92564,2.66389,1.09671,4.09851C21.06154,7.43247,20.07144,8.00389,19,8.00391z M19,11.00977c-0.26633-0.00532-0.52046-0.11263-0.71-0.29981C18.10182,10.52191,17.9973,10.26602,18,10c0.00171-0.26228,0.10577-0.51352,0.29-0.7002c0.04735-0.04604,0.09723-0.0894,0.14941-0.12988c0.06055-0.03027,0.12012-0.06054,0.18067-0.08984c0.05957-0.02051,0.12011-0.04,0.17968-0.06055c0.19517-0.03588,0.39653-0.01486,0.58008,0.06055C19.75404,9.23251,19.99904,9.59594,20,10c-0.00225,0.26506-0.10604,0.51916-0.29,0.71c-0.09446,0.0943-0.20664,0.16897-0.33008,0.21973C19.25973,10.98098,19.13065,11.00818,19,11.00977z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,8.00391c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1c0.27301-0.00012,0.51935-0.11102,0.69971-0.28845c-0.29529-0.61877-0.79279-1.11713-1.41046-1.41443c-0.05975,0.06036-0.11292,0.1283-0.15643,0.20386c-0.27667,0.47791-0.88837,0.64099-1.36621,0.36426c-0.32184-0.18634-0.48523-0.52612-0.48328-0.87317H5c-1.65485,0.00488-2.99518,1.34515-3,3v7.60004l3.47998-3.47998c1.10162-1.04504,2.82843-1.04504,3.92999,0l2.47998,2.48993l0.70007-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.37604V10c-0.00226,0.26508-0.10602,0.51917-0.28998,0.71002c-0.09448,0.0943-0.20667,0.16895-0.33008,0.21973C19.2597,10.98096,19.13068,11.00818,19,11.00977c-0.26636-0.00531-0.52045-0.11261-0.71002-0.2998C18.10181,10.52191,17.99731,10.26599,18,10c0.00171-0.26227,0.10577-0.51349,0.28998-0.7002c0.04736-0.04602,0.09723-0.08942,0.14941-0.12988c0.06055-0.03027,0.12012-0.06055,0.18066-0.08984c0.05957-0.02051,0.12012-0.03998,0.17969-0.06055c0.19519-0.03589,0.39655-0.01489,0.58008,0.06055C19.75403,9.23254,19.99902,9.59595,20,10V7.80975C19.68103,7.92365,19.34912,8.00391,19,8.00391z"
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

export default MImageQuestion;
