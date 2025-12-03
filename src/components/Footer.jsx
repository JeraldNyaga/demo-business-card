import Button from "./Button";
import Github from "./assets/github.svg";

export const Footer = () => {
	return (
		<footer>
			<p>© 2025 All rigths reserved.</p>
			<Button
				className="foot-btn"
				href="https://github.com/JeraldNyaga"
				logo_name="Github"
				img={Github}
			/>
		</footer>
	);
};
