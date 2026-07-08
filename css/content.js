const diaryEntries = [
	{ title: "Welcome to my webbed site.", content:`
		<p>It takes up about 30kb and relies on no third-party scripts.</p>
		<p>I have a lot of random things and here is a short, simple website to collate and tag a bunch of them to essentially serve as my diary. Please don't expect this page to be updated very often. Honestly, you should be surprised that you're getting this much.</p>
		<p>Much love, Chef Bloof. Aka, Battleship Halbird, aka Craiture deLelioaha.</p>
		<p>This is <b>bold</b>, and this is <i>italics</i>, and this is <i><b>both</b></i></p>
	`},
	{title: "My recent projects.", content: `
		<h4><a href="https://battleship-halbird.itch.io/wallpaper-bundle-and-collection">Wallpaper Bundle and Collection</a>.</h4>
		<p>Python, completed in September of 2025.</p>
		<h4><a href="https://bsky.app/profile/2colourwallpapers.bsky.social">2-Colour Wallpaper Bot</a>.</h4>
		<p>Python, completed in July of 2026.</p>
		<h4><a href="https://backloggd.com/u/Chef_Bloof">Backloggd journaling and review</a>.</h4>
		<p>Creative writing, started in December 2025.</p>
		<p>I did a few sporadic reviews on backlogg'd recently, as part of what I'd laughably
			call my creative writing. I'm quite proud of a <a href="https://backloggd.com/u/Chef_Bloof/review/3822739/">few</a>
			of my reviews, available <a href="https://backloggd.com/u/Chef_Bloof/review/3840505/">here</a> and <a href="https://backloggd.com/u/Chef_Bloof/review/3733974/">there</a>.</p>
		<h4><a href="https://itch.io/profile/bloofbloof">Visual Novels with Bloof</a>.</h4>
		<p>Python, Ren'Py, creative writing (sporadic)</p>
		<p>I am proud to have worked with <a href="https://itch.io/profile/bloofbloof">Bloof</a>, as a programmer, playtester, and occasional translator of her Dr Voldritch series of visual novels. Please give the entire series a playthrough starting <a href="https://bloofbloof.itch.io/drvoldritch">here</a>.</p>
		<h4><a href="#entry0">This website you're on</a>.</h4>
		<p>HTML, CSS, JS, completed in March 2026. Posts listed in chronological order.</p>
		<ul id="allPosts"></ul>
	`},
	{ title: "Contact me!", content: `
		<p>Don't do that.</p>
	`},
	{ title: "All colour schemes.", content: `
		<p>Listed in alphabetical order.</p>
		<ul id="allThemes"></ul>
	`},
	{ title: "28 Feb, 2026", content: `
		<p>I had another bout of insomnia last night. The kind that you don't even notice until you look out of a window and realize the sky is looking awfully bluer then it should have been. For whatever reason, one of my close friends mentioned a pet project of theirs and I was immediately overcome with a desire to show them up and prove what a cool, smart, hip dude I am. If you're reading this, you can see the result.</p>
		<p>Do you like how it turned out? My friend wanted to show off Neocities, a very myopic retrostalgia-tinted take on what Angelfire pages might"ve looked like as an aesthetic trend had they continued on unabated. I very consciously chose to made this website the opposite of that overly flowery cottagecore-adjacent look. Customizable, yes, but with very stark colours and dull, almost boring boxes that expand to fit new boxes of information without needing to dazzle with sparkles or images. I want to make the biggest, prettiest website I can make without text or images, trying to see if I can still do what I want it to do without too much fuss. TODO: Add another box to change fonts dynamically the way the colours change right now. Also, try to keep this website updated like some kind of diary.</p>
		<p>That last one I'm probably not going to keep. I am not a creative type, as much as I like to pretend otherwise. Already I'm feeling myself circling the bottom of the barrel to think of what else to add, what corners need to be rounded off and what boxes deserve to be ticked. But I'm proud of myself for having a very specific vision of what kind of a website I wanted to make and bringing it to life as accurately as I could.</p>
	`},
	{ title: "01 Mar, 2026", content: `
		<p>I added a little more polish to the site, whilst also chatting with my buddy who has also decided to make himself his own website. He's decided against making something bespoke in HTML and opted instead for a Carrd, after a brief and clandestine struggle with the Neocities admins after someone took his page down.</p>
		<p>I've been talking with him on and off about Inscryption. Fantastic little videogame, just perfect to endlessly gush over and talk about despite being extremely flawed. Every time I wanna replay it I'm reminded that ACT II and III exist without meaning to. A lesser dev would have just made the Kaycee mod experience the entire game, but not our danny mullins. What a guy. Fingers crossed Pony Island II is just as insanely off the wall despite not having a similarly solid game mechanic to hang it all from like Inscryption had TCG mechanics.</p>
	`},
	{ title: "06 Mar, 2026", content: `
		<p>How about that chessboard, huh?</p>
		<p>I've been spending forever trying to get that thingamajig working, but now i've got a version up and running. TODO: make it clickable and interactable so you can make simple 2-colour pixel art with it.</p>
		<p>EDIT: Got it running. I might leave this website here apart from text updates.</p>
		<p>EDIT x2 COMBO!: Optimized it, simplified it, and made it interactable and clickable with help of a refactoring of the website. Now this website is cleaner, cheaper, and easier to update.</p>
	`},
	{ title: "08 Mar, 2026", content: `
		<p>I watched the rugby. It good! Italy vs England was an absolute bloodbath in all the right ways and the better team won.</p>
		<p>Gonna try making chicken and tofu tikka masala. Will keep you updated on how that came out with a new recipe AND a new rice cooker.</p>
		<p>Tofu and rice is such a winning combination. With my belly full of masala, I've gone a little mad with the colour combinations, adding about 30 different colours this site can generate as, as well as automating as much as possible.</p>
	`},
	{ title: "18 Apr, 2026", content: `
		<p>Had a big health scare about the computer I use to make this website. After a while of not using it, I turned on the big tower and was greeting with a big rumbling of what sounded like a metal cat's  yowl. It took me a while, but I figured it was the aging, second hand power supply unit. Thinking I was so smart and clever, I spent a day taking the cover off, pulling out all the cables, replacing the PSU, only to turn the newest one back on and discovering the Motherboard was suddenly non-functional. Oh well, no problem, that I can replace.</p>
		<p>So that also had to come out and be replaced too. Chalk that up to the failing PSU taking it out as it dies. But then, after I take out the PSU and the Mobo, I flick on the computer to discover the graphics card had somehow died mid-repair as well.</p>
		<p>Turns out, although I didn't know it at the time, it wasn't booting up properly through Secure Boot UEFI bull honkey, but I couldn't figure that out until I paid for a new one and sent off for another 600€ to amazon. And I would've thrown away the old card without much ceremony if I hadn't recieved the new one and discovered it too was completely dead on arrival, which prompted me to fitz around with boot settings until i figured out what was wrong. Oh well. What the hell.</p>
		<p>So that was a great waste of my time and also my money. I'm gonna spend the rest of april working on my good friend Bloof's game and translating that into spanish. And then it's back to the grind for me. </p>
	`},
	{ title: "07 May, 2026", content: `
		<p>Settling back down into normality. Spring is finally here, and out on the balcony the flowers are coming into bloom.</p>
		<p>My friend Squish is doing a game jam. As much as I'd like to join, i've got work that needs to be done and I just don't have the time or space to dedicate to making art, annoyingly. </p>
	`},
	{ title: "23 Jun, 2026", content: `
		<p>Good news! I'm not, in fact, dead!</p>
		<p>Man, is that some good news or what. I'm so glad to be alive and aware of the world around me. I love being here and now in this moment!</p>
		
		<p>So! I added a new project to the list. A bot on Bluesky that takes my homemade <a href="https://battleship-halbird.itch.io/wallpaper-bundle-and-collection">Artesanal Wallpapers</a> and posts them one per hour. Took a little dithering, rigging, jiggering and poking but I got it running on my computer's crontab. I'm very happy with it as a fun thing to do and have done!</p>
		<p>Woo!</p>
	`},
	{ title: "07 Jul, 2026", content: `
		<h4>Murderhoboes - Dev Diary Entry 1.</h4>
		<p>I'm having fun :)</p>
		<p>I feel like it's important to remind myself that this game will not reinvent the wheel. It will not generate me a million dollars or free me from my obligations, that this is something I am doing because I like it and it's fun for me.</p>
		<p>I'm making a videogame!</p>
		<p>And more then that, I'm making a big advanced project. More then a simple bot that produces wallpapers on demand, what i'm making is a grand undertaking that will most likely rest in my programming folder on this computer for a good long while as I keep adding layers to it, fleshing out its various systems and adding meat onto its bones.</p>
		<h4>And that's okay.</h4>
		<p>I find motivation a tricky and challenging thing. If I think something is worth doing, I want it done more then I want to be within the process of doing it. I like seeing a puzzle solved more then I like solving a puzzle, and solving puzzles for the sake of solving puzzles is something I feel like I have to learn.</p>
		<p>I'm making a grid-based RPG.</p>
		<p>I want to make the kind of game that would play in a terminal window on linux in a year beginning with 19, of the kind they don't make anymore because even the style and presentation have become as outdated as text adventures, point-and-click games, and platformers.</p>
		<h4>I'm currently calling it Murderhoboes.</h4>
		<p>And beyond a couple of super pie-in-the-sky ideas about what it might be and how its story might roll out (Man, isn't Pokemon Mystery Dungeon fun?) or brief fleeting thoughts about presentation (Let's make it extremely south american, like having pan pipe and guitar-driven music or making all the UI flourishes look like the side of a buenos aires taxicab) I'm very consciously avoiding talking about the story right now. Or naming all these characters.</p>
		<p>Right now, I want a working, playable engine that looks like ass before I even dare to think about what the game might look like.</p>
		<p>And so far, i've got some good stuff going on! Here's a super messy features list I got figured out.</p>
		<ul>
			<li>An Grid of gameplay elements</li>
			<li>Moving with WASD or arrow keys.</li>
			<li>Multiple player characters</li>
			<li>Being able to press Q and E to switch between them.</li>
			<li>A turn system where your guys move and then the enemy's guys move.</li>
			<li>A randomized dungeon of rooms, a spawn point, and a staircase that takes guys off the map</li>
			<li>A sidebar window showing the turn count, the currently selected player and their stats.</li>
			<li>A way to make every player have a Movement stat that counts down and when their turn is up, they can't move anymore.</li>
		</ul> 
		<p>And yet, even here, working with concepts and ideas with a system like this really does feel like working with quick-drying cement. Like the video essays said, you really do get attached to ideas and concepts that you put down and don't think about. In my case, I made up some stats to play around with, and the one stat that matters was Speed. So I made a mage called Mage with 5 movement per turn, a Rogue called Rogue with 8, and a knight called Knight with 4 movement every turn. And already, just from the manner I've moved all these pieces around the imaginary board has already begun to imbue them with character. I'm already feeling how the rogue moves quick and serves as an advance scout, and so needs to be bad in combat to make up for it. Perhaps some kind of monk build without ranged weapons that the Knight and Mage can make up for with arrows and spells.</p>
		<p>So next step forward is to add the combat system and make these individual HP bars start to mean something. Add a super rudimentary enemy and start messing around with combat numbers until I get something reasonably satisfying with the systems I have.</p> 
	`},
//	{ title: "07 May, 2026", content: `
//		<p></p>
//	`},

];

