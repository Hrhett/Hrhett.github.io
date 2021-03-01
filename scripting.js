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
				+ "Made in Unity<br>"
				+ "2021<br><br>"
				+ "This was a tiny little bugged out game I made for a rushed game jam. "
				+ "You play as a dude with a tentacle gun that can latch onto things, and with that power, you're able to escape the source of the tentacles. "
				+ "It was cool in concept, but needed lots of work in practice.";

		case "Distrakt":
			return "TigerDev<br>"
				+ "Made in Unity<br>"
				+ "2020<br><br>"
				+ "Distrakt was the first project I worked on as a part of Auburn's game developement club, TigerDev. "
				+ "The idea, formulated by my buddy Holden and I, was to create a game where the player was constantly distracted. "
				+ "The gameplay was supposed to look like something between Super Mario Galaxy and Portal 2. "
				+ "Unfortunately, we were never able to finish the project, but ended up with a pretty cool tech demo.";
		
		case "Factorama":
			return "Voltaic Studios<br>"
				+ "Made in Unity<br>"
				+ "2020<br><br>"
				+ "Factorama was my first commercial production, and quite a fantastic one at that. "
				+ "Inspired by games like Factorio and Assembly Line, the player creates automated factories to produce resources. "
				+ "Those resources can then be sold for profit, which can be used to expand your factory. "
				+ "The game flopped and I lost 80 bucks, but I still believe if I had worked on it more it would have been successful. "
				+ "It should still be live on the Play Store.";
		
		case "VOLAXIA":
			return "Harper Rhett & Giuliano De Pian<br>"
				+ "Made in Unity<br>"
				+ "2020<br><br>"
				+ "This game is so cool! "
				+ "It's like Galaga but you fling yourself at the bad guys in slow motion! "
				+ "It even has epic music by my composer friend from Argentina!";
		
		case "FIG":
			return "Harper Rhett<br>"
				+ "Made in Unity<br>"
				+ "2020<br><br>"
				+ "This game features a school project from my senior year of high school. "
				+ "I think you play as a countries leader or something. "
				+ "It's kind of dumb.";

		case "Bad Ass Santa":
			return "Harper Rhett, Giuliano De Pian, and Carlita<br>"
				+ "Made in Game Maker Studio 2<br>"
				+ "2019<br><br>"
				+ "This game was produced in a fantastic game jam with a team of three (myself included). "
				+ "In the game, elves have taken over the world, and as Santa Claus, you must re-claim Earth. "
				+ "Gameplay included a vertical scrolling shooter, two-player compatibility, and some epic art and music.";
		
		case "Leap Theory":
			return "Harper Rhett & Jeremy Rhett<br>"
				+ "Made in GMS2<br>"
				+ "2019<br><br>"
				+ "This game was produced for a game jam, and in it you play as a little retro fighter that unlocks interesting abilities as you move throughout the level. "
				+ "It needs some work but was pretty fun to create.";
		
		case "Little Nightmare":
			return "Harper Rhett & Stranger Who's Name I Forgot"
				+ "Made in GMS2<br>"
				+ "2019<br><br>"
				+ "This game was awesome. "
				+ "It was my first game jam, and I worked with a pixel artist from who knows where, but I think it's the project that actually made me doubt becoming a mechanical engineer. "
				+ "Working with someone else in a competition, on a time period, was just so exhilirating it reminded me of high school robotics, and it really turned me onto the full game dev experience.";
			
		case "Slimer":
			return "Harper Rhett<br>"
				+ "Made in GMS2<br>"
				+ "2019<br><br>"
				+ "This was my first game ever, where you play as a cute little slime that battles other cute little slimes.";
			
		case "Finally Sprinting":
			return "Harper Rhett<br>"
				+ "Made for Teardown<br>"
				+ "2020<br><br>"
				+ "I added sprinting to Teardown the game! "
				+ "It only took an afternoon, but I was really proud of this as it was my first mod where I actually programmed and didn't just mess with config files.";
		
		case "Vanilla++":
			return "Harper Rhett<br>"
				+ "Made for Simple Rockets 1<br>"
				+ "2018<br><br>"
				+ "For this mod I just expanded the vanilla game of Simple Rockets 1 some. ";
		
		case "MCPE Ramps":
			return "Harper Rhett<br>"
				+ "Made for Minecraft Pocket Edition<br>"
				+ "2016<br><br>"
				+ "During my freshman year of high school, I was pretty into Minecraft Pocket Edition, and decided I wanted to make a mod. "
				+ "Within a few hours of fiddling with some XML or JSON files (I can't remember) I was done, and soonafter published my first developer project to the internet. "
				+ "The mod actually blew up a little, and was reviewed by a few small YouTubers. ";

		case "Quote Bot":
			return "Harper Rhett<br>"
				+ "Made for Reddit<br>"
				+ "2020<br><br>"
				+ "This bot would scan Reddit for un-finished movie quotes and finish them. "
				+ "For example, if someone were to say 'Hello There,' the bot would reply 'General Kenobi.' "
				+ "Unfortunately, it broke and is no longer in use.";
		
		default:
			return "Empty";
	}
}