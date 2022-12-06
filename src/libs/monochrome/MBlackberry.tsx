import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBlackberry: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M7.18842,13.35193H5.2699l0.52319-2.41455h1.83826c1.19464,0,1.47912,0.5852,1.47912,1.04974C9.11047,12.64435,8.68286,13.35193,7.18842,13.35193z M7.84918,9.71484h-1.913l0.51947-2.41632h1.84013c1.19378,0,1.47918,0.587,1.47918,1.05152C9.7749,9.0072,9.34723,9.71484,7.84918,9.71484z M11.60327,17.14032H9.68481l0.5221-2.41815h1.84021c1.19287,0,1.47565,0.5888,1.47565,1.05334C13.52277,16.43445,13.09778,17.14032,11.60327,17.14032z M12.31091,13.35193H10.397l0.52124-2.41455h1.83924c1.19378,0,1.47644,0.5852,1.47644,1.04974C14.23389,12.64435,13.809,13.35193,12.31091,13.35193z M12.97534,9.71484H11.0614l0.52216-2.41632h1.83654c1.19556,0,1.48005,0.587,1.48005,1.05152C14.90021,9.0072,14.47339,9.71484,12.97534,9.71484z M16.72229,15.32h-1.91577l0.52215-2.41809h1.83838c1.19373,0,1.47821,0.59051,1.47821,1.05328C18.64526,14.6123,18.22034,15.32,16.72229,15.32z M17.4353,11.87732h-1.91577l0.52222-2.41638h1.84009c1.19378,0,1.4765,0.587,1.4765,1.05157C19.35834,11.16974,18.93335,11.87732,17.4353,11.87732z"
        ></path>
        <path
          className="uim-primary"
          d="M12,2C6.47717,2,2,6.47717,2,12s4.47717,10,10,10s10-4.47717,10-10S17.52283,2,12,2z M7.18842,13.35193H5.2699l0.52319-2.41455h1.83826c1.19464,0,1.47913,0.58521,1.47913,1.04974C9.11047,12.64435,8.68286,13.35193,7.18842,13.35193z M7.84918,9.71484H5.93616l0.51947-2.41632h1.84015c1.19379,0,1.47919,0.58698,1.47919,1.05151C9.7749,9.0072,9.34723,9.71484,7.84918,9.71484z M11.60327,17.14032H9.68481l0.52209-2.41815h1.84021c1.19287,0,1.47565,0.58881,1.47565,1.05334C13.52277,16.43445,13.09778,17.14032,11.60327,17.14032z M12.31091,13.35193h-1.91394l0.52124-2.41455h1.83929c1.19373,0,1.47644,0.58521,1.47644,1.04974C14.23389,12.64435,13.80902,13.35193,12.31091,13.35193z M12.97534,9.71484H11.0614l0.52216-2.41632h1.83655c1.19556,0,1.48004,0.58698,1.48004,1.05151C14.90021,9.0072,14.47339,9.71484,12.97534,9.71484z M16.72229,15.32001h-1.91577l0.52216-2.41809h1.83838c1.19373,0,1.47821,0.59052,1.47821,1.05328C18.64526,14.6123,18.22034,15.32001,16.72229,15.32001z M17.4353,11.87732h-1.91577l0.52222-2.41638h1.84009c1.19379,0,1.4765,0.58698,1.4765,1.05157C19.35834,11.16974,18.93335,11.87732,17.4353,11.87732z"
        ></path>
      </svg>
    </Wrapper>
  );
};
