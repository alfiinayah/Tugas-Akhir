var game = new Phaser.Game(1334, 640, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() 
{
	game.load.image('bg','PNG/Background1.png');
    game.load.image('satu', 'PNG/1.png');
	game.load.image('dua', 'PNG/2.png');
	game.load.image('tiga', 'PNG/3.png');
	game.load.image('empat', 'PNG/4.png');
	game.load.image('lima', 'PNG/5.png');
    game.load.image('piring1', 'PNG/piring.png');
	game.load.image('piring2', 'PNG/piring.png');
	game.load.image('piring3', 'PNG/piring.png');
	game.load.image('piring4', 'PNG/piring.png');
	game.load.image('piring5', 'PNG/piring.png');
	game.load.spritesheet('button', 'BAB2/check.png', 179, 65);
}

var one;
var two;
var three;
var four;
var five;
var teks;
var s1;
var s2;
var s3;
var s4;
var s5;

var text;
var waktu;
var temptimer = 0;

var check1=0;
var check2=0;
var check3=0;
var check4=0;
var check5=0;
var checkAll=0;
//var randomSprite;
var Score = 0;
var nilai;

//var acak =["satu", "dua", "tiga", "empat", "lima"];

function create() {
		
	back = game.add.sprite(0, 0, 'bg');
	
	s1 = game.add.sprite(110, 420, 'piring1');
	s2 = game.add.sprite(330, 390, 'piring2');
	s3 = game.add.sprite(550,420, 'piring3');
	s4 = game.add.sprite(770,390, 'piring4');
	s5 = game.add.sprite(990,420, 'piring5');
	
	//button
	var button = game.add.button(game.world.centerX -570 ,40,"button", openWindow,this,1, 0, 1);
	button.anchor.set(0.5,0.5);
	
	var data = [150, 370, 590, 810, 1030];
	
	
	for(i=0; i<5; i++){
		var randomSprite = Math.floor(Math.random() * 5); 
		console.log(randomSprite);
		var temp = data[i];
		data[i] = data[randomSprite];
		data[randomSprite] = temp;
	}
	
	//Semangka satu
    one = game.add.sprite(data[0], 20, 'satu');
    one.inputEnabled = true;
    one.input.enableDrag();
	
	//Semangka dua
    two = game.add.sprite(data[1], 20, 'dua');
    two.inputEnabled = true;
    two.input.enableDrag();
	
	//Semangka tiga
    three = game.add.sprite(data[2], 20, 'tiga');
    three.inputEnabled = true;
    three.input.enableDrag();

	//Semangka empat
    four = game.add.sprite(data[3], 20, 'empat');
    four.inputEnabled = true;
    four.input.enableDrag();

	//Semangka lima
    five = game.add.sprite(data[4], 20, 'lima');
    five.inputEnabled = true;
    five.input.enableDrag();
	
	//text = game.add.text(16, 16, 'Drag the sprites. Overlapping: false', { fill: '#000' });
	//teks = game.add.text(980, 10, 'Urutkan = belum berhasil' , {fill: '#000'});
	
	//Score
	nilai = game.add.text(1040, 205, 'Score : 0', {fontSize: '30px', fill: '#fff'});
}

function update() {
	nilai.text = 'Score :' +Score;
    if (checkOverlap(one, s1 ))
    {
		check1 = 1;
		//console.log(check1);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check =  0;}
    if (checkOverlap(two, s2 ))
    {
		check2 = 1;
		//console.log(check2);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check2 = 0;}
     if (checkOverlap(three, s3 ))
    {
		check3 = 1;
		//console.log(check3);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check3 = 0;}
    if (checkOverlap(four, s4 ))
    {
		check4 = 1;
		//console.log(check4);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check4 = 0;}
    if (checkOverlap(five, s5 ))
    {
		check5 = 1;
		//console.log(check5);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
    else{check5 = 0;}
	//if(check1 + check2 + check3 + check4 + check5 == 5){teks.text = 'Sukses';}
	//else{teks.text = 'belum berhasil';}
}

function openWindow(){
	if(check1 + check2 + check3 + check4 + check5 == 5 && temptimer > 0)
	{ 
		alert('Berhasil')
		Score += 100 * temptimer;
		alert(nilai.text = 'Score : ' +Score);
		//clearInterval(berhenti);
		game.state.restart();
		return true; 
		//teks.text = 'Sukses';
	}
	else{
		alert('Coba Lagi');
		game.state.restart();
		waktu == 0;
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
