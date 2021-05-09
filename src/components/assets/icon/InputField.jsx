import React, { useState } from "react";

export const InputField = ({ name, size, area }) => {
  const [value, setValue] = useState(name);
  const [textarea, setTextArea] = useState(name);
  return (
    <label htmlFor="name">
      {area ? (
        <textarea
          name={name}
          id="name"
          value={textarea}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
      ) : (
        <input
          type="text"
          value={value}
          placeholder={name}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      )}
    </label>
  );
};
