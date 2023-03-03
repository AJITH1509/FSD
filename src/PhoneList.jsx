import { useState, useEffect } from "react";
import { API } from "../global.js";

export const PhoneList = () => {
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    fetch(`${API}/mobiles`)
      .then((response) => response.json())
      .then((data) => setMobile(data));
  }, []);
  return (
    <div className="phone-list-container">
      {mobile.map((data) => (
        <Phone key={data.img} data={data} />
      ))}
    </div>
  );
};
const Phone = ({ data }) => {
  return (
    <div className="phone-container">
      <img className="phone-picture" src={data.img} />
      <h1 className="phone-name">{data.model}</h1>
      <h3 className="phone-company">{data.company}</h3>
    </div>
  );
};
