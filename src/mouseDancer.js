var MouseDancer = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mouseDancer" ><img src="Assets/deadmaus.png"></span>');
  this.setPosition(top, left);
};

MouseDancer.prototype = Object.create(BlinkyDancer.prototype);
MouseDancer.prototype.constructor = MouseDancer;


MouseDancer.prototype.mouseOver = function () {
  this.$node.toggleClass('mouseDancer');
  this.$node.toggleClass('mouseDancerHover');
};