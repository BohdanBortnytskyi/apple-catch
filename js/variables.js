
// Блок игрового поля
var playGround = document.querySelector("#play-ground");

// Стартовый блок игры
var startBlock = document.querySelector("#start-block");

// Кнопка начала игры
var startButton = document.querySelector("#start-button");

// Блок игровой зоны ёжика
var gameArea = document.querySelector("#game-area");

// коэффициент скорости падения яблок
var speed = 5;

// Блок ёжика
var ezhik = null;

// аудио для фона
var bgAudio = new Audio();
bgAudio.preload = "auto";

// аудио для событий с яблоком
var appleAudio = new Audio();
appleAudio.preload = "auto";

// Блок набранных очков
var points = null;

// Счетчик набранных очков
var counter = 0;

// Блок жизней
var lifes =  null;

// Количество жизней ёжика
var lifesNumber = 3;

// Блок дерева
var tree = null;

// Информационный блок
var infoBlock = null;

// Блок таймера игры
var timerBlock = null;

// Счетчик таймера игры
var timer = null;

// Блок набранных очков
var pointsBlock = null;

// Блок жизней ёжика
var lifesBlock = null;

// Финальный блок
var finalBlock = null;

// Кнопка рестарта игры
var restartButton = null;