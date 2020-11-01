const MediaPlayer = function (config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function  () {
  this.plugins.forEach(plugin => {
    plugin.run()
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.playOrPause = function () {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
};

export default MediaPlayer;