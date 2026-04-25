const diaryEntries = [
	{ title: "Welcome to my webbed site.", content:`
		<p>It takes up about 30kb and relies on no third-party scripts.</p>
		<p>I have a lot of random things and here is a short, simple website to collate and tag a bunch of them to essentially serve as my diary. Please don't expect this page to be updated very often. Honestly, you should be surprised that you're getting this much.</p>
		<p>Much love, Chef Bloof. Aka, Battleship Halbird, aka Craiture deLelioaha.</p>
		<p>This is <b>bold</b>, and this is <i>italics</i>, and this is <i><b>both</b></i></p>
	` },
	{title: "My recent projects.", content: `
		<h4><a href="https://battleship-halbird.itch.io/wallpaper-bundle-and-collection">Wallpaper Bundle and Collection</a>.</h4>
		<p>Python, completed in September of 2025.</p>
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
	{ title: " ", content: `
		<p>Don't do that.</p>
	` },
	{ title: "All colour schemes.", content: `
		<p>All colours listed in alphabetical order.</p>
		<ul id="allThemes"></ul>
	` },
	{ title: "28 Feb, 2026", content: `
		<p>I had another bout of insomnia last night. The kind that you don't even notice until you look out of a window and realize the sky is looking awfully bluer then it should have been. For whatever reason, one of my close friends mentioned a pet project of theirs and I was immediately overcome with a desire to show them up and prove what a cool, smart, hip dude I am. If you're reading this, you can see the result.</p>
		<p>Do you like how it turned out? My friend wanted to show off Neocities, a very myopic retrostalgia-tinted take on what Angelfire pages might"ve looked like as an aesthetic trend had they continued on unabated. I very consciously chose to made this website the opposite of that overly flowery cottagecore-adjacent look. Customizable, yes, but with very stark colours and dull, almost boring boxes that expand to fit new boxes of information without needing to dazzle with sparkles or images. I want to make the biggest, prettiest website I can make without text or images, trying to see if I can still do what I want it to do without too much fuss. TODO: Add another box to change fonts dynamically the way the colours change right now. Also, try to keep this website updated like some kind of diary.</p>
		<p>That last one I'm probably not going to keep. I am not a creative type, as much as I like to pretend otherwise. Already I'm feeling myself circling the bottom of the barrel to think of what else to add, what corners need to be rounded off and what boxes deserve to be ticked. But I'm proud of myself for having a very specific vision of what kind of a website I wanted to make and bringing it to life as accurately as I could.</p>
	` },
	{ title: "01 Mar, 2026", content: `
		<p>I added a little more polish to the site, whilst also chatting with my buddy who has also decided to make himself his own website. He's decided against making something bespoke in HTML and opted instead for a Carrd, after a brief and clandestine struggle with the Neocities admins after someone took his page down.</p>
		<p>I've been talking with him on and off about Inscryption. Fantastic little videogame, just perfect to endlessly gush over and talk about despite being extremely flawed. Every time I wanna replay it I'm reminded that ACT II and III exist without meaning to. A lesser dev would have just made the Kaycee mod experience the entire game, but not our danny mullins. What a guy. Fingers crossed Pony Island II is just as insanely off the wall despite not having a similarly solid game mechanic to hang it all from like Inscryption had TCG mechanics.</p>
	` },
	{ title: "06 Mar, 2026", content: `
		<p>How about that chessboard, huh?</p>
		<p>I've been spending forever trying to get that thingamajig working, but now i've got a version up and running. TODO: make it clickable and interactable so you can make simple 2-colour pixel art with it.</p>
		<p>EDIT: Got it running. I might leave this website here apart from text updates.</p>
		<p>EDIT x2 COMBO!: Optimized it, simplified it, and made it interactable and clickable with help of a refactoring of the website. Now this website is cleaner, cheaper, and easier to update.</p>
	` },
	{ title: "08 Mar, 2026", content: `
		<p>I watched the rugby. It good! Italy vs England was an absolute bloodbath in all the right ways and the better team won.</p>
		<p>Gonna try making chicken and tofu tikka masala. Will keep you updated on how that came out with a new recipe AND a new rice cooker.</p>
		<p>Tofu and rice is such a winning combination. With my belly full of masala, I've gone a little mad with the colour combinations, adding about 30 different colours this site can generate as, as well as automating as much as possible.</p>
	` },
	{ title: "18 Apr, 2026", content: `
		<p>Had a big health scare about the computer I use to make this website. After a while of not using it, I turned on the big tower and was greeting with a big rumbling of what sounded like a metal cat's  yowl. It took me a while, but I figured it was the aging, second hand power supply unit. Thinking I was so smart and clever, I spent a day taking the cover off, pulling out all the cables, replacing the PSU, only to turn the newest one back on and discovering the Motherboard was suddenly non-functional. Oh well, no problem, that I can replace.</p>
		<p>So that also had to come out and be replaced too. Chalk that up to the failing PSU taking it out as it dies. But then, after I take out the PSU and the Mobo, I flick on the computer to discover the graphics card had somehow died mid-repair as well.</p>
		<p>Turns out, although I didn't know it at the time, it wasn't booting up properly through Secure Boot UEFI bull honkey, but I couldn't figure that out until I paid for a new one and sent off for another 600€ to amazon. And I would've thrown away the old card without much ceremony if I hadn't recieved the new one and discovered it too was completely dead on arrival, which prompted me to fitz around with boot settings until i figured out what was wrong. Oh well. What the hell.</p>
		<p>So that was a great waste of my time and also my money. I'm gonna spend the rest of april working on my good friend Bloof's game and translating that into spanish. And then it's back to the grind for me. </p>
	` },
	// { title: "INSERT_DATE", content: `INSERT CONTENT` },
];
//list of themes. Light/Dark, brightest colour first, darkest colour last)
const themePairs = [
	{colors:["#e8d6c0","#a1281c","#000000"],names:["Crimson","Repose"],},
	{colors:["#f2b63f","#9c4012","#540021"],names:["Ochre","Sunrise"],},
	{colors:["#eed7ac","#8b9525","#2a1f07"],names:["GB","Classic"],},
	{colors:["#ced9ec","#66b0c7","#34419d"],names:["Bright","Cyan"],},
	{colors:["#fffff5","#f63090","#210613"],names:["Sangria","Pink"],},
	{colors:["#87bac5","#816ea0","#502a45"],names:["Cool","Mauve"],},
	{colors:["#fff3f3","#a07cff","#150413"],names:["Austere","Purple"],},
	{colors:["#ffffd1","#635c6d","#150413"],names:["Boring","Grey"],},
	{colors:["#d4f5e1","#1b6b4f","#022c1d"],names:["Mint","Forest"],},
	{colors:["#ffd6da","#9c1132","#2a0a10"],names:["Wine","Blush"],},
	{colors:["#c9a449","#7f623e","#382d20"],names:["Amber","Fallow"],},
	{colors:["#f72585","#7209b7","#3a0ca3"],names:["Star","Party"],},
	{colors:["#a7c957","#6a994e","#386641"],names:["Gamer","Green"],},
	{colors:["#fcba04","#a50104","#590004"],names:["Sunset","Ember"],},
	{colors:["#f3e9dc","#c08552","#5e3023"],names:["Rustic","Autumn"],},
	{colors:["#e0fbfc","#3d5a80","#0a1128"],names:["Ocean","Midnight"],},
	{colors:["#efbcd5","#d81b60","#2e294e"],names:["Dreamy","Pastel"],},
	{colors:["#fdf6e3","#cb4b16","#002B36"],names:["Solar","Dark"],},
	{colors:["#69f0ae","#324a4d","#03191b"],names:["Noctis","Terminal"],},
	{colors:["#a6adc8","#45475a","#1e1e2e"],names:["Cordon","Blue"],},
	{colors:["#d7c483","#b36d43","#232323"],names:["Disco","Miasma"],},
	{colors:["#ffd4a3","#8d697a","#0d2b45"],names:["Tempo","Rubato"],},
	{colors:["#f2545b","#a93f55","#19323c"],names:["Waterloo","Sunrise"],},
	{colors:["#f0f6f0","#535453","#222323"],names:["Monitor","Glow"],},
	{colors:["#f9cb40","#ff715b","#4c5b5c"],names:["Blaze","Glory"],},
	{colors:["#94e344","#46878f","#332c50"],names:["Kiro","Haze"],},
	{colors:["#fafbf6","#565a75","#0f0f1b"],names:["Insect","Memory"],},
	{colors:["#ff8e80","#c53a9d","#051f39"],names:["Lava","Obsidian"],},
	{colors:["#9ff4e5","#00b9be","#002b59"],names:["Deep","Sea"],},
	{colors:["#f4f1de","#e07a5f","#3d405b"],names:["Flamenco","Sunset"],},
	{colors:["#fb8b24","#d90368","#820263"],names:["Fiesta","Miedo"],},
	{colors:["#e59500","#840032","#002642"],names:["Riviera","Night"],},
	{colors:["#fac748","#8390fa","#1d2f6f"],names:["Summer","Sparkle"],},
	{colors:["#e7d7c1","#bf4342","#8c1c13"],names:["Cinnamon","'n' Nutmeg"],},
	{colors:["#e8f1f1","#d0363a","#393215"],names:["Bicycle","Cardsharp"],},
	//{colors:["#xxxxxx","#xxxxxx","#xxxxxx"],names:["",""],},
];