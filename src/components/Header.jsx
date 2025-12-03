import Email from "./assets/email.svg";
import LinkedIn from "./assets/linkedIn.svg";
import MyImage from "./assets/me.png";

function Button({ img, logo_name, href, className = "" }) {
	return (
		<a className={`btn ${className}`} href={href}>
			<img
				src={img}
				alt={`This is a logo in a button for ${logo_name}`}
			/>
			<span>{logo_name}</span>
		</a>
	);
}
export const Header = () => {
	return (
		<>
			<header className="header">
				<img className="user" src={MyImage} alt="An image of an handsome man" />
				<h1>Jerald Nyaga</h1>
				<h3>Frontend Developer</h3>
				<small>jeraldnyaga.io</small>
				<div className="socials">
					<Button
						className="btn-email"
						img={Email}
						logo_name="Email"
					/>
					<Button
						className="btn-linkedIn"
						img={LinkedIn}
						logo_name="LinkedIn"
					/>
				</div>
			</header>
		</>
	);
};
