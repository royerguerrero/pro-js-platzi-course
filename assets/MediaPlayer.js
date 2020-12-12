const MediaPlayer = function (config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach(plugin => {
    plugin.run(this)
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
}

MediaPlayer.prototype.unmute  = function () {
  this.media.muted = false;
}

MediaPlayer.prototype.playOrPause = function () {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
}

MediaPlayer.prototype.muteOrUnmute = function () {
  if (this.media.muted) {
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
}

export default MediaPlayer;