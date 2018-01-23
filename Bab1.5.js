// JavaScript Document
// JavaScript Document
// JavaScript Document
var game = new Phaser.Game(1334, 740, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){
	game.load.image('bg','PNG/bg_1.5.png');
    game.load.image('1', 'BAB1/1.png');
	game.load.image('2', 'BAB1/2.png');
	game.load.image('3', 'BAB1/3.png');
	game.load.image('4', 'BAB1/4.png');
	game.load.image('5', 'BAB1/5.png');
	game.load.image('6', 'BAB1/6.png');
	game.load.image('7', 'BAB1/7.png');
	game.load.image('8', 'BAB1/8.png');
	game.load.image('9', 'BAB1/9.png');
	game.load.image('10', 'BAB1/10.png');
    game.load.image('btn1', 'PNG/lebihbanyak.png');
	game.load.image('btn2', 'PNG/lebihsedikit.png');
	game.load.image('btn3', 'PNG/samadengan.png');
	game.load.spritesheet('button', 'PNG/answer.png');
	game.load.spritesheet('click', 'BAB2/check.png', 179, 65);
}
var one;
var two;
var three;

var lebihdari;
var lebihsedikit;
var samadengan;

var c;
var d;
var e;
var jawabOver=0;
var nilai=0;

var jawab;

var randomA;
var randomB;

var Score = 0;
var waktu;

var text;

var temptimer=0;


function create() {
		
	back = game.add.sprite(0, 0, 'bg');
	
	//randomSprite;
		randomA = Math.floor(Math.random() * 10) +1 ;
		console.log(randomA);

		randomB = Math.floor(Math.random() * 10) +1 ;
		console.log(randomB);
		
	game.add.sprite(900, 325, randomB);
	game.add.sprite(30, 325, randomA);
	
	jawab = game.add.sprite(550, 355, 'button');
	
	//button1
	one = game.add.sprite(250, 180, 'btn1');
    one.inputEnabled = true;
    one.input.enableDrag();
	
	//button2
	two = game.add.sprite(530, 180, 'btn2');
    two.inputEnabled = true;
    two.input.enableDrag();
	
	//button3
	three = game.add.sprite(810, 180, 'btn3');
    three.inputEnabled = true;
    three.input.enableDrag();
	
	var button = game.add.button(game.world.centerX -570 ,40,"click", openWindow,this,1, 0, 1);
		button.anchor.set(0.5,0.5);
	
	text = game.add.text(226, 12, 'Bandingkan banyak strawbery', { fill: '#000000' });
	nilai = game.add.text(1140, 10, 'Score : ', {fontSize: '30px', fill: '#fff'});
}


function update() {
	nilai.text = 'Score :' +Score;
	if (checkOverlap(one, jawab ))
    {
		check =1;
		nilai = 1;
		console.log(check);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check =  0;}
    if (checkOverlap(two, jawab ))
    {
		check1 =1;
		nilai = 2;
		console.log(check1);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check1 = 0;}
     if (checkOverlap(three, jawab ))
    {
		check2 =1;
		nilai = 3;
		console.log(check2);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check2 = 0;}
}


function openWindow(){
	if(nilai == 1 && temptimer > 0)
	{
		if(randomA > randomB)
		{
			alert('Berhasil')
			Score += 100 * temptimer;
			alert(nilai.text = 'Score : ' +Score);
			//clearInterval(berhenti);
			game.state.restart();
			return true; 
		}
		else
		{
			alert('Coba Lagi');
			game.state.restart();
			return false;
		}
	}
	else if(nilai == 2 && temptimer > 0)
	{
		if(randomA < randomB)
		{
			alert('Berhasil')
			Score += 100 * temptimer;
			alert(nilai.text = 'Score : ' +Score);
			//clearInterval(berhenti);
			game.state.restart();
			return true; 
		}
		else
		{
			alert('Coba Lagi');
			game.state.restart();
			return false;
		}
	}
	else if(nilai == 3 && temptimer > 0)
	{
		if(randomA == randomB)
		{
			alert('Berhasil')
			Score += 100 * temptimer;
			alert(nilai.text = 'Score : ' +Score);
			//clearInterval(berhenti);
			game.state.restart();
			return true; 
		}
		else
		{
			alert('Coba Lagi');
			game.state.restart();
			return false;
		}
	}
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

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
		else
		{
			alert('Waktu Habis');
			clearInterval(berhenti);
		}
    }, 1000);	
	
	}
	
	window.onload = function () {
    	var sixtysecond = 60 * 1,
        display = document.querySelector('#time');
    	startTimer(sixtysecond, display);
	};
