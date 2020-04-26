window.onload = function() {
	const playButton = document.querySelector ('.reproducir')
	const audio = document.querySelector ('audio')
	const atrasButton = document.querySelector ('.atras')
	const adelanteButton = document.querySelector ('.adelante')

	const tema1 = document.querySelector ('.tema1')
	const tema2 = document.querySelector ('.tema2')
	const tema3 = document.querySelector ('.tema3')

	
	playButton.onclick = function(){
		tema2.play()
			playButton.onclick = function(){
			tema2.pause()		
					playButton.onclick = function(){
			tema2.play()		
			}
		}
	}



	adelanteButton.onclick = function(){
		tema3.play()
	}	
	atrasButton.onclick = function(){
		tema1.play()
	}	
	
	
}

	







