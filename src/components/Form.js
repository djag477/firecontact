import React from "react";

export const Form = (props) => {
  const { userInfo, setUserInfo } = props;

  return (
    <div>
      <form>
        <div>
          <label forHtml="name">Name:</label>
          <input type="text" placeholder="Type your name here" />
        </div>
        <div>
          <label>Phone:</label>
          <input type="number" placeholder="Type your phone number here"/>
        </div>
        <div>
            <label>Type of contact</label>
            <select>
                <option>Home</option>
                <option>Mobile</option>
                <option>Office</option>
            </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
