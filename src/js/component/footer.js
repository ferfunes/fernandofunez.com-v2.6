import React from "react";

export const Footer = () => (
	<footer className="footer-wrapper container-fluid footer mt-5">
		<div className="footer-cont2 row justify-content-center">
			<div className="foo  text-center text-secondary ">
				<a
					href="https://github.com/ferfunes"
					target="_blank"
					rel="noopener noreferrer">
					<i className="icon fab fa-github-square mr-3" />
				</a>
				<a
					href="https://www.linkedin.com/in/fernando-funez-b98597125/"
					target="_blank"
					rel="noopener noreferrer">
					<i className="icon fab fa-linkedin mr-3" />
				</a>

				<div className="footer-copyright mt-3">
					© 2020 Copyright:
					<a
						className="copyright-text"
						href="https://mdbootstrap.com/">
						{" "}
						fernandofunez.com
					</a>
				</div>
			</div>
		</div>
	</footer>
);
