
var SlideDancer = function(top, left, timeBetweenSteps, gif) {
gif = "Assets/carlton.gif";
  GifDancer.call(this, top, left, timeBetweenSteps, gif);
  this.timeBetweenSteps = 2500;
};

SlideDancer.prototype = Object.create(GifDancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //Find another dancer in window.dancer
  //animate to slide to top of page

  if (window.dancers.length > 0) {
    var randomDancer = window.dancers[Math.ceil(Math.random() * window.dancers.length - 1)];
    this.setPosition();
    this.$node.animate({top: randomDancer.top, left: randomDancer.left + 15}, 'slow');
  }
};

