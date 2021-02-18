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
		
		case "Factorama":
			return "Voltaic Studios<br>"
				+ "2020<br><br>"
				+ "Factorama was my first commercial production, and quite a fantastic one at that. "
				+ "I spent the entire Summer after my senior year of high school programming this factory management game. "
				+ "I was so dedicated, it was about as time consuming as a full time job. "
				+ "I even hired up Giuliano De Pian, someone I had worked with before, to do the music. "
				+ "Several months in, and I was able to release it to the Android Play Store. "
				+ "I made about negative eighty bucks.";
		
		case "VOLAXIA":
			return "Harper Rhett & Giuliano De Pian<br>"
				+ "2020<br><br>"
				+ "description";
		
		case "FIG":
			return "Harper Rhett<br>"
				+ "2020<br><br>"
				+ "Don't turn a school project into a game. "
				+ "Seriously, what was I thinking?";

		case "Bad Ass Santa":
			return "Harper Rhett, Giuliano De Pian, and Carlita<br>"
				+ "2019<br><br>"
				+ "description";
		
		case "Leap Theory":
			return "Harper Rhett & Jeremy Rhett"
				+ "2019<br><br>"
				+ "description";
		
		case "Little Nightmare":
			return "Harper Rhett & Stranger Who's Name I Forgot"
				+ "2019<br><br>"
				+ "This. Game. Was. Awesome. "
				+ "It was my first game jam, and I worked with a pixel artist from who knows where, but I think it's the project that actually made me doubt becoming a mechanical engineer. "
				+ "Working with someone else in a competition, on a time period, was just so exhilirating it reminded me of my robotics competitions, and it really turned me onto the full game dev experience.";
			
		case "Slimer":
			return "Harper Rhett<br>"
				+ "2019<br><br>"
				+ "This was my first game ever. "
				+ "After a few weeks of taking various tutorials on Game Maker Studio 2, I decided to finally make my first game from scratch. "
				+ "The game featured a little sword wielding slime that fought off other slimes. "
				+ "It ain't much, but it's honest work.";
			
		case "Finally Sprinting":
			return "Harper Rhett<br>"
				+ "2020<br><br>"
				+ "I added sprinting to Teardown the game! "
				+ "It only took an afternoon, but I was really proud of this as it was my first mod where I actually programmed and didn't just mess with config files.";
		
		case "Vanilla++":
			return "Harper Rhett<br>"
				+ "2018<br><br>"
				+ "Simple Rockets is simply a great mobile game. "
				+ "Simple Rockets 2 is better, but it wasn't out when I made this mode. "
				+ "All the mod did was expand upon the content in the game, adding a few things here and there, but it was another developer experience under my belt.";
		
		case "MCPE Ramps":
			return "Harper Rhett<br>"
			+ "2016<br><br>"
			+ "During my freshman year of high school, I was pretty into Minecraft Pocket Edition, and decided I wanted to make a mod. "
			+ "Within a few hours of fiddling with some XML or JSON files (I can't remember) I was done, and soonafter published my first developer project to the internet. "
			+ "The mod actually blew up a little, and was reviewed by a few small YouTubers. ";
		
		default:
			return "Empty";
	}
}