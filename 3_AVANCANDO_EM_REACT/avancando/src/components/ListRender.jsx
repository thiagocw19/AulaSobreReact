import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Thiago", "Matheus", "Juan", "Matheus"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Thiago", age: 21 },
    { id: 2, name: "Pedro", age: 31 },
    { id: 3, name: "João", age: 41 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      {/* render sem key */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6- previous state */}
      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
