import React, { useState } from "react";
import "./TableUI.css";
import data from "../mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import Editable from "./Editable";

const TableUI = () => {
  const [contacts, setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    const newFormData = { ...addFormData };
    newFormData[e.target.name] = e.target.value;
    setAddFormData(newFormData);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newFormData = { ...editFormData };
    newFormData[e.target.name] = e.target.value;
    setEditFormData(newFormData);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    };

    setEditFormData(formValues);
  };

  const handleCancel = () => {
    setEditContactId(null);
  };

  const handleDelete = (contactID) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactID);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="table-constainer">
      <form onSubmit={handleEditSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <Editable
                    editFormData={editFormData}
                    handleEdit={handleEdit}
                    handleCancel={handleCancel}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDelete={handleDelete}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a contact</h2>
      <form onSubmit={handleAddSubmit}>
        <input
          type="text"
          required="required"
          name="fullName"
          placeholder="Enter a name ..."
          onChange={handleAdd}
        />
        <input
          type="text"
          required="required"
          name="address"
          placeholder="Enter an address ..."
          onChange={handleAdd}
        />
        <input
          type="number"
          required="required"
          name="phoneNumber"
          placeholder="Enter a phone number ..."
          onChange={handleAdd}
        />
        <input
          type="email"
          required="required"
          name="email"
          placeholder="Enter an email ..."
          onChange={handleAdd}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TableUI;