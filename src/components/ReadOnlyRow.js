import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDelete }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(e) => {
            handleEditClick(e, contact);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={(e) => {
            handleDelete(contact.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;