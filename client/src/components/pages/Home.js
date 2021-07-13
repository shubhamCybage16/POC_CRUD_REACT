import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";

import SortIcon from "@material-ui/icons/ArrowDownward";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { useState } from "react";

const columns = (deleteUser, history) => [
  {
    name: "ID",
    selector: "id",
    sortable: true,
    maxWidth: "20vw",
    allowOverflow: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
    maxWidth: "20vw",
    allowOverflow: true,
  },
  {
    name: "Username",
    selector: "username",
    sortable: true,
    maxWidth: "20vw",
    allowOverflow: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
    maxWidth: "20vw",
    allowOverflow: true,
  },
  {
    maxWidth: "20vw",
    wrap: true,
    cell: (row) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push(`/users/edit/${row.id}`);
        }}
      >
        Edit
      </Button>
    ),
    button: true,
  },
  {
    maxWidth: "20vw",
    wrap: true,
    cell: (row) => (
      <Button
        onClick={() => deleteUser(row.id)}
        variant="contained"
        color="primary"
      >
        delete
      </Button>
    ),
    button: true,
  },
];

/*
const deleteUser = (id) => {
  console.log(id);
};*/

function Home() {
  const [users, setUser] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
    // setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    console.log(id);
    loadUsers();
  };
  return (
    <div className="App">
      <Card>
        <DataTable
          highlightOnHover
          keyField
          title="Details"
          columns={columns(deleteUser, history)}
          data={users}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
        />
      </Card>
    </div>
  );
}

export default Home;
