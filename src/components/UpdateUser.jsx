import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Form, Button, Card } from "react-bootstrap";

const UpdateUser = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { users, updateUserById } = useContext(UserContext);
	const [user, setUser] = useState({
		name: "",
		email: "",
		role: "",
	});

	useEffect(() => {
		const foundUser = users.find((u) => u.id.toString() === id);
		if (foundUser) {
			setUser(foundUser);
		}
	}, [id, users]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateUserById(id, user);
		navigate("/user");
	};

	return (
		<Card className="mb-4">
			<Card.Header>
				<h2>Edit User</h2>
			</Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							value={user.name}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							name="email"
							value={user.email}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Role</Form.Label>
						<Form.Control
							type="text"
							name="role"
							value={user.role}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Update
					</Button>
					<Link to="/user" className="btn btn-danger ms-2">
						Back
					</Link>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default UpdateUser;
