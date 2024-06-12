import axios from "axios";

// Axios instance'ı oluşturuyoruz, baseURL'i JSON Server'a göre ayarlıyoruz.
const api = axios.create({
	baseURL: "http://localhost:3000", // JSON Server base URL
	headers: {
		"Content-Type": "application/json",
	},
});

// Kullanıcı listesini getirmek için GET isteği
export const fetchUsers = async () => {
	try {
		const response = await api.get("/users");
		return response.data;
	} catch (error) {
		console.error("Error fetching users:", error);
		throw error;
	}
};

// Belirli bir kullanıcıyı getirmek için GET isteği
export const fetchUserById = async (id) => {
	try {
		const response = await api.get(`/users/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching user with id ${id}:`, error);
		throw error;
	}
};

// Yeni bir kullanıcı oluşturmak için POST isteği
export const createUser = async (user) => {
	try {
		const response = await api.post("/users", user);
		return response.data;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

// Mevcut bir kullanıcıyı güncellemek için PUT isteği
export const updateUser = async (id, user) => {
	try {
		const response = await api.put(`/users/${id}`, user);
		return response.data;
	} catch (error) {
		console.error(`Error updating user with id ${id}:`, error);
		throw error;
	}
};

// Belirli bir kullanıcıyı silmek için DELETE isteği
export const deleteUser = async (id) => {
	try {
		const response = await api.delete(`/users/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error deleting user with id ${id}:`, error);
		throw error;
	}
};
