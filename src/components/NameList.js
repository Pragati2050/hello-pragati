import React from "react";

function NameList() {
  const person = [
    {
      id: 1,
      name: "mahak",
      age: 20,
      skills: "React",
    },
    {
      id: 2,
      name: "priya",
      age: 25,
      skills: "Angular",
    },
    {
      id: 3,
      name: "sush",
      age: 22,
      skills: "Yue",
    },
  ];
  const personList = person.map((person) => (
    <h2>
      I am {person.name}, I am {person.age} years old, I know {person.skill}
    </h2>
  ));
  return <div>{personList}</div>;
}

export default NameList;
