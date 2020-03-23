import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";

export const Contact = () => {
	return (
		<div className="contact-full-wrapper">
			<div className=" contact-wrapper">
				<div className="contact-title text-center">
					<h1>GET IN TOUCH</h1>
				</div>
				<div className="back-button  text-center ">
					<Link style={{ textDecoration: "none" }} to="/">
						<span className="contact-back">
							<i className="fas fa-chevron-left" />
						</span>
					</Link>
				</div>
				<div className="contact-info text-center mt-5">
					<h2>Fernando Funez</h2>
					<h3>+1 (786)718.8966</h3>
					<h3>ferfunezdev@gmail.com</h3>
				</div>

				<div className="contact-cont container ">
					<div className="footer-portfolio container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2 m-auto">
									<div className="contact-form">
										<form
											action="mailto:fumesdj@yahoo.com"
											method="post"
											encType="text/plain">
											<div className="row">
												<div className="col-sm-6">
													<div className="form-group">
														<label htmlFor="inputName">
															Name
														</label>
														<input
															type="text"
															name="name"
															className="form-control"
															required
														/>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label htmlFor="inputEmail">
															Email
														</label>
														<input
															type="email"
															name="mail"
															className="form-control"
															required
														/>
													</div>
												</div>
											</div>
											<div className="form-group">
												<label htmlFor="inputSubject">
													Subject
												</label>
												<input
													type="text"
													name="subject"
													className="form-control"
													required
												/>
											</div>
											<div className="form-group">
												<label htmlFor="inputMessage">
													Comment
												</label>
												<textarea
													type="text"
													name="comment"
													className="form-control comment-input"
													required
												/>
											</div>
											<div className=" row d-flex justify-content-center">
												<div className="text-center">
													<button
														type="submit"
														className=" btn btn-primary">
														<i className="fa fa-paper-plane" />{" "}
														Send
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Footer />
			</div>
		</div>
	);
};
