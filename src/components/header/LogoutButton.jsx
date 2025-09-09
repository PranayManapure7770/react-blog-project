import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutButton() {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		authService.logout().then(() => {
			dispatch(logout());
		});
	};
	return (
		<button
			className="inline-bock px-4 py-2 rounded-full"
			style={{ backgroundColor: "var(--color-accent)", color: "white" }}
			onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
			onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
			onClick={logoutHandler}
		>
			Logout
		</button>
	);
}

export default LogoutButton;
