											//AlfiInayah(4210141024)
var game = new Phaser.Game(1334, 720, Phaser.AUTO, '', {preload: preload, create: create, update: update});
	function preload() {
		game.load.image('bg', 'simbol/bg.png');

		game.load.image('1', 'simbol/1.png');
		game.load.image('2', 'simbol/2.png');
		game.load.image('3', 'simbol/3.png');
		game.load.image('4', 'simbol/4.png');
		game.load.image('5', 'simbol/5.png');
		game.load.image('6', 'simbol/6.png');
		game.load.image('7', 'simbol/7.png');
		game.load.image('8', 'simbol/8.png');
		game.load.image('9', 'simbol/9.png');
		game.load.image('10', 'simbol/10.png');
		game.load.image('11', 'simbol/11.png');
		game.load.image('12', 'simbol/12.png');
		game.load.image('13', 'simbol/13.png');
		game.load.image('14', 'simbol/14.png');
		game.load.image('15', 'simbol/15.png');
		game.load.image('16', 'simbol/16.png');
		game.load.image('17', 'simbol/17.png');
		game.load.image('18', 'simbol/18.png');
		game.load.image('19', 'simbol/19.png');
		game.load.image('20', 'simbol/20.png');
		game.load.image('0', 'simbol/nol.png');
		
		game.load.image('Plus', 'simbol/plus.png');
		game.load.image('Minus', 'simbol/minus.png');
		game.load.image('samadgn', 'simbol/samadgn.png');
		game.load.image('ditambah', 'simbol/ditambah.png');
		game.load.image('dikurangi', 'simbol/dikurangi.png');
		game.load.image('kotak', 'lemon/kotak.png');
		game.load.spritesheet('button', 'BAB2/check.png', 179, 65);
}
	var one;
	var two;
	var tombol;
	var Score = 0;
	var nilai;
	var randomA;
	var randomB;
	var jawab;
	var jawabOver=0;
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

		if(opr<=5){
			hasil = randomA + randomB;
			game.add.sprite(280, 350, 'ditambah');
			//console.log('Plus');
		}
		else{
			if(randomA < randomB)
			{
				temp = randomA;
				randomA = randomB;
				randomB = randomA
			}
			hasil = randomA - randomB;
			game.add.sprite(280, 350, 'dikurangi');
			//console.log('Minus');
		}
		
		jawab = game.add.sprite(320, 220, 'kotak');
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
		
		//button
		var button = game.add.button(game.world.centerX -570 ,40,"button", openWindow,this,1, 0, 1);
		button.anchor.set(0.5,0.5);
		
		//soal
		//game.add.sprite(950, 0, 'kayu');
		
		game.add.sprite(-70, 279, randomA);
		game.add.sprite(420, 279, randomB);
		game.add.sprite(825, 359, 'samadgn');
		game.add.sprite(878, 279, hasil);
		
		one = game.add.sprite(140, 570, 'Plus');
    	one.inputEnabled = true;
    	one.input.enableDrag();
		
		two = game.add.sprite(780, 610, 'Minus');
    	two.inputEnabled = true;
    	two.input.enableDrag();
		
		//var button = game.add.button(game.world.centerX -570 ,40,"click", openWindow,this,1, 0, 1);
		//button.anchor.set(0.5,0.5);
		
		//text = game.add.text(190, 16, 'Drag the sprites. Overlapping: false', { fill: '#ffffff' });
		nilai = game.add.text(1100, 15, 'Score : 0', {fontSize: '30px', fill: '#fff'});
	
	}
	
	function update() {
	nilai.text = 'Score :' +Score;
		if (checkOverlap(one, jawab ))
    {
		jawabOver= randomA+randomB;
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
		jawabover=randomA-randomB;
		check2 = 1;
		console.log(check2);
        //text.text = 'Drag the sprites. Overlapping: true';
	}
	else{
		check2 =  0;
		//text.text = 'Drag the sprites. Overlapping: false';
		}
	}
	
	function openWindow(){
		if(jawabOver==hasil && temptimer > 0)
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
			// waktu = 0;
			 game.state.restart();
			 return false;
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
    	var sixtysecond = 60 * 1,
        display = document.querySelector('#time');
    	startTimer(sixtysecond, display);
	};
	 
	
