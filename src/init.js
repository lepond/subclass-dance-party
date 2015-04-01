$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var gifArray = ['pumpgirl.gif', 'snoopdog.gif', 'beyonce.gif'];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() * Math.random())+25,
      $("body").width() * Math.random(),
      Math.random() * 1000, 'Assets/' + gifArray[Math.ceil(Math.random()*gifArray.length-1)]
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    if (dancer instanceof MouseDancer) {
      $('.mouseDancer').on('mouseenter', function() {
        dancer.mouseOver();
      });
    }


  });

  $(".invokeMethodButton").on("click", function(event) {
    var invokeMethodName = $(this).data("invoke-method-name");
    var invokeMethod = Dancer.prototype[invokeMethodName];

    
    for (var i = 0; i < window.dancers.length; i++) {
      invokeMethod.call(window.dancers[i]);
    }
    
  });
});