//list of themes. Light/Dark, brightest colour first, darkest colour last)
const themePairs = [
	{colors:["#010101","#000871","#63ffba","#ff79ae",],names:["Play","Clay"],},
	{colors:["#40332f","#856d52","#95c798","#fbffe0",],names:["Choco","Mint"],},
	{colors:["#002b59","#005f8c","#00b9be","#9ff4e5",],names:["Black","Aqua"],},
	{colors:["#00002a","#0001d5","#ff17ca","#fff6fd",],names:["Neon","Blink"],},
	{colors:["#0b0630","#6b1fb1","#cc3495","#f8e3c4",],names:["Space","Haze"],},
	{colors:["#191b1a","#294257","#579c9a","#99c9b3",],names:["Blue","Mould"],},
	{colors:["#161616","#ab4646","#8f9bf6","#f0f0f0",],names:["Card","Shark"],},
	{colors:["#5a0084","#e63900","#ffc96b","#ffffff",],names:["Inari","Tail"],},
	{colors:["#0b1424","#25375c","#5c7391","#aec3d6",],names:["Lost","Chord"],},
	{colors:["#ff2247","#32383e","#72797e","#b4b8be",],names:["Red","Accent"],},
	{colors:["#050505","#4c5671","#91a3aa","#f5f5f5",],names:["Drabbed","Up"],},
	{colors:["#10141f","#202e37","#577277","#a8b5b2",],names:["Dull","Black"],},
	{colors:["#0d1a1a","#5b8c7c","#add9bc","#f2fff2",],names:["Matrix","Mint"],},
	{colors:["#471e4c","#876bb2","#f7b58c","#ffefff",],names:["Super","Catch"],},
	{colors:["#0f052d","#ff7777","#ffce96","#f1f2da",],names:["Peach","Melba"],},
	{colors:["#2d1b00","#1e606e","#5ab9a8","#c4f0c2",],names:["Haze","Todays"],},
	{colors:["#68518a","#7c9aac","#f4949c","#ffd0a4",],names:["Staid","Coral"],},
	{colors:["#1f285d","#4b849a","#98d8b1","#ecf2cb",],names:["Dream","Snowy"],},
	{colors:["#266b90","#9b63bf","#e477b6","#fff3f3",],names:["Mesa","Meseta"],},
	{colors:["#250442","#dd0956","#9c1904","#f5b413",],names:["Fruit","Punch"],},
	{colors:["#222323","#ff4adc","#3dff98","#f0f6f0",],names:["Acidic","Jack"],},
	{colors:["#001b2e","#2d757e","#9a7bbc","#eefded",],names:["Aqua","Asylum"],},
	{colors:["#000000","#433455","#9d9f7f","#c5ccb8",],names:["Faded","Greys"],},
	{colors:["#183f39","#2a1d0d","#3c9f9c","#efd8a1",],names:["Deep","Bruise"],},
	{colors:["#151d28","#394a50","#819796","#c7cfcc",],names:["Boring","Grey"],},
	{colors:["#0f052d","#203671","#36868f","#5fc75d",],names:["Moonlight","GB"],},
	{colors:["#1e014b","#78478e","#58e1c3","#ffdaff",],names:["Dossier","Glow"],},
	{colors:["#000871","#8854f3","#ff8c5c","#fff982",],names:["Yawning","Tide"],},
	{colors:["#22ff47","#32383e","#72797e","#b4b8be",],names:["Green","Accent"],},
	{colors:["#211e20","#555568","#a0a08b","#e9efec",],names:["Demi","Chrome "],},
	{colors:["#7c3f58","#eb6b6f","#f9a875","#fff6d3",],names:["Cream","Sundae"],},
	{colors:["#051f39","#4a2480","#c53a9d","#ff8e80",],names:["Romulan","Lava"],},
	{colors:["#0f1327","#484267","#9a7ca7","#e5dac2",],names:["Lunar","Ascent"],},
	{colors:["#2176cc","#ff7d6e","#fca6ac","#e8e7cb",],names:["Soda","Poppins"],},
	{colors:["#2c2137","#764462","#a96868","#edb4a1",],names:["Rustic","Sepia"],},
	{colors:["#1a2129","#312137","#512839","#713141",],names:["Ember","Plague"],},
	{colors:["#46425e","#5b768d","#d17c7c","#f6c6a8",],names:["Frigid","Flame"],},
	{colors:["#012824","#265935","#ff4d6d","#fcdeea",],names:["Cherry","Melon"],},
	{colors:["#fffdaf","#ff3796","#00faac","#302387",],names:["Fuzzy","Iconic"],},
	{colors:["#312b24","#3c1402","#e96f1b","#ca9a57",],names:["Corn","Combine"],},
	{colors:["#2c2137","#446176","#3fac95","#a1ef8c",],names:["Nymph","Maniac"],},
	{colors:["#202020","#5e6745","#aeba89","#e3eec0",],names:["Hundred","Alma"],},
	{colors:["#220780","#615fed","#ffba5a","#fffab2",],names:["Cosmic","Cream"],},
	{colors:["#131726","#59608e","#61b8ae","#dde0bd",],names:["Zero-Sum","One"],},
	{colors:["#151640","#3f6d9e","#f783b0","#e6f2ef",],names:["Popular","Star"],},
	{colors:["#00303b","#4e494c","#d4984a","#ffffc7",],names:["Slurry","Sortie"],},
	{colors:["#381631","#5eb6ad","#d8dcb4","#fea85f",],names:["Faded","Super-8"],},
	{colors:["#260016","#ed008c","#00bff3","#daf3ec",],names:["Aspire","Ascent"],},
	{colors:["#351522","#943054","#db7bae","#f5a1a1",],names:["Foosball","Head"],},
	{colors:["#32312d","#5d5b54","#8d8a7f","#c2beae",],names:["Silver","Dollar"],},
	{colors:["#322623","#7b505c","#9b9880","#e4d6cf",],names:["Green","Machine"],},
	{colors:["#372a51","#3a5068","#5a8f78","#f5f6df",],names:["Chateaux","Noir"],},
	{colors:["#755f9c","#8d89c7","#d9a7c6","#ffe2db",],names:["Lunar","Crystal"],},
	{colors:["#260d1c","#4f3a54","#a4929a","#e4dbba",],names:["Ink","Statement"],},
	{colors:["#0f0f1b","#565a75","#c6b7be","#fafbf6",],names:["Hollow","Gothic"],},
	{colors:["#20283d","#426e5d","#e5b083","#fbf7f3",],names:["Terra","Formata"],},
	{colors:["#3e3a42","#877286","#f0b695","#e9f5da",],names:["Honey","Dewdrop"],},
	{colors:["#000100","#431723","#46464f","#928e80",],names:["Void","Terminal"],},
	{colors:["#0f1b26","#c8472d","#2ec9cb","#f5e8d1",],names:["Portal","Report"],},
	{colors:["#37313c","#f63090","#4cc9f4","#e1f0f0",],names:["Colossal","Glow"],},
	{colors:["#183f39","#300f0a","#ef692f","#efd8a1",],names:["Rugger","Maroon"],},
	{colors:["#2b2821","#b03a48","#d4804d","#e3cfb4",],names:["Peaches","Gravy"],},
	{colors:["#172038","#7a4841","#cf573c","#df84a5",],names:["Rustic","Tinder"],},
	{colors:["#19332d","#25562e","#a8ca58","#d0da91",],names:["Geodesic","Grog"],},
	{colors:["#241527","#411d31","#cf573c","#da863e",],names:["Hepheaston","Red"],},
	{colors:["#241527","#75a743","#a53030","#d0da91",],names:["Getaway","Sleigh"],},
	{colors:["#000000","#1d2b53","#ff004d","#fff1e8",],names:["Intonation","Way"],},
	{colors:["#0d0405","#5e1210","#d35600","#fed018",],names:["Mandarin","Raise"],},
	{colors:["#2e2b12","#da298e","#fac6b4","#f8f3fd",],names:["Paramour","Flame"],},
	{colors:["#564756","#507dba","#5acca0","#e5f7d2",],names:["Echico","Caramel"],},
	{colors:["#000000","#382843","#7c6d80","#c7c6c6",],names:["Low-spec","Gamer"],},
	{colors:["#060608","#2f256b","#f42e1f","#ffffff",],names:["Kaneki","Haircut"],},
	{colors:["#2c1e74","#c23a73","#d58863","#dad3af",],names:["Descent","Temper"],},
	{colors:["#210b1b","#4d222c","#9d654c","#cfab51",],names:["Golden","Platter"],},
	{colors:["#292b31","#483d47","#5d5549","#837e7c",],names:["Heather","Meadow"],},
	{colors:["#1b0326","#7a1c4b","#ba5044","#eff9d6",],names:["Scarlet","Desert"],},
	{colors:["#405010","#708028","#a0a840","#d0d058",],names:["Retro","Gameplay"],},
	{colors:["#2e2622","#77746f","#a09f97","#cccec7",],names:["Weekly","Release"],},
	{colors:["#000000","#ff5555","#55ff55","#ffff55",],names:["Daltonic","Combo"],},
	{colors:["#181b24","#0c5066","#d99741","#f0e1d1",],names:["Moderna","Italic"],},
	{colors:["#291f3e","#3b7961","#64d0b8","#f4f2af",],names:["Bubblegum","Neon"],},
	{colors:["#27393f","#6f535b","#649092","#cfc89d",],names:["Viscount","Myriad"],},
	{colors:["#5d446c","#739ca1","#f7b58c","#fff2e5",],names:["Celeste","Pumpkin"],},
	{colors:["#000000","#550000","#a40000","#ef0000",],names:["Everpresent","Lip"],},
	{colors:["#221e31","#41485d","#778e98","#c5dbd4",],names:["Unrusted","Screen"],},
	{colors:["#172038","#411d31","#a8ca58","#a4dddb",],names:["Electric","Maroon"],},
	{colors:["#0c0c0d","#3f3d47","#8b7d73","#cdb27b",],names:["Corto","Americano"],},
	{colors:["#332200","#007744","#55bbdd","#eeffff",],names:["Invernal","Forest"],},
	{colors:["#282328","#545c7e","#c56981","#a3a29a",],names:["Bitter","Schnapps"],},
	{colors:["#000000","#a1281c","#92938d","#e8d6c0",],names:["Ferrous","Curtain"],},
	{colors:["#131626","#4d4d80","#e6a1cf","#ffe6ea",],names:["Nightly","Fuzzies"],},
	{colors:["#3b252e","#593a5f","#4d7d65","#d1ada1",],names:["Forgotten","Swamp"],},
	{colors:["#26153a","#843c35","#398a75","#ffeb94",],names:["Bogwater","Tarpit"],},
	{colors:["#393457","#6a3771","#1e8875","#6df7c1",],names:["Creation","Poison"],},
	{colors:["#622e4c","#7550e8","#608fcf","#8be5ff",],names:["Bloodpump","Ocean"],},
	{colors:["#433455","#666092","#9d9f7f","#a593a5",],names:["Mouldy","Sandwich"],},
	{colors:["#181322","#4b372c","#a2423a","#cdc1a7",],names:["Marmalade","Mulch"],},
	{colors:["#1e1d39","#253a5e","#a8ca58","#da863e",],names:["Spaceman","Spliff"],},
	{colors:["#1e1d39","#402751","#c65197","#df84a5",],names:["Aphrodite","Venus"],},
	{colors:["#381631","#105390","#fea85f","#d8dcb4",],names:["Tangerine","Assist"],},
	{colors:["#341c27","#253a5e","#de9e41","#a4dddb",],names:["Aperture","Science"],},
	{colors:["#5c007e","#fe6ecd","#48cedf","#e5e695",],names:["Dayglow","Eighties"],},
	{colors:["#141852","#9e2e9d","#e779a0","#dac4b9",],names:["Lavander","Bulrush"],},
	{colors:["#1b1829","#3f7a63","#f4a374","#fffbd1",],names:["Copper","Shoeshine"],},
	{colors:["#0a202f","#302d6a","#871c3e","#d32836",],names:["Vibrant","Volcanic"],},
	{colors:["#3b252e","#7f2c44","#5e759c","#d1ada1",],names:["Contrast","Mordant"],},
	{colors:["#190000","#560909","#ad2020","#f2e6e6",],names:["Corvid","Ravenette"],},
	{colors:["#300030","#602878","#f89020","#f8f088",],names:["Hallowed","Pumpkin"],},
	{colors:["#2d162c","#412752","#683a68","#9775a6",],names:["Velveteen","Cherry"],},
	{colors:["#1c1412","#635650","#d3ae21","#d4c9c3",],names:["Internal","Voltage"],},
	{colors:["#0d2b45","#544e68","#d08159","#ffd4a3",],names:["Waterfall","Splash"],},
	{colors:["#332c50","#46878f","#94e344","#e2f3e4",],names:["Kirokaze","Gameplay"],},
	{colors:["#381a3e","#8b506d","#f890a8","#f6edc1",],names:["Strawberry","Window"],},
	{colors:["#5a3921","#6b8c42","#7bc67b","#ffffb5",],names:["Verdant","Awakening"],},
	{colors:["#28192f","#5f5f6e","#f8401b","#cecac9",],names:["Pomegranite","Steel"],},
	{colors:["#341c27","#602c2c","#de9e41","#e8c170",],names:["Accidental","Orange"],},
	{colors:["#4d2b32","#7a4841","#d7b594","#e7d5b3",],names:["Borogravian","Brown"],},
	{colors:["#260016","#ed008c","#00bff3","#daf3ec",],names:["Equality","Inclusion"],},
	{colors:["#1b192a","#c93864","#35cbc8","#ffdb85",],names:["Half-tone","Printing"],},
	{colors:["#151515","#1880f8","#ff82ce","#ffe737",],names:["Classic","Impression"],},
	{colors:["#1f240a","#39571c","#ef692f","#efb775",],names:["Christmas","Pinewood"],},
	{colors:["#241527","#402751","#c65197","#da863e",],names:["Paraguayan","Sunrise"],},
	//{colors:["#yyyyyy","#yyyyyy","#yyyyyy","#yyyyyy",],names:["yyy","yyy"],},
	//{colors:["#yyyyyy","#yyyyyy","#yyyyyy","#yyyyyy",],names:["yyy","yyy"],},
	//{colors:["#yyyyyy","#yyyyyy","#yyyyyy","#yyyyyy",],names:["yyy","yyy"],},
	//{colors:["#yyyyyy","#yyyyyy","#yyyyyy","#yyyyyy",],names:["yyy","yyy"],},
];



