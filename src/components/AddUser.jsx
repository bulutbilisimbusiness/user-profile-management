import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Form, Button, Card } from "react-bootstrap";

const AddUser = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("user");
	const { addUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { name, email, role };
		addUser(user);
		navigate("/user");
	};

	return (
		<Card className="mb-4">
			<Card.Header>
				<h2>Add User</h2>
			</Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Role</Form.Label>
						<Form.Control
							as="select"
							value={role}
							onChange={(e) => setRole(e.target.value)}
							required
						>
							<option value="administrator">Administrator</option>
							<option value="user">User</option>
						</Form.Control>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
					<Link to="/user" className="btn btn-danger ms-2">
						Back
					</Link>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default AddUser;
