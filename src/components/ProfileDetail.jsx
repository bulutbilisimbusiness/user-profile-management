import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

const ProfileDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { users, updateUserById, deleteUserById } = useContext(UserContext);
	const [user, setUser] = useState({
		name: "",
		email: "",
		role: "",
	});
	const [error, setError] = useState(null);

	const currentUserRole = "Administrator";

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

	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			await updateUserById(id, user);
			navigate("/user");
		} catch (err) {
			setError(err);
		}
	};

	const handleDelete = async () => {
		try {
			await deleteUserById(id);
			navigate("/user");
		} catch (err) {
			setError(err);
		}
	};

	return (
		<Container>
			<Row className="justify-content-center">
				<Col xs={12} md={8} lg={6}>
					<Card className="mb-4">
						<Card.Header>
							<h2>Profile Detail</h2>
						</Card.Header>
						<Card.Body>
							{error && <p>Error: {error.message}</p>}
							<Form onSubmit={handleUpdate}>
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
								{currentUserRole === "Administrator" && (
									<Button
										variant="danger"
										onClick={handleDelete}
										className="ms-2"
									>
										Delete
									</Button>
								)}
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ProfileDetail;
