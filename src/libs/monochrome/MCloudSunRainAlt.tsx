import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudSunRainAlt: React.FC<Props> = ({
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
        className="uim-tertiary"
        d="M14.6665 18H5.5c-1.93321-.0003-3.50014-1.56772-3.49983-3.50093.00025-1.57211 1.04858-2.95121 2.56331-3.37207.48096-3.2774 3.52771-5.54437 6.80511-5.06342 2.02716.29748 3.76222 1.60917 4.60114 3.47842 2.28057.71708 3.54803 3.14716 2.83095 5.42774C18.23309 16.77487 16.55877 18.00212 14.6665 18zM18.3584 6.6416c.26538.00031.52002-.1051.70746-.29297l1.1748-1.17578c.38507-.38977.38489-1.01685-.00043-1.40637-.38849-.3927-1.02185-.39618-1.41455-.00763l-1.1748 1.17572c-.18719.1875-.29236.44159-.29242.70648C17.35828 6.19348 17.80597 6.64142 18.3584 6.6416zM16 5.66602c.00018 0 .00037 0 .00055 0 .55212-.00018.99957-.44788.99945-1V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1.66602c0 .00018 0 .00031 0 .00049C15.00012 5.21869 15.44788 5.66614 16 5.66602zM21 7h-1.6665c-.55225 0-1 .44769-1 1s.44775 1 1 1H21c.55231 0 1-.44769 1-1S21.55231 7 21 7z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12.93408 6.34857c.1875.18793.44208.29333.70752.29303l-.00006-.00006c.26495-.00006.51898-.10522.70648-.29242.39093-.39032.39142-1.02368.00104-1.41461l-1.1748-1.17572c-.38953-.38544-1.01666-.38562-1.40649-.00049-.39294.38824-.39673 1.02155-.00848 1.41449L12.93408 6.34857zM19.06543 9.65137c-.39044-.3905-1.02356-.3905-1.414 0-.17987.17987-.26715.41241-.28131.64783.59509.47662 1.03778 1.09949 1.31232 1.79724l.14374.14374c.18732.18787.44177.29333.70703.29303l.00006-.00006c.26508-.00006.51929-.10535.70679-.29279.39056-.39044.39069-1.02362.00018-1.41425L19.06543 9.65137z"
      ></path>
      <path
        className="uim-primary"
        d="M15.95508 3.66992c-1.75372 0-3.25537 1.03845-3.95306 2.52814 1.75024.45386 3.2179 1.67328 3.96771 3.34393 1.1167.35114 1.98535 1.11603 2.50214 2.06989 1.11993-.79236 1.85651-2.09106 1.85822-3.56696C20.33008 5.62866 18.37134 3.66992 15.95508 3.66992zM12.5 16c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-1c0-.55229.44771-1 1-1s1 .44771 1 1v1c.00014.55214-.44734.99986-.99948 1C12.50035 16 12.50017 16 12.5 16zM8.5 17c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-1c0-.55229.44772-1 1-1s1 .44771 1 1v1c.00014.55214-.44734.99986-.99948 1C8.50035 17 8.50017 17 8.5 17zM8.5 22c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-1c0-.55228.44772-1 1-1s1 .44772 1 1v1c.00014.55214-.44734.99986-.99948 1C8.50035 22 8.50017 22 8.5 22zM12.5 21c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-1c0-.55228.44771-1 1-1s1 .44772 1 1v1c.00014.55214-.44734.99986-.99948 1C12.50035 21 12.50017 21 12.5 21z"
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

export default MCloudSunRainAlt;
