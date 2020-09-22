// Обработка событий нажатия на клавиши
document.addEventListener('keydown', function(event) {
	
	switch(event.keyCode){

		// нажатие кливиши "влево""
		case 37:

			// меняем картинку ёжика по направлению влево
			ezhik.innerHTML = "<img src=\"img/game-ezhik-left.png\">";

			// если ёжик не вышел за пределы дерева, то он двигается дальше, иначе упирается в границу слева
			if(ezhik.offsetLeft >= tree.offsetLeft) {
				ezhik.style.left = ezhik.offsetLeft - 10 + "px";
			} else {
				ezhik.style.left = ezhik.offsetLeft + 2 + "px"; // эффект отскакивания от границы
			}

			break;

		// нажатие кливиши "вправо""
		case 39:

			// меняем картинку ёжика по направлению вправо
			ezhik.innerHTML = "<img src=\"img/game-ezhik-right.png\">";
			
 			// если ёжик не вышел за пределы дерева, то он двигается дальше, иначе упирается в границу справа
			if(ezhik.offsetLeft + ezhik.clientWidth <= tree.offsetLeft + tree.clientWidth) {
				ezhik.style.left = ezhik.offsetLeft + 10 + "px";
			} else {
				ezhik.style.left = ezhik.offsetLeft - 2 + "px"; // эффект отскакивания от границы
			}

			break;
	}

});