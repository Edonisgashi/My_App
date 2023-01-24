import React, { createContext, useState, useEffect } from "react";
import API from "../API_URL/API";
export const DataContext = createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    await fetch(`${API}/books.json`)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        setData(retrDt);
      })
      .catch((err) => console.log(err));
  };
  const fetchUsers = async () => {
    await fetch(`${API}/users.json`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
    fetchUsers();
    console.log(users);
  }, []);

  return (
    <DataContext.Provider value={{ data, users }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
