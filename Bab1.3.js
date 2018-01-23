// JavaScript Document
// JavaScript Document
var game = new Phaser.Game(1334, 740, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){
	game.load.image('bg','PNG/bg_1.3.png');
    game.load.image('1', 'PNG/01.png');
	game.load.image('2', 'PNG/02.png');
	game.load.image('3', 'PNG/03.png');
	game.load.image('4', 'PNG/04.png');
	game.load.image('5', 'PNG/05.png');
	game.load.image('6', 'PNG/06.png');
	game.load.image('7', 'PNG/07.png');
	game.load.image('8', 'PNG/08.png');
	game.load.image('9', 'PNG/09.png');
	game.load.image('10', 'PNG/10.png');
	game.load.image('sepuluh', 'PNG/10.png');
    game.load.image('btn1', 'PNG/11.png');
	game.load.image('btn2', 'PNG/12.png');
	game.load.image('btn3', 'PNG/13.png');
	game.load.image('btn4', 'PNG/14.png');
	game.load.image('btn5', 'PNG/15.png');
	game.load.image('btn6', 'PNG/16.png');
	game.load.image('btn7', 'PNG/17.png');
	game.load.image('btn8', 'PNG/18.png');
	game.load.image('btn9', 'PNG/19.png');
	game.load.image('btn10', 'PNG/20.png');
	game.load.spritesheet('button', 'PNG/jawab.png');
	game.load.spritesheet('click', 'BAB2/check.png', 179, 65);
}
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ten;

var jawab;
var jawabover=0;
 
var randomA;
var randomB;
var c;
var Score = 0;
var waktu;

var text;


function create() {
		
	back = game.add.sprite(0, 0, 'bg');
	
	//randomSprite
		var x = 10;
		randomA = Math.floor(Math.random() * x) +1 ;
		console.log(randomA);
		
		var y = 1;
		randomB = Math.floor(Math.random() * y) +10 ;
		console.log(randomB);
		
		c = randomA + randomB;
		console.log(c);
		
	game.add.sprite(60, 90, randomB);
	game.add.sprite(730, 90, randomA);
	
	jawab = game.add.sprite(620, 295, 'button');
	
	//button1
	one = game.add.sprite(140, 315, 'btn1');
    one.inputEnabled = true;
    one.input.enableDrag();
	
	//button2
	two = game.add.sprite(280, 315, 'btn2');
    two.inputEnabled = true;
    two.input.enableDrag();
	
	//button3
	three = game.add.sprite(420, 315, 'btn3');
    three.inputEnabled = true;
    three.input.enableDrag();
	
	//button4
	four = game.add.sprite(790, 315, 'btn4');
    four.inputEnabled = true;
    four.input.enableDrag();
	
	//button5
	five = game.add.sprite(930, 315, 'btn5');
    five.inputEnabled = true;
    five.input.enableDrag();
	
	//button6
	six = game.add.sprite(1070, 315, 'btn6');
    six.inputEnabled = true;
    six.input.enableDrag();
	
	//button7
	seven = game.add.sprite(190, 495, 'btn7');
    seven.inputEnabled = true;
    seven.input.enableDrag();
	
	//button8
	eight = game.add.sprite(370, 495, 'btn8');
    eight.inputEnabled = true;
    eight.input.enableDrag();
	
	//button9
	nine = game.add.sprite(840, 495, 'btn9');
    nine.inputEnabled = true;
    nine.input.enableDrag();
	
	//button10
	ten = game.add.sprite(1020, 495, 'btn10');
    ten.inputEnabled = true;
    ten.input.enableDrag();
	
	var button = game.add.button(game.world.centerX -570 ,40,"click", openWindow,this,1, 0, 1);
		button.anchor.set(0.5,0.5);
	
	text = game.add.text(226, 12, 'Pilihlah Angka Sesuai dengan Jumlah Strawberry yang Tersedia', { fill: '#000000' });
	//text = game.add.text(16, 16, 'Drag the sprites. Overlapping: false', { fill: '#ffffff' });
	nilai = game.add.text(1100, 15, 'Score : ', {fontSize: '30px', fill: '#fff'});
}

function update() {
	nilai.text = 'Score :' +Score;
	
	if (checkOverlap(one, jawab ))
    {
		jawabover=11;
		check1 = 1;
		console.log(check1);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check1 =  0;}
    if (checkOverlap(two, jawab ))
    {
		jawabover=12;
		check2 = 1;
		console.log(check2);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check2 = 0;}
     if (checkOverlap(three, jawab ))
    {
		jawabover=13;
		check3 = 1;
		console.log(check3);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check3 = 0;}
    if (checkOverlap(four, jawab ))
    {	
		jawabover=14;
		check4 = 1;
		console.log(check4);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check4 = 0;}
    if (checkOverlap(five, jawab ))
    {
		jawabover=15;
		check5 = 1;
		console.log(check5);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
    else{check5 = 0;}
	if (checkOverlap(six, jawab ))
    {
		jawabover=16;
		check6 = 1;
		console.log(check6);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check6 =  0;}
    if (checkOverlap(seven, jawab ))
    {
		jawabover=17;
		check7 = 1;
		console.log(check7);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check7 = 0;}
     if (checkOverlap(eight, jawab ))
    {
		jawabover=18;
		check8 = 1;
		console.log(check8);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check8 = 0;}
    if (checkOverlap(nine, jawab ))
    {	
		jawabover=19;
		check9 = 1;
		console.log(check9);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check9 = 0;}
    if (checkOverlap(ten, jawab ))
    {
		jawabover=20;
		check10 = 1;
		console.log(check10);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
    else{check10 = 0;}
	
}

function openWindow(){
	if(jawabover == c && temptimer > 0)
	{ 
		alert('Berhasil')
		Score += 100 * temptimer;
		alert(nilai.text = 'Score : ' +Score);
		game.state.restart();
		return true; 
	}
	else{
		alert('Coba Lagi');
		game.state.restart();
		return false;
		//teks.text = 'belum berhasil';
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
