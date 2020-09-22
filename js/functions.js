// Файл для описание работы всех функций

/*=================================
Функции создания элементов игры
===================================*/

// Функция создания инфо-блока
function createInfoBlock() {

   // создание блока <div id = "info-block">
   infoBlock = document.createElement("div");
   infoBlock.id = "info-block";
   
   // добавление элемента счет на игровое поле
   playGround.appendChild(infoBlock);

   // запускаем фоновые звуки игры
   bgAudio.src = "sounds/birds2.mp3";
   bgAudio.play();

}

// Функция создания блока таймера 
function createTimerBlock() {
   
   // создаем блок clock
   var clock = document.createElement("div");
   clock.id = "clock";

   // помещаем в блок картинку таймера
   clock.innerHTML = "<img src=\"img/clock.png\">";

   // var img = document.createElement("img");
   // img.src = "img/clock.png";

   // в clock добавляем span с таймером
   var timerBlock = document.createElement("span");

   // прописываем спану id и помещаем в него текст
   timerBlock.id = "timer";
   timerBlock.innerText = "0";

   // добавляем спан в clock
   clock.appendChild(timerBlock);

   // добавляем clock в инфо-блок
   infoBlock.appendChild(clock);
}

// Функция создания блока набраных очков
function createPointsBlock() {
   
   // создаем блок набраных очков <div id="points-block"></div>
   pointsBlock = document.createElement("div"); 

   // помещаем в блок картинку счета
   pointsBlock.innerHTML = "<img src=\"img/score.png\">";

   // прописываем id = "points-block" 
   pointsBlock.id = "points-block";

   // создаем спан points - счетчик очков игры
   points = document.createElement("span"); 

   // прописываем счетчику id
   points.id = "points";

   // прописываем счетчику нулевой отсчет 
   points.innerText = 0;

   // добавляем счетчик в блок набраных очков <div id="points-block"></div>
   pointsBlock.appendChild(points);

   // добавляем блок набраных очков в блок <div id="info-block"></div>
   infoBlock.appendChild(pointsBlock);

} 

// Функция создания блока жизней
function createLifesBlock() {
   
   // создаем блок div - <div id="lifes">
   lifes = document.createElement("div");
   
   // прописываем id "lifes" тегу div
   lifes.id = "lifes";
   
   // текущее количество жизней
   var currentLifes = 0;
   
   // общее количество жизней lifesNumber = 3   
   while (currentLifes < lifesNumber) {

      // создаем span для текущего количества жизней currentLifes 
      var span = document.createElement("span");
      
      // помещаем в спан картинку жизни
      span.innerHTML = "<img src=\"img/lifes-item.png\">";
      
      // добавляем span в блок жизней
      lifes.appendChild(span);
      
      // увеличиваем текущее количество жизней на 1
      currentLifes = currentLifes + 1;

   }
   
   // добавляем блок жизни lifes в info-block 
   infoBlock.appendChild(lifes);
}

// Функция создания дерева
function createTree() {
   
   // создаем блок дерева <div id="tree">
   tree = document.createElement("div");

   // присваиваем ему id
   tree.id = "tree";

   // помещаем в блок картинку дерева
   tree.innerHTML = "<img src=\"img/tree.png\">";

   // Добавляем дерево на игровое поле
   gameArea.appendChild(tree);
}

// Функция создания ёжика
function createEzhik() {
   ezhik = document.createElement("div");
   ezhik.id = "ezhik";
   ezhik.innerHTML = "<img src=\"img/game-ezhik-right.png\">";

   gameArea.appendChild(ezhik);
}

// Функция создания яблока <div id="apple"></div>
function createApple() {
   
   // создание элемента яблоко и присвоение ему id
   var apple = document.createElement("div");
   apple.id = "apple";

   // помещаем в блок картинку яблока
   apple.innerHTML = "<img src=\"img/apple.png\">";

   // случайный выбор одной из семи веток с яблоком
   apple.className = randomBrach();

   // если осталась одна жизнь, создаем аптечку
   if(lifesNumber == 1) {
               
      // аптечка появляется с вероятностью 20%
      var isAid = random(1, 5);

      if(isAid == 1) {
         apple.className = apple.className + " aid";
         apple.innerHTML = "<img src=\"img/aid.png\">";
      }
      
   }
   
   // падение яблока вниз и его удаление
   setTimeout(function() {
      
      appleMove(apple);

   }, 500);

   // добавление элемента яблоко на игровое поле
   gameArea.appendChild(apple);
}

// Функция создания блока окончания игры
function createFinalBlock() {
   
   // создаем блок <div id="final-block"></div>
   finalBlock = document.createElement("div");
   finalBlock.id = "final-block";
   
   // создаем блок вывода результатов игры
   var gameResults = document.createElement("div");
   gameResults.id = "game-results";
   
   // создаем h2 с набраными очками <h2>Your score</h2>
   var h2 = document.createElement("h2");
   h2.innerText = "Your score: " + counter + " points";
   
   // создаем h3 с результатом времени 
   var h3 = document.createElement("h3");
   h3.innerText = "Your time: " + gameTime(timer.innerText);
   
   // добавляем h2 (очки) в блок результатов игры
   gameResults.appendChild(h2);
   
   // добавляем h3 (время) в блок результатов игры
   gameResults.appendChild(h3);
   
   // добавляем блок результатов игры в блок окончания игры
   finalBlock.appendChild(gameResults);
   
   // создаем кнопку рестарта игры
   restartButton = document.createElement("button");
   restartButton.id = "restart-button";
   restartButton.innerText = "Try again!";
   
   // добавляемю кнопку рестарта игры в блок окончания игры
   finalBlock.appendChild(restartButton);
   
   // добавляем блок окончания игры в поле игры
   playGround.appendChild(finalBlock);

   // запускаем озвучку финального блока
   bgAudio.src = "sounds/final.wav";
   bgAudio.play();

}

