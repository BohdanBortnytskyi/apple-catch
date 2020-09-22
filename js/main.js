// Главный файл, в котором вызываются функции и действия игры

 // Функция запуска игры
 function start() {

 	// клик на старт. кнопку запускает игру
 	startButton.onclick = letsPlay;

}

// Функция начала игры
function letsPlay () {

	// удаляем старт. блок
	removeStartBlock();

	// задержка перед появлением инфо-блока
	setTimeout(function() {

		// создаем инфо-блок
		createInfoBlock();

		// создаем блок таймера
		createTimerBlock();

		// создаем блок очков
		createPointsBlock();

		// создаем блок жизней
		createLifesBlock();

	}, 500);

	// задержка перед появлением дерева
	setTimeout(function() {

		// создаем блок дерева
		createTree();


	}, 1000);

	// задержка перед появлением ёжика`
	setTimeout(function() {

		// создаем ёжика
		createEzhik();

	}, 1500);

	// задержка перед включением таймера и появлением яблок
	setTimeout(function() {

		// запускаем таймер игры
		timerGame();

		// создаем яблоки
		createApple();

	}, 2000);
}

// выполняется при загрузке/обновлении страницы
start();

// Функция таймера игры
function timerGame() {
	timer = document.querySelector("#timer");
	var i = Number(timer.innerText);
	var clock = setInterval(function() {
		i = i + 1;
		timer.innerText = i;
	}, 1000);
}

// Функция рестарта игры
function restart() {

	// обновляем страницу
	window.location.reload();

}

// Функция окончания игры
function gameOver() {

	// удаляем инфо-блок
	removeInfoBlock();

	// очищаем игровое поле
	cleanPlayground();

	// вызываем задержку
	setTimeout(function() {
		
		// создаем блок завершения игры
		createFinalBlock();

		// определяем переменную для кнопки рестарта
		restartButton = document.querySelector("#restart-button");
		
		// клик на кнопку рестарта перезапускает игру
 		restartButton.onclick = restart;

	}, 200)

}
