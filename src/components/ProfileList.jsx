import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Table, Button, Card, Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const ProfileList = () => {
	const { users, loading, error, deleteUserById } = useContext(UserContext);
	const currentUserRole = "Administrator"; // Mevcut oturum açmış kullanıcıya göre dinamik olarak ayarlanmalıdır

	const handleDelete = (id) => {
		if (window.confirm("Do you want to remove?")) {
			deleteUserById(id);
			toast.success("User removed successfully.");
		}
	};

	if (loading) {
		return (
			<Container>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<h2>Loading...</h2>
					</Col>
				</Row>
			</Container>
		);
	}

	if (error) {
		return (
			<Container>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<h2>{error}</h2>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<Container className="mt-4 mb-5">
			{" "}
			{/* mb-5 class is added to create space at the bottom */}
			<Card>
				<Card.Header>
					<Row className="justify-content-between">
						<Col md="auto">
							<Link to="/user/add" className="btn btn-success">
								Add User [+]
							</Link>
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Table striped bordered hover responsive>
						<thead className="bg-dark text-white">
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{users.map((item) => (
								<tr key={item.id}>
									<td data-label="Name">{item.name}</td>
									<td data-label="Email">{item.email}</td>
									<td data-label="Role">{item.role}</td>
									<td data-label="Action">
										<Link
											to={`/user/detail/${item.id}`}
											className="btn btn-info btn-sm me-2"
										>
											Detail
										</Link>
										<Link
											to={`/user/edit/${item.id}`}
											className="btn btn-primary btn-sm me-2"
										>
											Edit
										</Link>
										{currentUserRole === "Administrator" && (
											<Button
												variant="danger"
												size="sm"
												onClick={() => handleDelete(item.id)}
											>
												Delete
											</Button>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default ProfileList;
