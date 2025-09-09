import { Container, Logo, LogoutButton } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeSwitcher } from "../index";

function Header() {
	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();

	const navItems = [
		{
			name: "Home",
			slug: "/",
			active: true,
		},
		{
			name: "Login",
			slug: "/login",
			active: !authStatus,
		},
		{
			name: "Signup",
			slug: "/signup",
			active: !authStatus,
		},
		{
			name: "All Posts",
			slug: "/all-posts",
			active: authStatus,
		},
		{
			name: "Add Post",
			slug: "/add-post",
			active: authStatus,
		},
	];

	return (
		<header className="py-3 shadow" style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
			<Container>
				<nav className="flex items-center">
					<div className="mr-4">
						<Link to="/">
							<Logo width="70px" />
						</Link>
					</div>
					<ul className="flex items-center ml-auto gap-1">
						{navItems.map((item) =>
							item.active ? (
								<li key={item.name}>
									<button
										onClick={() => navigate(item.slug)}
										className="inline-bock px-4 py-2 rounded-full"
										style={{
											backgroundColor: "transparent",
											color: "var(--color-text)",
										}}
										onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent-weak)")}
										onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
									>
										{item.name}
									</button>
								</li>
							) : null
						)}
						{authStatus && (
							<li>
								<LogoutButton />
							</li>
						)}
						<li>
							<ThemeSwitcher />
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
