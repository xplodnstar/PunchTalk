function play() {

	var name = prompt('What is your name?')
	var color = prompt('What is your favorite color?')
	var quest = prompt('What is the average air speed of an unladen swallow? African, European')

	if (color == 'red') {
		alert (name + ", " + quest + " swallows don't come in " + color + ".")
	} else if (color == 'blue') {
		alert (name + ", " + quest + " swallows don't come in " + color + ".")
	} else if (color == 'purple') {
		alert (name + ", " + quest + " swallows don't come in " + color + ".")
	} else {
		var quest = prompt('What is your quest? To find the Holy Grail, To create the perfect liquid line')
		alert (name + ", you have chosen poorly")
	}

	var again = confirm('Would you like to play again?')
		if (again) {
			play()
		}
}

play()

/*  - Create function to play
	- add variables (promPts, confirms, alerts)
	- else if and else statements
	- create the functionto play again
	- close the play function
	- create the function to play again and call play function
	*/