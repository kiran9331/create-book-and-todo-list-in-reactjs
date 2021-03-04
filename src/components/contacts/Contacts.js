import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contactR.contacts);
  return (
    <table className="table shadow">
      <thead className="bg-light text-black">
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.length > 0
            ?
            contacts.map((contact) => (
              <Contact contact={contact} key={contact.id} />
            ))
            :
            <tr><td colSpan="4" className="text-center">No Record Found in <b>Contact Book</b></td></tr>
        }
      </tbody>
    </table>
  );
};

export default Contacts;
