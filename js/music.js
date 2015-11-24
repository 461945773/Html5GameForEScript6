class Music {
	constructor(src) {
		this.src = src;
		this.name = this.src.substring(this.src.lastIndexOf("/") + 1);
		this.audio = document.createElement("AUDIO");
		this.audio.src = this.src;
    }
	play() {
		this.audio.play();
		console.log(this.name + " is playing");
	}
	pause() {
		this.audio.pause();
		console.log(this.name + " is pause");
	}
	stop() {
		this.audio.pause();
		this.audio.currentTime = 0;
		console.log(this.name + " is stoped");
	}
	setVolume(n) {
		this.audio.volume = n;
		console.log(this.name + " changes volume to " + n);
	}
	changeSrc(src){
		this.src = src;
		this.name = this.src.substring(this.src.lastIndexOf("/") + 1);
		this.audio.src = this.src;
	}
}