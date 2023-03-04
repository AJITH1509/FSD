import { useState, useEffect } from "react";
import { API } from "../global.js";

function checkFunction(response) {
  if (response.status === 401) {
    throw Error("unauthorized");
  } else {
    return response.json();
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "/login";
}

export const PhoneList = () => {
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    fetch(`${API}/mobiles`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => checkFunction(response))
      .then((data) => setMobile(data))
      .catch((err) => logout());
  }, []);
  return (
    <div className="phone-list-container">
      {mobile.map((data) => (
        <Phone key={data._id} data={data} />
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
