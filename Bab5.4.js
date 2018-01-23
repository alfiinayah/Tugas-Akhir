// JavaScript Document
// JavaScript Document
var game = new Phaser.Game(1334, 740, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() 
{
	game.load.image('bg','5/bg.png');
    game.load.image('satu', '5/21.png');
	game.load.image('dua', '5/22.png');
	game.load.image('tiga', '5/23.png');
	game.load.image('empat', '5/24.png');
	game.load.image('lima', '5/25.png');
	game.load.image('enam', '5/26.png');
	game.load.image('tujuh', '5/27.png');
	game.load.image('delapan', '5/28.png');
	game.load.image('sembilan', '5/29.png');
	game.load.image('sepuluh', '5/30.png');
    game.load.image('piring1', '5/shadow.png');
	game.load.image('piring2', '5/shadow.png');
	game.load.image('piring3', '5/shadow.png');
	game.load.image('piring4', '5/shadow.png');
	game.load.image('piring5', '5/shadow.png');
	game.load.image('piring6', '5/shadow.png');
	game.load.image('piring7', '5/shadow.png');
	game.load.image('piring8', '5/shadow.png');
	game.load.image('piring9', '5/shadow.png');
	game.load.image('piring10', '5/shadow.png');
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
var s6;
var s7;
var s8;
var s9;
var s10;

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


function create() {
		
	back = game.add.sprite(0, 0, 'bg');
	
	s1 = game.add.sprite(125, 632, 'piring1');
	s2 = game.add.sprite(243, 632, 'piring2');
	s3 = game.add.sprite(359, 632, 'piring3');
	s4 = game.add.sprite(477, 632, 'piring4');
	s5 = game.add.sprite(595, 632, 'piring5');
	s6 = game.add.sprite(713, 632, 'piring1');
	s7 = game.add.sprite(831, 632, 'piring2');
	s8 = game.add.sprite(949, 632, 'piring3');
	s9 = game.add.sprite(1067, 632, 'piring4');
	s10 = game.add.sprite(1185, 632, 'piring5');
	
	//button
	var button = game.add.button(game.world.centerX -570 ,40,"button", openWindow,this,1, 0, 1);
	button.anchor.set(0.5,0.5);
	
	var data = [104, 208, 312, 416, 520, 624, 728, 832, 936, 1040];
	
	
	for(i=0; i<10; i++){
		var randomSprite = Math.floor(Math.random() * 10); 
		console.log(randomSprite);
		var temp = data[i];
		data[i] = data[randomSprite];
		data[randomSprite] = temp;
	}
	
	//Semangka satu
    one = game.add.sprite(data[0], 150, 'satu');
    one.inputEnabled = true;
    one.input.enableDrag();
	
	//Semangka dua
    two = game.add.sprite(data[1], 150, 'dua');
    two.inputEnabled = true;
    two.input.enableDrag();
	
	//Semangka tiga
    three = game.add.sprite(data[2], 150, 'tiga');
    three.inputEnabled = true;
    three.input.enableDrag();

	//Semangka empat
    four = game.add.sprite(data[3], 150, 'empat');
    four.inputEnabled = true;
    four.input.enableDrag();

	//Semangka lima
    five = game.add.sprite(data[4], 150, 'lima');
    five.inputEnabled = true;
    five.input.enableDrag();
	
	//button6
	six = game.add.sprite(data[5], 150, 'enam');
    six.inputEnabled = true;
    six.input.enableDrag();
	
	//button7
	seven = game.add.sprite(data[6], 150, 'tujuh');
    seven.inputEnabled = true;
    seven.input.enableDrag();
	
	//button8
	eight = game.add.sprite(data[7], 150, 'delapan');
    eight.inputEnabled = true;
    eight.input.enableDrag();
	
	//button9
	nine = game.add.sprite(data[8], 150, 'sembilan');
    nine.inputEnabled = true;
    nine.input.enableDrag();
	
	//button10
	ten = game.add.sprite(data[9], 150, 'sepuluh');
    ten.inputEnabled = true;
    ten.input.enableDrag();
	
	//text = game.add.text(16, 16, 'Drag the sprites. Overlapping: false', { fill: '#000' });
	//teks = game.add.text(980, 10, 'Urutkan = belum berhasil' , {fill: '#000'});
	
	//Score
	nilai = game.add.text(1040, 205, 'Score : ', {fontSize: '30px', fill: '#fff'});
}

function update() {

    if (checkOverlap(one, s10 ))
    {
		check1 = 1;
		//console.log(check1);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check =  0;}
    if (checkOverlap(two, s9 ))
    {
		check2 = 1;
		//console.log(check2);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check2 = 0;}
     if (checkOverlap(three, s8 ))
    {
		check3 = 1;
		//console.log(check3);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check3 = 0;}
    if (checkOverlap(four, s7 ))
    {
		check4 = 1;
		//console.log(check4);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check4 = 0;}
    if (checkOverlap(five, s6 ))
    {
		check5 = 1;
		//console.log(check5);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
    else{check5 = 0;}
	 if (checkOverlap(six, s5 ))
    {
		check6 = 1;
		//console.log(check1);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check6 =  0;}
    if (checkOverlap(seven, s4 ))
    {
		check7 = 1;
		//console.log(check2);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check7 = 0;}
     if (checkOverlap(eight, s3 ))
    {
		check8 = 1;
		//console.log(check3);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check8 = 0;}
    if (checkOverlap(nine, s2 ))
    {
		check9 = 1;
		//console.log(check4);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
	else{check9 = 0;}
    if (checkOverlap(ten, s1 ))
    {
		check10 = 1;
		//console.log(check5);
        //text.text = 'Drag the sprites. Overlapping: true';
    }
    else{check10 = 0;}
	//if(check1 + check2 + check3 + check4 + check5 == 5){teks.text = 'Sukses';}
	//else{teks.text = 'belum berhasil';}
}

function openWindow(){
	if(check10 + check9 + check8 + check7 + check6 + check5  + check4 + check3 + check2 + check1  == 10 && temptimer > 0)
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
    	var sixtysecond = 60 * 2,
        display = document.querySelector('#time');
    	startTimer(sixtysecond, display);
	};
