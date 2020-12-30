function exposeText(id) {
	var text = document.getElementById("description");
	text.innerHTML = getText(id);
}

function getText(id) {
	switch(id) {
		case "Distrakt":
			return "Distrakt was the first project I worked on as a part of Auburn's game developement club, TigerDev."
				+ "The idea, formulated by my buddy Holden and I, was to create a game where the player was constantly distracted."
				+ "We thought that if we took some puzzle game mechanics, and some FPS mechanics, and slapped them together, that would do just the trick."
				+ "We recruited two others from the club, and proceeded to start work on this 3D masterpiece."
				+ "By the end of the semester, we were burnt out already, and the game didn't even have a first level."
				+ "Nevertheless, it was a cool tech demo that showed off some cool technologies such as gravity manipulation, so we dropped the project and went on our merry way.";
			break;
		
		case "Factorama":
			return "Factorama";
			break;
		
		case "VOLAXIA":
			return "VOLAXIA";
			break;
		
		case "Bad Ass Santa":
			return "Bad Ass Santa";
			break;
		
		case "FIG":
			return "FIG";
			break;
		
		case "Little Nightmare":
			return "Little Nightmare";
			break;
			
		case "Slimer":
			return "Slimer";
			break;
			
		case "Finally Sprinting":
			return "Finally Sprinting";
			break;
		
		default:
			return "Empty";
			break;
	}
}