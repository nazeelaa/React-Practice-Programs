import React from "react";

export default function BindusingFunc() {
  function greetUser(name) {
            console.log(`Hi there, ${name}`);
  }

  return (
    <div>{greetUser}
      <button onClick={() => greetUser("sonuuu")}>Click me</button>
    </div>
  );
}