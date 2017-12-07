var game = new Phaser.Game(1334, 720, Phaser.AUTO, '', {preload: preload, create: create, update: update});
	function preload() {
		game.load.image('kayu', 'BAB2/kayu.png');
		game.load.image('langit', 'BAB2/bg.png');
		game.load.image('pijakan', 'BAB2/alas.png');
		game.load.image('bintang', 'BAB2/jamur.png');
		game.load.image('1', 'BAB2/1.png');
		game.load.image('2', 'BAB2/2.png');
		game.load.image('3', 'BAB2/3.png');
		game.load.image('4', 'BAB2/4.png');
		game.load.image('5', 'BAB2/5.png');
		game.load.spritesheet('button', 'BAB2/check.png', 179, 65);
		game.load.spritesheet('orang', 'BAB2/orang.png', 98, 160);
	}

	var pijakan;
	var pemain;
	var tombol;
	var bintang;
	var TeksSkor;
	var skor = 0;
	var randomA;
	var randomB;
	var waktu = 60;
	
	function create() {	
				//random
		var x = 5;
		randomA = Math.floor(Math.random() * x) +1 ;
		console.log(randomA);
		
		randomB = Math.floor(Math.random() * x) +1;
		console.log(randomB);
		
		var c = randomA + randomB;
		console.log(c);
		
		//physic arcade
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		//background
		game.add.sprite(0, 0, 'langit');
		
		//button
		var button = game.add.button(game.world.centerX -570 ,40,"button", clickMe,this,1, 0, 1);
		button.anchor.set(0.5,0.5);
		
		//soal
		game.add.sprite(950, 0, 'kayu');
		game.add.sprite(980, 110, randomA);
		game.add.sprite(1150, 110, randomB);
		
		//gabungan 1 pijakan dan 2 alas
		pijakan = game.add.group();
		pijakan.enableBody = true;
		var alas = pijakan.create(0, game.world.height - 36, 'pijakan');
		alas.scale.setTo(1, 2);
		alas.body.immovable = true;
		//alas2
		alas2 = pijakan.create(934, 480, 'pijakan');
		alas2.body.immovable = true;
		alas2 = pijakan.create(-680, 290, 'pijakan');
		alas2.body.immovable = true;
		
		pemain = game.add.sprite(20, game.world.height -260, 'orang');
		game.physics.arcade.enable(pemain);
		pemain.body.bounce.y = 0.2;
		pemain.body.gravity.y = 300;
		pemain.body.collideWorldBounds = true;
		
		pemain.animations.add('left', [0, 1, 2, 3], 10, true);
		pemain.animations.add('right', [5, 6, 7, 8], 10, true);
		
		//kontrol pemain
		tombol = game.input.keyboard.createCursorKeys();
		
		bintang = game.add.group();
		
		bintang.enableBody = true;
		
		for (var i = 0; i < 10; i++)
		{
			var star = bintang.create(i * 140, 0, 'bintang');
			star.body.gravity.y = 300;
			star.body.bounce.y = 0.7 + Math.random() * 0.2;
		}
		
		//score
		TeksSkor = game.add.text(20, 680, 'Terkumpul : 0', {fontSize: '32px', fill: '#fff'});		
	
	}
	
	function clickMe(){
		console.log("CLICKED");
	}
	
	function cek(){
		 if(skor == c)
		 {
			 return true; 
		 }
		 else
		 {
			 return false;
		 }
	}
	
	function ambilBintang(pemain, star)
	{
		star.kill();
		skor += 1;
		TeksSkor.text = 'Terkumpul : ' + skor;
		
	}
	
	
	function update() {
		game.physics.arcade.collide(pemain, pijakan);
		
		//reset kecepatan pemain jika tidak menekan tombol apapun
		pemain.body.velocity.x = 0;
		
		if (tombol.left.isDown)
		{
			//bergerak ke kiri
			pemain.body.velocity.x = -260;
			pemain.animations.play ('left');
		}
		else if (tombol.right.isDown)
		{
			//ke kanan
			pemain.body.velocity.x = 260;
			pemain.animations.play  ('right');
		}
		else
		{
			//berdiri
			pemain.animations.stop();
			pemain.frame = 4;
		}
		
		if (tombol.up.isDown && pemain.body.touching.down)
		{
			//lompat jika menekan tombol kanan atas
			pemain.body.velocity.y = -350;
		}
		
		game.physics.arcade.collide(bintang, pijakan);
		
		game.physics.arcade.overlap(pemain, bintang, ambilBintang,null,this);
		
		
	}
	
	function startTimer(duration, display){
		 var timer = duration, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer > 0) {
            timer--;
        }
    }, 1000);
	}
	
	window.onload = function () {
    	var sixtysecond = 60 * 1,
        display = document.querySelector('#time');
    	startTimer(sixtysecond, display);
		
	};
	 
	
