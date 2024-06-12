import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProfileList from "./components/ProfileList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import ProfileDetail from "./components/ProfileDetail";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<UserProvider>
			<div className="App container">
				<BrowserRouter>
					<Header />
					<div className="content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/user" element={<ProfileList />} />
							<Route path="/user/add" element={<AddUser />} />
							<Route path="/user/edit/:id" element={<UpdateUser />} />
							<Route path="/user/detail/:id" element={<ProfileDetail />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
				<ToastContainer className="toast-position" position="bottom-right" />
			</div>
		</UserProvider>
	);
}

export default App;
