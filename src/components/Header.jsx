import Email from "./assets/email.svg";
import LinkedIn from "./assets/linkedIn.svg";
import MyImage from "./assets/me.png";
import Button from "./Button"

export const Header = () => {
	return (
		<>
			<header className="header">
				<img
					className="user"
					src={MyImage}
					alt="An image of an handsome man"
				/>
				<h1>Jerald Nyaga</h1>
				<h3>Frontend Developer</h3>
				<small>jeraldnyaga.io</small>
				<div className="socials">
					<Button
						className="btn btn-email"
						img={Email}
						logo_name="Email"
					>
						<span>Email</span>
					</Button>
					<Button
						className="btn btn-linkedIn"
						img={LinkedIn}
						logo_name="LinkedIn"
					>
						<span>LinkedIn</span>
					</Button>
				</div>
			</header>
		</>
	);
};
