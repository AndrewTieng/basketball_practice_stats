var currentDrill = {
	one: {
		shotName: 'Hesitation-Right',
		shotMake: 0,
		shotMiss: 0
	},
	two: {
		shotName: 'Hesitation-Left',
		shotMake: 0,
		shotMiss: 0
	},
	three: {
		shotName: '1-Dribble Pull-up-Right',
		shotMake: 0,
		shotMiss: 0
	},
	four: {
		shotName: '1-Dribble Pull-up-Left',
		shotMake: 0,
		shotMiss: 0
	},
	five: {
		shotName: 'Freethrow',
		shotMake: 0,
		shotMiss: 0
	}
};
currentDrill.shotName.shotMake






$(document).ready(function(){
	$('#shot-make').click(function(){
		shotMake = shotMake++; 
	});
	$('#shot-miss').click(function(){
		shotMiss = shotMiss++;
	});
	$('#next-drill').click(function(){

	});
});


