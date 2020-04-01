# Phaser-Tutorial

Folow the Phaser <a href="http://phaser.io/tutorials/making-your-first-phaser-3-game"> tutorial</a>


### Part 1 - Introduction

* Getting Started Guide
    node.js - http-server
    setup

### Part 2 - Loading Assets

* Preload
* Create

### Part 3 - World Building

* this.physics

### Part 4 - The Platforms

* platforms = this.physics.add.staticGroup();

### Part 5 - Ready Player One

* player = this.physics.add.sprite(100, 450, 'dude');


### Part 5 - Ready Player One

* player.body.setGravityY(300)
* this.physics.add.collider(player, platforms);


### Part 7 - Controlling the player with the keyboard

* Update
* cursors = this.input.keyboard.createCursorKeys();

### Part 8 - Stardust

*  stars = this.physics.add.group({...

### Part 9 - A score to settle

* score

### Part 10 - Bouncing Bombs


Run this game: 
> node src/server.js
Go to the http://localhost:3000/


