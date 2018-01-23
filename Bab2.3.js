// JavaScript Document
											//AlfiInayah(4210141024)
var game = new Phaser.Game(1334, 720, Phaser.AUTO, '', {preload: preload, create: create, update: update});
	function preload() {
		//game.load.image('kayu', 'BAB2/kayu.png');
		game.load.image('bg', 'simbol/bg.png');
		//game.load.image('pijakan', 'BAB2/alas.png');
		//game.load.image('bintang', 'BAB2/jamur.png');
		game.load.image('1', 'pengurangan/1.png');
		game.load.image('2', 'pengurangan/2.png');
		game.load.image('3', 'pengurangan/3.png');
		game.load.image('4', 'pengurangan/4.png');
		game.load.image('5', 'pengurangan/5.png');
		game.load.image('6', 'pengurangan/6.png');
		game.load.image('7', 'pengurangan/7.png');
		game.load.image('8', 'pengurangan/8.png');
		game.load.image('9', 'pengurangan/9.png');
		game.load.image('10', 'pengurangan/10.png');
		
		game.load.image('nol', 'pengurangan/0.png');
		game.load.image('satu', 'pengurangan/01.png');
		game.load.image('dua', 'pengurangan/02.png');
		game.load.image('tiga', 'pengurangan/03.png');
		game.load.image('empat', 'pengurangan/04.png');
		game.load.image('lima', 'pengurangan/05.png');
		game.load.image('enam', 'pengurangan/06.png');
		game.load.image('tujuh', 'pengurangan/07.png');
		game.load.image('delapan', 'pengurangan/08.png');
		game.load.image('sembilan', 'pengurangan/09.png');
		game.load.image('sepuluh', 'pengurangan/010.png');
		
		
		game.load.image('Plus', 'simbol/plus.png');
		game.load.image('Minus', 'simbol/minus.png');
		game.load.image('samadgn', 'simbol/samadgn.png');
		game.load.image('ditambah', 'simbol/ditambah.png');
		game.load.image('dikurangi', 'simbol/dikurangi.png');
		game.load.image('kotak', 'pengurangan/jawab.png');
		game.load.spritesheet('button', 'BAB2/check.png', 179, 65);
		
	}
	var one;
	var two;
	var three;
	var four;
	var five
	var six;
	var seven;
	var eight;
	var nine;
	var ten;
	
	var tombol;
	var Score = 0;
	var nilai = 0;
	var randomA;
	var randomB;
	var jawab;
	//var jawabOver=0;
	var waktu = 60;
	var c;
	var d;
	var randomX;
	var win = false;
	var berhenti;
	var temptimer=0;
	
	function create() {
		//background
		game.add.sprite(0, 0, 'bg');	
				
		//random
		var x = 10;
		randomA = Math.floor(Math.random() * x) +1 ;
		console.log(randomA);
		
		randomB = Math.floor(Math.random() * x) +1;
		console.log(randomB);
		
		opr = Math.floor(Math.random() * x) +1 ;
		
		console.log(opr);

			if(randomA < randomB)
			{
				temp = randomA;
				randomA = randomB;
				randomB = randomA
			}
			hasil = randomA - randomB;
			game.add.sprite(320, 350, 'Minus');
			//console.log('Minus');
		
		jawab = game.add.sprite(865, 229, 'kotak');
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
		//button
		var button = game.add.button(game.world.centerX -570 ,40, "button", openWindow, this,1, 0, 1);
		button.anchor.set(0.5,0.5);
		
		game.add.sprite(120, 229, randomA);
		game.add.sprite(520, 229, randomB);
		game.add.sprite(725, 320, 'samadgn');
		
		zero = game.add.sprite(40, 640, 'nol');
		zero.inputEnabled = true;
    	zero.input.enableDrag();
		
		one = game.add.sprite(140, 640, 'satu');
    	one.inputEnabled = true;
    	one.input.enableDrag();
		
		two = game.add.sprite(240, 640, 'dua');
    	two.inputEnabled = true;
    	two.input.enableDrag();
		
		three = game.add.sprite(340, 640, 'tiga');
    	three.inputEnabled = true;
    	three.input.enableDrag();
		
		four = game.add.sprite(440, 640, 'empat');
    	four.inputEnabled = true;
    	four.input.enableDrag();
		
		five = game.add.sprite(540, 640, 'lima');
    	five.inputEnabled = true;
    	five.input.enableDrag();
		
		six = game.add.sprite(640, 640, 'enam');
    	six.inputEnabled = true;
    	six.input.enableDrag();
		
		seven = game.add.sprite(740, 640, 'tujuh');
    	seven.inputEnabled = true;
    	seven.input.enableDrag();
		
		eight = game.add.sprite(840, 640, 'delapan');
    	eight.inputEnabled = true;
    	eight.input.enableDrag();
		
		nine = game.add.sprite(940, 640, 'sembilan');
    	nine.inputEnabled = true;
    	nine.input.enableDrag();
		
		ten = game.add.sprite(1040, 640, 'sepuluh');
    	ten.inputEnabled = true;
    	ten.input.enableDrag();
		
		//text = game.add.text(190, 16, 'Drag the sprites. Overlapping: false', { fill: '#ffffff' });
		nilai = game.add.text(1100, 15, 'Score : 0', {fontSize: '30px', fill: '#fff'});
	
	}
	
	function update() {
		nilai.text = 'Score :' +Score;
		if (checkOverlap(one, jawab ))
    {
		nilai = 1;
		check1 = 1;
		console.log(check1);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{
		check =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
    if (checkOverlap(two, jawab ))
    {
		nilai =2;
		check2 = 1;
		console.log(check2);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check2 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
		if (checkOverlap(three, jawab ))
    {
		nilai = 3;
		check3 = 1;
		console.log(check3);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{
		check3  =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
    if (checkOverlap(four, jawab ))
    {
		nilai= 4;
		check4 = 1;
		console.log(check4);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check4 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	if (checkOverlap(five, jawab ))
    {
		nilai = 5;
		check5 = 1;
		console.log(check5);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{
		check5 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
    if (checkOverlap(six, jawab ))
    {
		nilai =6;
		check6 = 1;
		console.log(check6);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check6 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
		if (checkOverlap(seven, jawab ))
    {
		nilai = 7;
		check7 = 1;
		console.log(check7);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{
		check7  =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
    if (checkOverlap(eight, jawab ))
    {
		nilai= 8;
		check8 = 1;
		console.log(check8);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check8 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	
	if (checkOverlap(nine, jawab ))
    {
		nilai= 9;
		check9 = 1;
		console.log(check9);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check9 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	if (checkOverlap(ten, jawab ))
    {
		nilai= 10;
		check10 = 1;
		console.log(check10);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check10 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	if (checkOverlap(zero, jawab ))
    {
		nilai= 0;
		check10 = 1;
		console.log(check0);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check0 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	}
	
	function openWindow(){
		 if(hasil == nilai && temptimer > 0)
		 {
			 alert('Berhasil');
			 Score += 100 * temptimer;
			 alert(nilai.text = 'Score : ' +Score);
			 game.state.restart();
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
		console.log("CLICKED");
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
    	var sixtysecond = 60 * 1,
        display = document.querySelector('#time');
    	startTimer(sixtysecond, display);
	};
	 
	
