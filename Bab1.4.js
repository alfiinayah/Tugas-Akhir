window.onload = function(){
	var game = new Phaser.Game(1334, 720, Phaser.AUTO, '', {preload: preload, create: create, update: update});
	function preload() {
		game.load.image('bg','PNG/Background1.png');
		game.load.image('1', 'PNG/1.png');
		game.load.image('2', 'PNG/2.png');
		game.load.image('3', 'PNG/3.png');
		game.load.image('4', 'PNG/4.png');
		game.load.image('5', 'PNG/5.png');
		game.load.image('piring', 'PNG/piring.png');
		game.load.image('piring1', 'PNG/piring.png');
		game.load.image('piring2', 'PNG/piring.png');
		game.load.image('piring3', 'PNG/piring.png');
		game.load.image('piring4', 'PNG/piring.png');
	}
	
	var result = 'Drag a sprite';
	var s1;
	var s2;
	var s3;
	var s4;
	var s5;
	
	function create() {
		back = game.add.sprite(0, 0, 'bg');
		s1 = game.add.sprite(110,420, 'piring');
		s2 = game.add.sprite(330,390, 'piring1');
		s3 = game.add.sprite(550,420, 'piring2');
		s4 = game.add.sprite(770,390, 'piring3');
		s5 = game.add.sprite(990,420, 'piring4');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		var satu = game.add.sprite(370, 20, '1');
		var dua = game.add.sprite(810, 20, '2');
		var tiga = game.add.sprite(150, 20, '3');
		var empat = game.add.sprite(590, 20, '4');
		var lima = game.add.sprite(1030, 20, '5');
		
		satu.inputEnabled = true;
		dua.inputEnabled = true;
		tiga.inputEnabled = true;
		empat.inputEnabled = true;
		lima.inputEnabled = true;
		
		
		satu.input.enableDrag(true);
		dua.input.enableDrag(true);
		tiga.input.enableDrag(true);
		empat.input.enableDrag(true);
		lima.input.enableDrag(true);
		
		group.inputEnableChildren = true;
		
		
		satu.events.onDragStarat.add(onDragStart, this);
		satu.events.onDragStop.add(onDragStop, this);
		
		
		dua.events.onDragStarat.add(onDragStart, this);
		dua.events.onDragStop.add(onDragStop, this);
		
		tiga.events.onDragStarat.add(onDragStart, this);
		tiga.events.onDragStop.add(onDragStop, this);
		
		
		empat.events.onDragStarat.add(onDragStart, this);
		empat.events.onDragStop.add(onDragStop, this);
		
		empat.events.onDragStarat.add(onDragStart, this);
		empat.events.onDragStop.add(onDragStop, this);
		
		
		lima.events.onDragStarat.add(onDragStart, this);
		lima.events.onDragStop.add(onDragStop, this);
		
		group.onChildInputDown.add(onDown, this);	
		
		game.physics.arcade.collide(satu, s1);
			
	}
	
	function onDown(sprite, pointer){
		result = "Down" + sprite.key;
		console.log('down', sprite.key);
	}
	
	function onDragStart(){
		result = "Dragging" + sprite.key;
	}
	
	function onDragStop(){
		result = sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y;
    if (pointer.y = 400)
    {
        console.log('input disabled on', sprite.key);
        sprite.input.enabled = false;
        sprite.sendToBack();
    }
	}
	
	
	function render(){
		game.debug.text(result, 10, 20);
	}
	
	
	function update() {
		
	}
}