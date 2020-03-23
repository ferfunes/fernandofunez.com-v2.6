import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import email_template from "../../img/email_template.jpg";
import fernando_funez_com from "../../img/fernando_funez_com.jpg";
import life_in_roatan from "../../img/life_in_roatan.jpg";
import lumina_logo from "../../img/lumina_logo.jpg";
import pig_dice_game from "../../img/pig_dice_game.png";
import wander_tracker_logo from "../../img/wander_tracker_logo.jpg";

export const Portfolio = () => {
	return (
		<div className=" portfolio-wrapper">
			<div className="portfolio-title text-center">
				<h1>PROJECTS</h1>
			</div>
			<div className="back-button  text-center ">
				<Link style={{ textDecoration: "none" }} to="/">
					<span className="portfolio-back">
						<i className="fas fa-chevron-left" />
					</span>
				</Link>
			</div>
			<div className="portfolio-cont container ">
				<div className="row">
					<div className=" col-sm-12 col-m-6 col-lg-4 mb-2">
						<div className="card card-flip ">
							<div className="card-front d-flex bg-white align-items-center">
								<img
									className="portfolio-image img-fluid "
									alt="travel app"
									src={wander_tracker_logo}
								/>
							</div>
							<div className="card-back bg-white">
								<div className="card-body">
									<h3 className="card-title">
										Wander Tracker
									</h3>
									<p className="card-text">
										Complete online, mobile-first-minded
										toolkit for travelers to plan trips,
										keep itineraries and contacts, save
										memories, upload important documents,
										map-track their trips, etc.
									</p>
									<a
										href="https://finalproject-rjxnbzyub.now.sh/"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary mr-2 ">
										Go to Project
									</a>
									<a
										href="https://github.com/ferfunes/Wandertracker_front-end"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary">
										Check the Code
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-m-6 col-lg-4 mb-2">
						<div className="card card-flip ">
							<div className="card-front  ">
								<img
									className="portfolio-image-lumina img-fluid"
									alt="Graphic Designer Portfolio"
									src={lumina_logo}
								/>
							</div>
							<div className="card-back bg-white">
								<div className="card-body">
									<h3 className="card-title">
										Lumina Si Umbra
									</h3>
									<p className="card-text">
										Graphic Designer portfolio. Minimalistic
										and elegant Graphic Designer portfolio,
										showcasing the designers work.
									</p>
									<a
										href="https://practical-lumiere-f205fe.netlify.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary mr-2">
										Go to Project
									</a>
									<a
										href="https://github.com/ferfunes/Graphic-Designer-Portfolio"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary ">
										Check the Code
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-m-6 col-lg-4 mb-2">
						<div className="card card-flip ">
							<div className="card-front ">
								<img
									className="portfolio-image-emailtemp img-fluid"
									alt="HTML Email"
									src={email_template}
								/>
							</div>
							<div className="card-back bg-white">
								<div className="card-body">
									<h3 className="card-title">
										HTML Email using Tables
									</h3>
									<p className="card-text">
										There are several ways to go about
										building an email, but the most
										established approach is with tables.
									</p>
									<a
										href="https://elated-villani-09ad56.netlify.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary mr-2">
										Go to Project
									</a>
									<a
										href="https://elated-villani-09ad56.netlify.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary ">
										Check the Code
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm-12 col-m-6 col-lg-4 mb-2">
						<div className="card card-flip ">
							<div className="card-front bg-white d-flex align-items-center">
								<img
									className="portfolio-image-ff img-fluid"
									alt="fernando funez website"
									src={fernando_funez_com}
								/>
							</div>
							<div className="card-back bg-white">
								<div className="card-body">
									<h3 className="card-title">
										Fernandofunez.com
									</h3>
									<p className="card-text">
										My personal website showing my skills,
										portfolio with projects, resume etc.
										Built with a simple minimalistic style
										using Reactjs, bootstrap, css and some
										npm libraries.
									</p>

									<a
										href="https://github.com/ferfunes/fernandofunez.com"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary">
										Check the Code
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-m-6 col-lg-4 mb-2">
						<div className="card card-flip ">
							<div className="card-front ">
								<img
									className="img-fluid"
									alt="pig game using javascript"
									src={pig_dice_game}
								/>
							</div>
							<div className="card-back bg-white">
								<div className="card-body">
									<h3 className="card-title">
										Pig Dice Game
									</h3>
									<p className="card-text">
										Dice rolling game, making use of dom and
										javascript to create an interactive
										game. Modified to play with two dices
										instead of one.
									</p>
									<a
										href="https://distracted-sinoussi-9d2d57.netlify.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary mr-2">
										Go to Project
									</a>
									<a
										href="https://github.com/ferfunes/Pig-Game---JavaScript--DOM"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary ">
										Check the Code
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-m-6 col-lg-4 mb-2">
						<div className="card card-flip ">
							<div className="card-front bg-white">
								<img
									className="portfolio-image-liferoa img-fluid"
									alt="lifeinroatan.com"
									src={life_in_roatan}
								/>
							</div>
							<div className="card-back bg-white mb-5">
								<div className="card-body">
									<h3 className="card-title">
										Lifeinroatan.com
									</h3>
									<p className="card-text">
										Wordpress based real state and tourism
										website. Currently under development.
									</p>
									<a
										href="https://lifeinroatan.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-secondary mr-2">
										Go to Project
									</a>
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
						</div>
					</div>
				</div>

				<div className="footer-portfolio container-fluid" />
			</div>
			<Footer />
		</div>
	);
};
