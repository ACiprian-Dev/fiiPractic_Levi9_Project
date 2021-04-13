import React from "react";

const CustomerInput = ({ name, onChangeFunc, value, className, type }) => (
  <div className={className}>
    <input onChange={onChangeFunc} value={value} name={name} type={type} />
  </div>
);

export default CustomerInput;