import React, { useEffect, useState } from "react";
import data from "../Data/data.json";
import CloseIcon from "@mui/icons-material/Close";

import "./Contact.css";
function Contact() {
  const [value, setValue] = useState();
  const [modal, setModal] = useState(false);
  const [num, setNum] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filteredModalHandle = (index) => {
    console.log(index);
  };

  const modalHandle = (idValue) => {
    setNum(idValue);
    console.log(idValue);
    setModal(true);
  };

  const filteredData = data.filter(({ user_name }) =>
    user_name.toLowerCase().includes(value)
  );

  const person_details = data.filter(({ id }) => id === num);

  console.log(person_details);
  return (
    <div className="contact_bg">
      <div className="contact_list_container">
        <div className="contact_list_bg">
          <div className="contact_input_container">
            <input type="search" placeholder="search" onChange={handleChange} />
          </div>
          {filteredData.length > 0
            ? filteredData.map((user_data) => (
                <div
                  className="contact_data_container"
                  key={user_data.id}
                  onClick={() => modalHandle(user_data.id)}
                >
                  <h3>{user_data.user_name}</h3>
                </div>
              ))
            : data.map((value, index) => (
                <div
                  className="contact_data_container"
                  key={value.id}
                  onClick={() => modalHandle(value.id)}
                >
                  <h3>{value.user_name}</h3>
                </div>
              ))}
        </div>
        {modal && person_details&& person_details.map((person)=>(
          <div className="modal">
            <div className="modal-data">
              <h3>{person.user_name}</h3>
              <p>{person.phone}</p>
            </div>
            <div onClick={() => setModal(false)} className="modal-icon">
              <CloseIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
