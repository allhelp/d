window.onresize = function () {
	cc.view.setDesignResolutionSize(C.GameWidth, C.GameHeight, cc.ResolutionPolicy.SHOW_ALL);
};
window.onload = function () {
	cc.game.onStart = function () {
		cc.LoaderScene.preload(LoadResources, function () {
			cc.director.runScene(new MainScene());
		});
	};
	cc.game.run(C.CanvasName);
	window.onresize(null);
};