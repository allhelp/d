MainScene = cc.Scene.extend({
	onEnter: function () {
		this._super();
		let size = cc.director.getWinSize();
		let Background = new cc.Sprite(R.Background);
		ResizeTo(Background, size.width, size.height);
		Background.setPosition(size.width / 2, size.height / 2);
		this.addChild(Background, 0);
		let Title = new cc.Sprite(R.Title);
		ResizeTo(Title, size.width/3, size.height/4);
		let Play = new cc.Button(R.PlayButton, R.PlayButtonPressed);
		this.addChild(Menu, 1);
	}
});