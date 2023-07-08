import "./styles.css";
import { useEffect, useState } from "react";
import UserData from "./UserData.js";

const API = "https://api.gyanibooks.com/library/get_dummy_notes/";

const ReactApp = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <div className="App">
        <UserData users={users} />
      </div>
    </>
  );
};

export default ReactApp;