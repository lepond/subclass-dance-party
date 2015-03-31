
var SlideDancer = function(top, left, timeBetweenSteps, gif) {
//gif = "../Assets/graphics-dancing.gif";
  GifDancer.call(this, top, left, timeBetweenSteps, gif);
};

SlideDancer.prototype = Object.create(GifDancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //Find another dancer in window.dancer
  //animate to slide to top of page
  this.setPosition();
  this.$node.animate({top: 10, left: 100});
};

