// JavaScript Document
var game = new Phaser.Game(1334, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() 
{
	game.load.image('bg','apel/bg.png');
    game.load.image('1', 'apel/01.png');
	game.load.image('2', 'apel/02.png');
	game.load.image('3', 'apel/03.png');
	game.load.image('4', 'apel/04.png');
	game.load.image('5', 'apel/05.png');
    game.load.spritesheet('btn1', 'apel/btn_06.png', 183, 183);
	game.load.spritesheet('btn2', 'apel/btn_07.png', 183, 183);
	game.load.spritesheet('btn3', 'apel/btn_08.png', 183, 183);
	game.load.spritesheet('btn4', 'apel/btn_09.png', 183, 183);
	game.load.spritesheet('btn5', 'apel/btn_10.png', 183, 183);
	//game.load.spritesheet('button', 'BAB2/check.png', 179, 65);
}

var button1;
var button2;
var button3;
var button4;
var button5;

var randomSprite;

var text;
var waktu;
var temptimer = 0;
var soal;

var Score = 0;
var nilai;

//var acak =["satu", "dua", "tiga", "empat", "lima"];

function create() {
		
	back = game.add.sprite(0, 0, 'bg');
	
	//randomSprite
	var x = 5;
	randomSprite = Math.floor(Math.random() * x) +1 ;
	console.log(randomSprite+5);
	
	
	game.add.sprite(250, 157, randomSprite);
	
	//button

	button1 = game.add.button(game.world.centerX -560,625,"btn1", function(){onClick(6);},this,1, 0, 1);
	button1.anchor.set(0.5,0.5);
	console.log('clicked');

	button2 = game.add.button(game.world.centerX -360, 625,"btn2", function(){onClick(7);},this,1, 0, 1);
	button2.anchor.set(0.5,0.5);
	
	button3 = game.add.button(game.world.centerX -160, 625,"btn3", function(){onClick(8);},this,1, 0, 1);
	button3.anchor.set(0.5,0.5);

	button4 = game.add.button(game.world.centerX +40 ,625,"btn4", function(){onClick(9);},this,1, 0, 1);
	button4.anchor.set(0.5,0.5);
	
	button5 = game.add.button(game.world.centerX +240,625,"btn5", function(){onClick(10);},this,1, 0, 1);
	button5.anchor.set(0.5,0.5);
	
	soal = game.add.text(420, 30, 'Pilihlah Angka Sesuai dengan Jumlah Apel yang Tersedia', {fontSize : '24px', fill:'#000'});
	//onClick(222);
	//Score
	nilai = game.add.text(1140, 10, 'Score : ', {fontSize: '30px', fill: '#fff'});
}


function update() {
	nilai.text = 'Score : '+Score;
	
}

function onClick(param){
	console.log(param);
	if(param==randomSprite+5 && temptimer > 0 )
		{
			alert('Berhasil');
			 Score += 100 * temptimer;
			 alert(nilai.text = 'Score : ' +Score);
			 //clearInterval(berhenti);
			 game.state.restart();
			 console.log('button clicked');
			 return true; 
		}
	else
		{
			 alert('Coba Lagi');
			 skor = 0;
			// waktu = 0;
			 game.state.restart();
			 return false;
		}
		
}
function checkButton(){
	 
}


function startTimer(duration, display){
		var timer = duration, seconds;
    	berhenti = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
		
		temptimer=timer;

        if (timer > 0) {
            timer--;
        }
		else{
			alert('Waktu Habis');
			clearInterval(berhenti);
		}
    }, 1000);	
	
	}
	
	window.onload = function () {
    	var sixtysecond = 60 * 1.5,
        display = document.querySelector('#time');
    	startTimer(sixtysecond, display);
	};
