/* Console.log the time it takes video to load on play, pause, etc. using HTML5 video media events API */
/* http://www.w3.org/TR/2011/WD-html5-20110405/video.html#playing-the-media-resource */

(function () {

  var start;
  var end; 
  var totalTime;

  window.onload = function() {
  
  /* Reset the start time whenever the user seeks a new playback position */
  document.getElementById('videoplayer').addEventListener("seeking", function() {
    start = Date.now();
    console.log("Jumped");
  }, false);
  
  /* When "play" is triggered, the datetimestamp is saved in 'start' */
  document.getElementById('videoplayer').addEventListener("play", function() {
    start = Date.now();
  }, false);
  
  /* When video detected as "playing", calculate the difference between 'start' and 'end' */
  document.getElementById('videoplayer').addEventListener("playing", function() {
    end = Date.now();
    totalTime = (end - start) / 1000;
    console.log(totalTime);
  }, false);
  };
  
})();
