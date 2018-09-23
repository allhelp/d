C = {
	GameWidth: 1280,
	GameHeight: 720,
	CanvasName: "GameCanvas"
};
ResizeTo = function (sp, nw, nh) {
	sp.setScale(nw / sp._getWidth(), nh / sp._getHeight());
};