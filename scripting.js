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
				+ "It was fun but I made the major mistake of winging everything, and so it didn't turn out too well, but it was a cool concept. ";

		case "Quote Bot":
			return "Harper Rhett<br>"
				+ "2020<br><br>"
				+ "Over Winter break I wanted to learn some Python, and I figured a cool way to do that would be to create a Reddit bot. "
				+ "Naturally, I created a bot that replied to unfinished quotes from famous pop culture. "
				+ "Also naturally, it broke when I booted it up a few weeks later, and proceeded to sweep it under the rug. "
				+ "RIP.";

		case "Distrakt":
			return "TigerDev<br>"
				+ "2020<br><br>"
				+ "Distrakt was the first project I worked on as a part of Auburn's game developement club, TigerDev. "
				+ "The idea, formulated by my buddy Holden and I, was to create a game where the player was constantly distracted. "
				+ "We thought that if we took some puzzle game mechanics, and some FPS mechanics, and slapped them together, that would do just the trick. "
				+ "We recruited two others from the club, and proceeded to start work on this 3D masterpiece. "
				+ "Apparently the coolest project ever was too cool, and we had to abandon it due to scope...";
			break;
		
		case "Factorama":
			return "Voltaic Studios<br>"
				+ "2020<br><br>"
				+ "Factorama was my first commercial production, and quite a fantastic one at that. "
				+ "I spent the entire Summer after my senior year of high school programming this factory management game. "
				+ "I was so dedicated, it was about as time consuming as a full time job. "
				+ "I even hired up Giuliano De Pian, someone I had worked with before, to do the music. "
				+ "Several months in, and I was able to release it to the Android Play Store. "
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
				+ "This was my first game ever. "
				+ "After a few weeks of taking various tutorials on Game Maker Studio 2, I decided to finally make my first game from scratch. "
				+ "The game featured a little sword wielding slime that fought off other slimes. "
				+ "It ain't much, but it's honest work.";
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