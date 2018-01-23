const translate = require('google-translate-api');

let input = (process.argv[2]) || "You couldn't touch the sides without letting the water in, so we all huddled up into one mass in the centre."
//English > Welsh > Sinhala > Italian > Japanese > French > English
let languages = (process.argv[3]).split(',') || ['en', 'cy', 'it', 'ja', 'fr', 'en'];
let lanIndex = 0;

function nextLanguage(input){
	if( lanIndex == (languages.length-1) ){
		console.log(input);
		return;
	}
	else {
		console.log(input);
		console.log(`${languages[lanIndex]}, to: ${languages[lanIndex+1]}`);
	}

	translate(input, {from: languages[lanIndex], to: languages[lanIndex+1]}).then(res => {
		lanIndex++;
		nextLanguage(res.text);
	    //console.log(res.text);
	    //=> Ik spea Nederlands!
	    //console.log(res.from.text.autoCorrected);
	    //=> false
	    //console.log(res.from.text.value);
	    //=> I [speak] Dutch!
	    //console.log(res.from.text.didYouMean);
	    //=> true
	}).catch(err => {
	    console.error(err);
	});
}

nextLanguage(input);
