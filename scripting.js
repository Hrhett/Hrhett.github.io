function exposeText(id) {
	var text = document.getElementById("side-text");
	text.innerHTML = getText(id);
}

function getText(id) {
	switch(id) {
		case "Distrakt":
			return "TigerDev<br>"
				+ "2020<br><br>"
				+ "Distrakt was the first project I worked on as a part of Auburn's game developement club, TigerDev. "
				+ "The idea, formulated by my buddy Holden and I, was to create a game where the player was constantly distracted. "
				+ "We thought that if we took some puzzle game mechanics, and some FPS mechanics, and slapped them together, that would do just the trick. "
				+ "We recruited two others from the club, and proceeded to start work on this 3D masterpiece. "
				+ "By the end of the semester, we were burnt out already, and the game didn't even have a first level. "
				+ "Nevertheless, it was a cool tech demo that showed off some cool technologies such as gravity manipulation, so we dropped the project and went on our merry way.";
			break;
		
		case "Factorama":
			return "Voltaic Studios<br>"
				+ "2020<br><br>"
				+ "description";
			break;
		
		case "VOLAXIA":
			return "Harper Rhett & Giuliano De Pian<br>"
				+ "2020<br><br>"
				+ "description";
			break;
		
		case "Bad Ass Santa":
			return "Harper Rhett, Giuliano De Pian, and Carlita<br>"
				+ "2019<br><br>"
				+ "description";
			break;
		
		case "Leap Theory":
			return "Harper Rhett & Jeremy Rhett"
				+ "2019<br><br>"
				+ "description";
			break;
		
		case "FIG":
			return "Harper Rhett<br>"
				+ "2020<br><br>"
				+ "description";
			break;
		
		case "Little Nightmare":
			return "Harper Rhett & Stranger Who's Name I Forgot"
				+ "2019<br><br>"
				+ "description";
			break;
			
		case "Slimer":
			return "Harper Rhett<br>"
				+ "2019<br><br>"
				+ "description";
			break;
			
		case "Finally Sprinting":
			return "Harper Rhett<br>"
				+ "2020<br><br>"
				+ "description";
			break;
		
		case "Vanilla++":
			return "Harper Rhett<br>"
				+ "2018<br><br>"
				+ "description";
			break;
		
		case "MCPE Ramps":
			return "Harper Rhett<br>"
			+ "2016<br><br>"
			+ "description";
			break;
		
		default:
			return "Empty";
			break;
	}
}