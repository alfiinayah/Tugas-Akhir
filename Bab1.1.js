// JavaScript Document
var game = new Phaser.Game(1334, 630, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() 
{
	game.load.image('bg','PNG/bg_1.1.png');
    game.load.image('1', 'PNG/satu.png');
	game.load.image('2', 'PNG/dua.png');
	game.load.image('3', 'PNG/tiga.png');
	game.load.image('4', 'PNG/empat.png');
	game.load.image('5', 'PNG/lima.png');
    game.load.spritesheet('btn1', 'PNG/one.png', 160, 152);
	game.load.spritesheet('btn2', 'PNG/two.png', 160, 152);
	game.load.spritesheet('btn3', 'PNG/three.png', 160, 152);
	game.load.spritesheet('btn4', 'PNG/four.png', 160, 152);
	game.load.spritesheet('btn5', 'PNG/five.png', 160, 152);
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
	console.log(randomSprite);
	
	
	game.add.sprite(580, 260, randomSprite);

	//button
	button1 = game.add.button(game.world.centerX -520,125,"btn1", function(){onClick(1);},this,1, 0, 1);
	button1.anchor.set(0.5,0.5);
	console.log('clicked');

	button2 = game.add.button(game.world.centerX -350, 125,"btn2", function(){onClick(2);},this,1, 0, 1);
	button2.anchor.set(0.5,0.5);
	
	button3 = game.add.button(game.world.centerX -520, 300,"btn3", function(){onClick(3);},this,1, 0, 1);
	button3.anchor.set(0.5,0.5);

	button4 = game.add.button(game.world.centerX -350,300,"btn4", function(){onClick(4);},this,1, 0, 1);
	button4.anchor.set(0.5,0.5);
	
	button5 = game.add.button(game.world.centerX -520,475,"btn5", function(){onClick(5);},this,1, 0, 1);
	button5.anchor.set(0.5,0.5);
	
	soal = game.add.text(530, 30, 'Pilihlah Angka Sesuai dengan Jumlah Pisang yang Tersedia', {fontSize : '24px', fill:'#000'});
	
	//Score
	nilai = game.add.text(1140, 5, 'Score : 0', {fontSize: '30px', fill: '#fff'});
}


function update() {
	nilai.text = 'Score :' +Score;
	
}

function onClick(param){
	 if(param==randomSprite && temptimer > 0 )
		 {
			 alert('Berhasil');
			 Score += 100 * temptimer;
			 alert(nilai.text = 'Score : ' +Score);
			 //clearInterval(berhenti);
			 game.state.restart();
			 return true; 
		 }
		 else
		 {
			 alert('Coba Lagi');
			 skor = 0;
			 game.state.restart();
			 return false;
		 }
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
