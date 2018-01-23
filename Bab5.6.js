// JavaScript Document
var game = new Phaser.Game(1334, 740, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() 
{
	game.load.image('bg','5/bg1.png');
    game.load.image('satu', '5/41.png');
	game.load.image('dua', '5/42.png');
	game.load.image('tiga', '5/43.png');
	game.load.image('empat', '5/44.png');
	game.load.image('lima', '5/45.png');
	game.load.image('enam', '5/46.png');
	game.load.image('tujuh', '5/47.png');
	game.load.image('delapan', '5/48.png');
	game.load.image('sembilan', '5/49.png');
	game.load.image('sepuluh', '5/50.png');
    game.load.image('piring1', '5/piring.png');
	game.load.image('piring2', '5/piring.png');
	game.load.image('piring3', '5/piring.png');
	game.load.image('piring4', '5/piring.png');
	game.load.image('piring5', '5/piring.png');
	game.load.image('piring6', '5/piring.png');
	game.load.image('piring7', '5/piring.png');
	game.load.image('piring8', '5/piring.png');
	game.load.image('piring9', '5/piring.png');
	game.load.image('piring10', '5/piring.png');
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
	
	s1 = game.add.sprite(31, 395, 'piring1');
	s2 = game.add.sprite(159, 395, 'piring2');
	s3 = game.add.sprite(287, 395, 'piring3');
	s4 = game.add.sprite(415, 395, 'piring4');
	s5 = game.add.sprite(543, 395, 'piring5');
	s6 = game.add.sprite(671, 395, 'piring1');
	s7 = game.add.sprite(799, 395, 'piring2');
	s8 = game.add.sprite(927, 395, 'piring3');
	s9 = game.add.sprite(1055, 395, 'piring4');
	s10 = game.add.sprite(1183, 395, 'piring5');
	
	//button
	var button = game.add.button(game.world.centerX -570 ,40,"button", openWindow,this,1, 0, 1);
	button.anchor.set(0.5,0.5);
	
	var data = [109, 213, 317, 421, 525, 629, 732, 837, 941, 1045];
	
	
	for(i=0; i<10; i++){
		var randomSprite = Math.floor(Math.random() * 10); 
		console.log(randomSprite);
		var temp = data[i];
		data[i] = data[randomSprite];
		data[randomSprite] = temp;
	}
	
	//Semangka satu
    one = game.add.sprite(data[0], 120, 'satu');
    one.inputEnabled = true;
    one.input.enableDrag();
	
	//Semangka dua
    two = game.add.sprite(data[1], 120, 'dua');
    two.inputEnabled = true;
    two.input.enableDrag();
	
	//Semangka tiga
    three = game.add.sprite(data[2], 120, 'tiga');
    three.inputEnabled = true;
    three.input.enableDrag();

	//Semangka empat
    four = game.add.sprite(data[3], 120, 'empat');
    four.inputEnabled = true;
    four.input.enableDrag();

	//Semangka lima
    five = game.add.sprite(data[4], 120, 'lima');
    five.inputEnabled = true;
    five.input.enableDrag();
	
	//button6
	six = game.add.sprite(data[5], 120, 'enam');
    six.inputEnabled = true;
    six.input.enableDrag();
	
	//button
	seven = game.add.sprite(data[6],120, 'tujuh');
    seven.inputEnabled = true;
    seven.input.enableDrag();
	
	//button8
	eight = game.add.sprite(data[7], 120, 'delapan');
    eight.inputEnabled = true;
    eight.input.enableDrag();
	
	//button9
	nine = game.add.sprite(data[8], 120, 'sembilan');
    nine.inputEnabled = true;
    nine.input.enableDrag();
	
	//button10
	ten = game.add.sprite(data[9], 120, 'sepuluh');
    ten.inputEnabled = true;
    ten.input.enableDrag();
	
	//text = game.add.text(16, 16, 'Drag the sprites. Overlapping: false', { fill: '#000' });
	//teks = game.add.text(980, 10, 'Urutkan = belum berhasil' , {fill: '#000'});
	
	//Score
	nilai = game.add.text(1040, 5, 'Score : ', {fontSize: '30px', fill: '#fff'});
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
	if(check10 + check9 + check8 + check7 + check6 + check5  + check4 + check3 + check2 + check1  == 10)
	{ 
		alert('Berhasil')
		Score += 100 * temptimer;
		alert(nilai.text = 'Score : ' +Score);
		clearInterval(berhenti);
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
    }, 1000);	
	
	}
	
	window.onload = function () {
    	var sixtysecond = 60 * 2,
        display = document.querySelector('#time');
    	startTimer(sixtysecond, display);
	};
