import React from "react";

const Editable = ({ editFormData, handleEdit, handleCancel }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name ..."
          value={editFormData.fullName}
          onChange={handleEdit}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address ..."
          value={editFormData.address}
          onChange={handleEdit}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number ..."
          value={editFormData.phoneNumber}
          onChange={handleEdit}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email ..."
          value={editFormData.email}
          onChange={handleEdit}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Editable;