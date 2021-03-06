var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.top = top;
  this.left = left;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
  this.setPosition(top, left);
  
  //this.$node.css({top: top, left: left});
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // setTimeout(dancer.step, timeBetweenSteps);
  //setTimeout.bind(this, this.step, this.timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  this.left = left;
  this.top = top;
};

Dancer.prototype.lineUp = function() {
  var hasRun = false;
  if (!hasRun) {
    this.oldTop = this.top;
    this.setPosition(300, this.left);
    hasRun = true;
    var context = this;
    setTimeout(function () {
      context.setPosition(context.oldTop, context.left);
      hasRun = false;
    }, 5000);
  }
};

// Creates and returns a new dancer object that can step
