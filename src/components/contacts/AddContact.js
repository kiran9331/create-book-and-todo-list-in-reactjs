import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { Link, useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const craeteContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(addContact(new_contact));
    history.push("/");
  };

  const enabled =
    name.length > 0 &&
    phone.length > 0 &&
    email.length > 0;

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  maxLength="10"
                  minLength="10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your E-mail Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Link to="/" className="btn btn-light border mr-2">
            Cancel
          </Link>
          <button className="btn btn-primary" type="submit" disabled={!enabled}>
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
