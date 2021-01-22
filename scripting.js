// Exposes the text and asks for id
function exposeText(id) {
	var text = document.getElementById("description");
	text.innerHTML = getText(id);
}

// Gets the text for corresponding id, I need to change this to work with json.
function getText(id) {
	switch(id) {
		case "Tentatron":
			return "Harper Rhett & Jeremy Rhett<br>"
				+ "2021<br><br>"
				+ "I was starting to feel withdraw from C# mid-way through Winter break, so I decided to participate in a game jam. "
				+ "It was fun but I made the major mistake of winging everything, and it is by far the creation I am least proud of... "
				+ "I should have gone in with a team and a game plan."
				+ "Oh well.";

		case "Quote Bot":
			return "Harper Rhett<br>"
				+ "2020<br><br>"
				+ "Over Winter break I wanted to learn some Python, and I figured a cool way to do that would be to create a Reddit bot."
				+ "Naturally, I created a bot that finished quotes from famous pop culture."
				+ "The bot is no longer in service.";

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
				+ "Factorama was my first commercial production, and quite a fantastic one at that."
				+ "I spent the entire Summer after my senior year of high school programming this factory management game."
				+ "I was so dedicated, it was about as time consuming as a full time job."
				+ "I even hired up Giuliano De Pian, someone I had worked with before, to do the music."
				+ "Several months in, and I was able to release it to the Android Play Store."
				+ "I made about negative eighty bucks.";
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
			+ "During my freshman year of high school, I was pretty into Minecraft, and decided I wanted to make a mod."
			+ "I targeted Minecraft Pocket Edition because the developers were coming out with a new addon system I wanted to try out."
			+ "All I had to do was mess with some config files, but it was my first real developer experience.";
			break;
		
		default:
			return "Empty";
			break;
	}
}