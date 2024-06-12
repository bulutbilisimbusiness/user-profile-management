import React from "react";

const Home = () => {
	return (
		<div style={styles.container}>
			<h1>Welcome to User Profile Management System</h1>
			<p>
				This system allows you to manage user profiles by adding, updating, and
				deleting users. Use the navigation links above to get started.
			</p>
		</div>
	);
};

const styles = {
	container: {
		padding: "20px",
		textAlign: "center",
	},
};

export default Home;
