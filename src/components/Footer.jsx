import Button from "./Button";
import X from "./assets/X.svg";
import Insta from "./assets/instagram.svg";
import Facebook from "./assets/facebook.svg";
import Github from "./assets/github.svg";

export const Footer = () => {
	return (
		<footer>
			<Button className="foot-btn" href="" logo_name="X" img={X} />
			<Button
				className="foot-btn"
				href=""
				logo_name="Facebook"
				img={Facebook}
			/>
			<Button
				className="foot-btn"
				href=""
				logo_name="Instagram"
				img={Insta}
			/>
			<Button
				className="foot-btn"
				href=""
				logo_name="Github"
				img={Github}
			/>
		</footer>
	);
};