/*=================================
Функции удаления элементов игры
===================================*/

// удаление старт. блока
function removeStartBlock() {
   startBlock.remove();
}

// удаление инфо-блока
function removeInfoBlock() {
   infoBlock.remove();
}

// удаление блока жизней
function removeLifesBlock() {
   lifes.remove();
}

// очистка игрового поля
function cleanPlayground() {
   playGround.innerText = "";
}

/*=================================
Вспомогательные функции
===================================*/

// Функция полета яблока
function appleMove(apple) {
   // меняем свойство перехода, чтобы яблоко двигалось быстрее
   apple.style.transition = "all 0s";

   // таймер падения яблока - каждые 10мс опускает его вниз
   var timerApple = setInterval(function() {
         
      // изменяем координаты яблока по вертикали
      apple.style.top = apple.offsetTop + 1 + "px";

      isHit(apple);

   }, speed);
}

// Функция проверки попадания яблока в корзину
function isHit(apple) {
   
   // определяем переменные габаритов ёжика и яблока по горизонтали
   var ezhikLeft = ezhik.offsetLeft; // левая сторона ёжика
   var appleLeft = apple.offsetLeft; // левая сторона яблока
   var ezhikRight = ezhik.offsetLeft + ezhik.offsetWidth; // правая сторона ёжика
   var appleRight = apple.offsetLeft + apple.offsetWidth; // правая сторона яблока

   // проверяем попадание яблока в корзину
   if(apple.offsetTop == 495 && ezhikLeft <= appleLeft && ezhikRight >= appleRight && ezhikLeft <= appleRight && appleLeft <= ezhikRight) {
            
      // если яблоко - аптечка
      if(apple.className.includes("aid") == true) {
               
         // увеличиваем количество жизней
         lifesNumber = lifesNumber + 1;

          // уводим прозрачность атпечки в 0
         apple.style.opacity = "0";

         // запускаем звук для попадания аптечки
         appleAudio.src = "sounds/aid.wav";
         appleAudio.play();

         // удаляем аптечку
         apple.remove();

         // создаем новое яблоко
         createApple();

         // обновляем блок жизней   
         removeLifesBlock();
         createLifesBlock();

         // очищаем таймер полета яблока  
         clearInterval(timerApple);

      } else { 

         // увеличиваем счет при попадании яблока в корзину
         counter = counter + 1;
                  
         // выводим счет в блок счета
         points.innerText = counter;

         // если коэффициент скороти полета яблок больше 0, увеличиваем скорость
         if(speed > 0) {
            speed = speed - 1;
         }

         // запускаем звук для попадания
         appleAudio.src = "sounds/point.wav";
         appleAudio.play();

         // уводим яблока прозрачность в 0
         apple.style.opacity = "0";

         // удаляем яблоко
         apple.remove();

         // создаем новое яблоко
         createApple();

         // очищаем таймер полета яблока  
         clearInterval(timerApple);

      }
   
   } else {

      // проверяем выход яблока за пределы игрового поля
      if(apple.offsetTop > 560) {
            
         // если яблоко - аптечка, то жизнь не отнимаем
         if(apple.className.includes("aid") == true) {
               
            // уводим яблока прозрачность в 0
            apple.style.opacity = "0";

            // удаляем яблоко
            apple.remove();

            // создаем новое яблоко
            createApple();

            // очищаем таймер полета яблока  
            clearInterval(timerApple);

         } else {

            // уводим яблока прозрачность в 0
               apple.style.opacity = "0";

            // удаляем яблоко
            apple.remove();

            // создаем новое яблоко
            createApple();

            // уменьшаем количество жизней
            lifesNumber = lifesNumber - 1;

            // запускаем звук для потерянного яблока
            appleAudio.src = "sounds/lose.wav";
            appleAudio.play();
               
            // если жизней не осталось, завершаем игру
            if(lifesNumber == 0) {
                  gameOver();
            }

            // обновляем блок жизней   
            removeLifesBlock();
            createLifesBlock();

            // очищаем таймер полета яблока  
            clearInterval(timerApple);

         }  
            
      }
   }

}

// Функция случайного выбора ветки для создания яблока
function randomBrach() {

   // случайный выбор одной из семи веток
   var branch = random(1, 7);

   // Присвоение класса яблоку в зависимости от выбранной ветки
   switch (branch) {
     
     case 1:
       return "apple brach1";
       break;
     
     case 2:
       return "apple brach2";
       break;
     
     case 3:
       return "apple brach3";
       break;
     
     case 4:
       return "apple brach4";
       break;
     
     case 5:
       return "apple brach5";
       break;
     
     case 6:
       return "apple brach6";
       break;
     
     case 7:
       return "apple brach7";
       break;

   }

}

// Функция случайного числа в диапазоне от min до max
function random(min, max) {
   
   // берем случайное число от min до max и округляем
   var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

   return randomNumber;
}

// Функция красивого вывода времени, потраченного на игру
function gameTime(time) {
   
   // если время игры больше минуты, то выводим "X минут + Y секунд", иначе выводим "Y секунд"
   if(time > 60) {
     return Math.floor(time / 60) + " m " + (time - 60) + " s"; 
   } else {
      return time + " s";
   }
   
}