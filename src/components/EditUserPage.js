import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditUserPage() {
    const { userId } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [premiumMember, setPremiumMember] = useState(false);

    async function fetchUser() {
        const response = await axios.get(`http://localhost:8000/users/${userId}`);
        // setUser(response.data);
        const user = response.data;
        setEmail(user.email)
        setAge(user.age);
        setName(user.name);
        setPremiumMember(user.premiumMember);
    }

    useEffect(() => {
        fetchUser();
    }, [userId]);

    async function updateUser(event) {
        event.preventDefault();
        await axios.patch("http://localhost:8000/users/"+userId,{
            email:email,
        name:name,
       age:parseInt(age),
       premiumMember:premiumMember
               });
              
    }

    return (
        <div className=" row justify-content-center">
            <div className="col-md-4">
                <Card className="p-4">
                    <Form onSubmit={(event) => updateUser(event)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={name}
                                required
                                onChange={(event) => setName(event.target.value)}
                                type="text"
                                placeholder="Name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={email}
                                required
                                onChange={(event) => setEmail(event.target.value)}
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                value={age}
                                required
                                onChange={(event) => setAge(event.target.value)}
                                type="number"
                                placeholder="Age"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                checked={premiumMember}
                                onChange={(event) => setPremiumMember(!premiumMember)}
                                type="checkbox"
                                label="Premium User"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default EditUserPage;
