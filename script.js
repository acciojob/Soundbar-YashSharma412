//your JS code here. If required.
const applause = document.createElement("audio");
applause.src = "./sounds/applause.mp4";

const boo = document.createElement("audio");
boo.src = "./sounds/boo.mp4";

const gasp = document.createElement("audio");
gasp.src = "./sounds/gasp.mp4";

const tada = document.createElement("audio");
tada.src = "./sounds/tada.mp4";

const victory = document.createElement("audio");
victory.src = "./sounds/victory.mp4";

const wrong = document.createElement("audio");
wrong.src = "./sounds/wrong.mp4";

function playAudio(btnRef){
	let currentBtnId = btnRef.id;

	switch(currentBtnId){
			case "applause":
			applause.play();
			break;
			case "boo":
			boo.play();
			break;
			case "gasp":
			gasp.play();
			break;
			case "tada":
			tada.play();
			break;
			case "victory":
			victory.play();
			break;
			case "wrong":
			wrong.play();
			break;
			case "stop":
			stop.play();
			break;
	}
}