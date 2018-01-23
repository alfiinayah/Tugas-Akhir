// JavaScript Document
var game = new Phaser.Game(1334, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() 
{
	game.load.image('bg','5/bg2.png');
	
	game.load.image('1', '5/01.png');
	game.load.image('2', '5/02.png');
	game.load.image('3', '5/03.png');
	game.load.image('4', '5/04.png');
	game.load.image('5', '5/05.png');
	game.load.image('6', '5/06.png');
	game.load.image('7', '5/07.png');
	game.load.image('8', '5/08.png');
	game.load.image('9', '5/09.png');
	game.load.image('10', '5/010.png');
	game.load.image('11', '5/011.png');
	game.load.image('12', '5/012.png');
	game.load.image('13', '5/013.png');
	game.load.image('14', '5/014.png');
	game.load.image('15', '5/015.png');
	game.load.image('16', '5/016.png');
	game.load.image('17', '5/017.png');
	
    game.load.spritesheet('btn1', '5/1.png', 110, 52);
	game.load.spritesheet('btn2', '5/2.png',  110, 52);
	game.load.spritesheet('btn3', '5/3.png',  110, 52);
	game.load.spritesheet('btn4', '5/4.png',  110, 52);
	game.load.spritesheet('btn5', '5/5.png',  110, 52);
	game.load.spritesheet('btn6', '5/6.png', 110, 52);
	game.load.spritesheet('btn7', '5/7.png',  110, 52);
	game.load.spritesheet('btn8', '5/8.png',  110, 52);
	game.load.spritesheet('btn9', '5/9.png',  110, 52);
	game.load.spritesheet('btn10', '5/10.png',  110, 52);
	game.load.spritesheet('btn11', '5/11.png', 110, 52);
	game.load.spritesheet('btn12', '5/12.png',  110, 52);
	game.load.spritesheet('btn13', '5/13.png',  110, 52);
	game.load.spritesheet('btn14', '5/14.png',  110, 52);
	game.load.spritesheet('btn15', '5/15.png',  110, 52);
	game.load.spritesheet('btn16', '5/16.png',  110, 52);
    
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

function create() {
		
	back = game.add.sprite(0, 0, 'bg');
	
	//randomSprite
	var x = 16;
	randomSprite = Math.floor(Math.random() * x) +1 ;
	console.log(randomSprite);
	
	
	game.add.sprite(450, 360, randomSprite);

	//button
	button1 = game.add.button(game.world.centerX -460,255,"btn1", function(){onClick(1);},this,1, 0, 1);
	button1.anchor.set(0.5,0.5);
	console.log('clicked');

	button2 = game.add.button(game.world.centerX -350, 255,"btn2", function(){onClick(2);},this,1, 0, 1);
	button2.anchor.set(0.5,0.5);
	
	button3 = game.add.button(game.world.centerX -460, 365,"btn3", function(){onClick(3);},this,1, 0, 1);
	button3.anchor.set(0.5,0.5);

	button4 = game.add.button(game.world.centerX -350,365,"btn4", function(){onClick(4);},this,1, 0, 1);
	button4.anchor.set(0.5,0.5);
	
	button5 = game.add.button(game.world.centerX -460,470,"btn5", function(){onClick(5);},this,1, 0, 1);
	button5.anchor.set(0.5,0.5);
	
	button6 = game.add.button(game.world.centerX -350,470,"btn6", function(){onClick(6);},this,1, 0, 1);
	button6.anchor.set(0.5,0.5);
	console.log('clicked');

	button7 = game.add.button(game.world.centerX -350, 565,"btn7", function(){onClick(7);},this,1, 0, 1);
	button7.anchor.set(0.5,0.5);
	
	button8 = game.add.button(game.world.centerX -460, 565,"btn8", function(){onClick(8);},this,1, 0, 1);
	button8.anchor.set(0.5,0.5);

	button9 = game.add.button(game.world.centerX +370,255,"btn9", function(){onClick(9);},this,1, 0, 1);
	button9.anchor.set(0.5,0.5);
	
	button10 = game.add.button(game.world.centerX +480,255,"btn10", function(){onClick(10);},this,1, 0, 1);
	button10.anchor.set(0.5,0.5);
	
	button11 = game.add.button(game.world.centerX +370,365,"btn11", function(){onClick(11);},this,1, 0, 1);
	button11.anchor.set(0.5,0.5);
	console.log('clicked');

	button12 = game.add.button(game.world.centerX +480, 365,"btn12", function(){onClick(12);},this,1, 0, 1);
	button12.anchor.set(0.5,0.5);
	
	button13 = game.add.button(game.world.centerX +370, 470,"btn13", function(){onClick(13);},this,1, 0, 1);
	button13.anchor.set(0.5,0.5);

	button14 = game.add.button(game.world.centerX +480,470,"btn14", function(){onClick(14);},this,1, 0, 1);
	button14.anchor.set(0.5,0.5);
	
	button15 = game.add.button(game.world.centerX +370,565,"btn15", function(){onClick(15);},this,1, 0, 1);
	button15.anchor.set(0.5,0.5);
	
	button16 = game.add.button(game.world.centerX +480,565,"btn16", function(){onClick(16);},this,1, 0, 1);
	button16.anchor.set(0.5,0.5);
	
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
