import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import ListUsersPage from "./components/ListUsersPage";
import AddUserPage from "./components/AddUserPage";
import EditUserPage from "./components/EditUserPage";
import ViewUserPage from "./components/ViewUserPage";


function App() {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">API APPLICATION</Navbar.Brand>
                        <Nav className="float-right">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/add">Add New</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container className="pt-5">
                  <Routes>
                    <Route path="/" element={<ListUsersPage/>}/>
                    <Route path="/add" element={<AddUserPage/>}/>
                    <Route path="/users/:userId/edit" element={<EditUserPage/>}/>
                    <Route path="/users/:userId" element={<ViewUserPage/>}/>
                  </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;
