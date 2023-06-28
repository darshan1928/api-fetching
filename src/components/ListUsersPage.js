import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function ListUsersPage() {
    const [data, setData] = useState([]);

    async function fetchUsers() {
        const response = await axios.get("http://localhost:8000/users");
        setData(response.data);
    }

    console.log(data);
    useEffect(() => {
        fetchUsers();
    }, []);


     function deleteUser(user){
        axios.delete("http://localhost:8000/users/"+user.id).then(()=>
        fetchUsers())
     }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                            <Link to={"/users/" + user.id}>
                                <Button variant="primary" size="sm">
                                    View
                                </Button>
                            </Link>
                            <Link to={`/users/${user.id}/edit`}>
                                <Button variant="info" size="sm">
                                    Edit
                                </Button>
                            </Link>

                            <Button onClick={()=>deleteUser(user)} variant="danger" size="sm">
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ListUsersPage;
