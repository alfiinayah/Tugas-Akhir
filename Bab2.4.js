// JavaScript Document
				//AlfiInayah(4210141024)
var game = new Phaser.Game(1334, 720, Phaser.AUTO, '', {preload: preload, create: create, update: update});
	function preload() {
		//game.load.image('kayu', 'BAB2/kayu.png');
		game.load.image('bg', 'simbol/bg.png');
		//game.load.image('pijakan', 'BAB2/alas.png');
		//game.load.image('bintang', 'BAB2/jamur.png');
		game.load.image('1', 'jamur/1.png');
		game.load.image('2', 'jamur/2.png');
		game.load.image('3', 'jamur/3.png');
		game.load.image('4', 'jamur/4.png');
		game.load.image('5', 'jamur/5.png');
		game.load.image('6', 'jamur/6.png');
		game.load.image('7', 'jamur/7.png');
		game.load.image('8', 'jamur/8.png');
		game.load.image('9', 'jamur/9.png');
		game.load.image('10', 'jamur/10.png');
		game.load.image('11', 'jamur/11.png');
		game.load.image('12', 'jamur/12.png');
		game.load.image('13', 'jamur/13.png');
		game.load.image('14', 'jamur/14.png');
		game.load.image('15', 'jamur/15.png');
		game.load.image('16', 'jamur/16.png');
		game.load.image('17', 'jamur/17.png');
		game.load.image('18', 'jamur/18.png');
		game.load.image('19', 'jamur/19.png');
		game.load.image('20', 'jamur/20.png');
		
		game.load.image('nol', 'jamur/0.png');
		game.load.image('satu', 'jamur/01.png');
		game.load.image('dua', 'jamur/02.png');
		game.load.image('tiga', 'jamur/03.png');
		game.load.image('empat', 'jamur/04.png');
		game.load.image('lima', 'jamur/05.png');
		game.load.image('enam', 'jamur/06.png');
		game.load.image('tujuh', 'jamur/07.png');
		game.load.image('delapan', 'jamur/08.png');
		game.load.image('sembilan', 'jamur/09.png');
		game.load.image('sepuluh', 'jamur/010.png');
		game.load.image('sebelas', 'jamur/011.png');
		game.load.image('duabelas', 'jamur/012.png');
		game.load.image('tigabelas', 'jamur/013.png');
		game.load.image('empatbelas', 'jamur/014.png');
		game.load.image('limabelas', 'jamur/015.png');
		game.load.image('enambelas', 'jamur/016.png');
		game.load.image('tujuhbelas', 'jamur/017.png');
		game.load.image('delapanbelas', 'jamur/018.png');
		game.load.image('sembilanbelas', 'jamur/019.png');
		game.load.image('duapuluh', 'jamur/020.png');
				
		game.load.image('Plus', 'simbol/plus.png');
		game.load.image('Minus', 'simbol/minus.png');
		game.load.image('samadgn', 'simbol/samadgn.png');
		game.load.image('ditambah', 'simbol/ditambah.png');
		game.load.image('dikurangi', 'simbol/dikurangi.png');
		game.load.image('kotak', 'jamur/jawaban.png');
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
	var nilai;
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
		var x = 20;
		randomA = Math.floor(Math.random() * x) +1 ;
		console.log(randomA);
		
		var y = 10;
		randomB = Math.floor(Math.random() * y) +1;
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
		
		zero = game.add.sprite(40, 580, 'nol');
		zero.inputEnabled = true;
    	zero.input.enableDrag();
		
		one = game.add.sprite(140, 580, 'satu');
    	one.inputEnabled = true;
    	one.input.enableDrag();
		
		two = game.add.sprite(240, 580, 'dua');
    	two.inputEnabled = true;
    	two.input.enableDrag();
		
		three = game.add.sprite(340, 580, 'tiga');
    	three.inputEnabled = true;
    	three.input.enableDrag();
		
		four = game.add.sprite(440, 580, 'empat');
    	four.inputEnabled = true;
    	four.input.enableDrag();
		
		five = game.add.sprite(540, 580, 'lima');
    	five.inputEnabled = true;
    	five.input.enableDrag();
		
		six = game.add.sprite(640, 580, 'enam');
    	six.inputEnabled = true;
    	six.input.enableDrag();
		
		seven = game.add.sprite(740, 580, 'tujuh');
    	seven.inputEnabled = true;
    	seven.input.enableDrag();
		
		eight = game.add.sprite(840, 580, 'delapan');
    	eight.inputEnabled = true;
    	eight.input.enableDrag();
		
		nine = game.add.sprite(940, 580, 'sembilan');
    	nine.inputEnabled = true;
    	nine.input.enableDrag();
		
		ten = game.add.sprite(1040, 580, 'sepuluh');
    	ten.inputEnabled = true;
    	ten.input.enableDrag();
		
		sebelas = game.add.sprite(40, 660, 'sebelas');
		sebelas.inputEnabled = true;
    	sebelas.input.enableDrag();
		
		duabelas = game.add.sprite(160, 660, 'duabelas');
    	duabelas.inputEnabled = true;
    	duabelas.input.enableDrag();
		
		tigabelas = game.add.sprite(280, 660, 'tigabelas');
    	tigabelas.inputEnabled = true;
    	tigabelas.input.enableDrag();
		
		empatbelas = game.add.sprite(380, 660, 'empatbelas');
    	empatbelas.inputEnabled = true;
    	empatbelas.input.enableDrag();
		
		limabelas = game.add.sprite(480, 660, 'limabelas');
    	limabelas.inputEnabled = true;
    	limabelas.input.enableDrag();
		
		enambelas = game.add.sprite(580, 660, 'enambelas');
    	enambelas.inputEnabled = true;
    	enambelas.input.enableDrag();
		
		tujuhbelas = game.add.sprite(680, 660, 'tujuhbelas');
    	tujuhbelas.inputEnabled = true;
    	tujuhbelas.input.enableDrag();
		
		delapanbelas = game.add.sprite(780, 660, 'delapanbelas');
    	delapanbelas.inputEnabled = true;
    	delapanbelas.input.enableDrag();
		
		sembilanbelas = game.add.sprite(880, 660, 'sembilanbelas');
    	sembilanbelas.inputEnabled = true;
    	sembilanbelas.input.enableDrag();
		
		duapuluh = game.add.sprite(980, 660, 'duapuluh');
    	duapuluh.inputEnabled = true;
    	duapuluh.input.enableDrag();
		
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
	if (checkOverlap(sebelas, jawab ))
    {
		nilai = 11;
		check11 = 1;
		console.log(check11);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{
		check11 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
    if (checkOverlap(duabelas, jawab ))
    {
		nilai =12;
		check2 = 1;
		console.log(check12);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check12 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
		if (checkOverlap(tigabelas, jawab ))
    {
		nilai = 13;
		check3 = 1;
		console.log(check13);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{
		check13  =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
    if (checkOverlap(empatbelas, jawab ))
    {
		nilai= 14;
		check14 = 1;
		console.log(check14);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check14 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	if (checkOverlap(limabelas, jawab ))
    {
		nilai = 15;
		check15 = 1;
		console.log(check15);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{
		check15 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
    if (checkOverlap(enambelas, jawab ))
    {
		nilai =16;
		check16 = 1;
		console.log(check16);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check16 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
		if (checkOverlap(tujuhbelas, jawab ))
    {
		nilai = 17;
		check17 = 1;
		console.log(check17);
       // text.text = 'Drag the sprites. Overlapping: true';
    }
	else{
		check17  =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
    if (checkOverlap(delapanbelas, jawab ))
    {
		nilai= 18;
		check18 = 1;
		console.log(check18);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check18 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	
	if (checkOverlap(sembilanbelas, jawab ))
    {
		nilai= 19;
		check19 = 1;
		console.log(check19);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check19 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	if (checkOverlap(duapuluh, jawab ))
    {
		nilai= 20;
		check20 = 1;
		console.log(check20);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check20 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	}
	
	function openWindow(){
		 if(hasil == nilai && temptimer < 0)
		 {
			 alert('Berhasil');
			 Score += 100 * temptimer;
			 alert(nilai.text = 'Score : ' +Score);
			 game.state.restart();
			 //clearInterval(berhenti);
			 return true; 
		 }
		 else
		 {
			 alert('Coba Lagi');
			 skor = 0;
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
	 
	
