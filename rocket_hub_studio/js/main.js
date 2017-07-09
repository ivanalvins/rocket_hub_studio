var scene = $( '.c-scene' );
var sceneHeight = $( window ).height();

$( window ).resize( function() {
    sceneHeight = $( window ).height();
})

// Initialise the scrollmagic controller
var scrollMagicController = new ScrollMagic.Controller({
    globalSceneOptions:
    {
        triggerHook: 'onLeave'
    }
});

// Loop through each scene and create a new
// scrollmagic scene for each one
scene.each( function() 
{
    var scene = new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin( this )
    .addTo( scrollMagicController )
    .setClassToggle( scene, 'is-active' )
});

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
