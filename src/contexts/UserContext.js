import React, { createContext, useState, useEffect } from "react";
import {
	fetchUsers,
	createUser,
	updateUser,
	deleteUser,
} from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadUsers = async () => {
			try {
				const data = await fetchUsers();
				setUsers(data);
				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		};
		loadUsers();
	}, []);

	const addUser = async (user) => {
		try {
			const newUser = await createUser(user);
			setUsers([...users, newUser]);
		} catch (err) {
			setError(err);
		}
	};

	const updateUserById = async (id, user) => {
		try {
			const updatedUser = await updateUser(id, user);
			setUsers(users.map((u) => (u.id === id ? updatedUser : u)));
		} catch (err) {
			setError(err);
		}
	};

	const deleteUserById = async (id) => {
		try {
			await deleteUser(id);
			setUsers(users.filter((u) => u.id !== id));
		} catch (err) {
			setError(err);
		}
	};

	return (
		<UserContext.Provider
			value={{ users, loading, error, addUser, updateUserById, deleteUserById }}
		>
			{children}
		</UserContext.Provider>
	);
};
