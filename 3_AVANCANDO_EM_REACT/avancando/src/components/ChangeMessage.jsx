import React from "react";

const ChangeMessage = ({ handleMessage }) => {
  const messages = ["oi", "olá"];
  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
    </div>
  );
};

export default ChangeMessage;
