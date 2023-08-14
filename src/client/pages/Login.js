import React from "react";

const Login = () => {
  const submit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={submit}>
      <input />
      <input type="password" />
      <input type="submit" value="送出" />
    </form>
  );
};

export default {
  component: Login,
};
