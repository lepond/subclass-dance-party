var PsyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  
};

PsyDancer.prototype = Object.create(Dancer.prototype);
PsyDancer.prototype.constructor = PsyDancer;
PsyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  
  this.$node.toggle();

  var randRed = Math.ceil(Math.random() * 255);
  var randGreen = Math.ceil(Math.random() * 255);
  var randBlue = Math.ceil(Math.random() * 255);


  var randWidth = Math.ceil(Math.random() * 70);
  var randHeight = Math.ceil(Math.random() * 70);

  var styles = {
    'background-color' : "rgb("+ randRed + ',' + randGreen + ',' + randBlue + ')',
    'border-color' : "rgb("+ randRed + ',' + randGreen + ',' + randBlue + ')',
    width: randWidth+"px",
    height: randHeight+"px",
    opacity: 0.5
  };

  this.$node.css(styles);
};
