import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
	return (
		<div className="jumbotron">
			<h1>Store Mehdi Said</h1>
			<div className="alert alert-success">
				<strong>Store </strong>

				Mehdi répond à tous vos besoins en matière de revêtements de fenêtre, et ce,
				à chaque étape – que ce soit en vous aidant à choisir les stores qu’il vous faut,
				pour la prise des mesures et l’installation ou en répondant à toutes vos questions concernant nos produits.
				N’hésitez pas à nous contacter par courriel,
				par clavardage ou par téléphone.

			</div>

			<div className="card">
				<div className="row card-body">
					<div className="col-4">
						<img src="img\logo.png" className="img-thumbnail" with  width="304" height="236"/>
					</div>
					<div className="col-4">
						<h4> Contactez-nous</h4>
						<ul>
							<li>
								Heures normales : du lundi au vendredi, de 8h00 à 20h00, heure de l’Est
							</li>
							<li>
								Coordonnées : 210-5490 Boulevard Thimens  Montréal, QC, H4R 2K9
							</li>
							<li>
								Téléphone: 888-685-1735
							</li>
							<li>
								<img src="img\icon_email.gif" className="img-thumbnail" with  width="50" height="50"/> : mehdi.said@gmail.com
							</li>
						</ul>



					</div>
				</div>
			</div>
			<div className="card mt-lg-3">
				<div className="card-footer text-center text-bg-info">Copyright 2023 by Mehdi Said. All Rights Reserved.</div>
			</div>
		</div>





	);
}
