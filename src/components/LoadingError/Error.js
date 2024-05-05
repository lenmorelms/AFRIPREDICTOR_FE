import React from "react";

const Message = ({ variant, children }) => {
  return (
  <div className={`error alert ${variant}`}>
    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
    {children}
  </div>
  );
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;