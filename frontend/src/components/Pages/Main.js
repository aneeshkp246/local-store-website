import styles from "./Main.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
        <div className="container">
		<div className="success">
			<h1>Login Successful</h1>
		</div>

        </div>
	);
};

export default Main;