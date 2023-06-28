import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ViewUserPage() {
    const { userId } = useParams();

    const [user, setUser] = useState(undefined);

    async function fetchUser() {
        const response = await axios.get(`http://localhost:8000/users/${userId}`);
        setUser(response.data);
    }

    useEffect(() => {
        fetchUser();
    }, [userId]);

    if (user === undefined) {
        return <div>Loading.......</div>;
    }

    return (
        <Card>
            <Table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{userId}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Premium User</td>
                        <td>{user.premiumMember ? "Yes" : "False"}</td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
}

export default ViewUserPage;
