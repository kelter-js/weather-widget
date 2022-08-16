import React from "react";
import getIcon from "../../Utils/iconProvider";
import { CardContainer } from "./WeatherStyles";

const WeatherCard = ({ summary, date, icon }) => {
  return (
    <CardContainer>
      <img height={100} width={100} alt='weather image' aria-hidden={true} src={getIcon(icon)}/>
      <p>
        {date}
      </p>
      <p>
        {summary}
      </p>
    </CardContainer>
  );
};

export default WeatherCard;