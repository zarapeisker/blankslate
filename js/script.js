$(document).ready(function(){
  function draggable () {
    // Makes rings draggable and snap to .box divs. revert: "invalid" returns the rings to their previous position if the new position is not acceptable.
    $( ".draggable" ).draggable({ snap: ".box", revert:"invalid" });
  }

  // var peg_one = $(".one");
  // var peg_two = $(".two");
  // var peg_three = $(".three");

  // Sets a variable for each ring's top margin relative to the page.
  var ring_one_top = parseInt($('.ring#one').css('top').slice(0,-2));
  var ring_two_top = parseInt($('.ring#two').css('top').slice(0,-2));
  var ring_three_top = parseInt($('.ring#three').css('top').slice(0,-2));
  var ring_one_left = parseInt($('.ring#one').css('left').slice(0,-2));
  var ring_two_left = parseInt($('.ring#two').css('left').slice(0,-2));
  var ring_three_left = parseInt($('.ring#three').css('left').slice(0,-2));

    // This function states when to allow the rings to snap into place and when to revert them to their previous position.
    $('.box').droppable({ accept: function(selected_div) {

      // if(selected_div_left < 133){
      //   var this_peg = $(".one");
      // }
      // else if(selected_div_left > 133 && selected_div_left < 408) {
      //   var this_peg = $(".two");
      // }
      // else {
      //   var this_peg = $(".three");
      // }

      // Sets a variable to the top margin for the selected ring.
      var selected_div_top = parseInt($(selected_div).css('top').slice(0,-2));

      // Sets a variable to the left margin for the selected ring.
      var selected_div_left = parseInt($(selected_div).css('left').slice(0,-2));

      // Sets a variable for the selected div's id.
      var selected_div_id = $(selected_div).attr("id")

      // If the selected ring has an id of one(smallest ring), it will only stick to the page(returns true) if the top margin is smaller than rings two and three, meaning it is higher on the page.
      if(selected_div_id == 'one') {
        console.log('inside of div_one')
        if(selected_div_top < ring_two_top && ring_three_top){
          console.log('about to return true')
          return true
        }
        else{
          console.log('about to return false')
          return false
        }
      }
      // If the selected ring has an id of two(middle sized ring), it will only stick to the page(returns true) if the top margin is smaller than ring three, but larger than ring one, meaning it is between them on the page.
      else if(selected_div_id == 'two'){
        console.log('inside div two')
        if(selected_div_top < ring_three_top && selected_div_top > ring_one_top) {
          console.log('about to return true')
          return true
        }
        else {
          console.log('about to return false')
          return false
        }
      }
      // If the selected ring has an id of three(largest ring), it will only stick to the page(returns true) if the top margin is larger than ring three and one, meaning it is below them on the page.
      else {
        console.log('inside div three')
        if(selected_div_top > ring_one_top && selected_div_top > ring_two_top) {
          console.log('about to return true')
          return true
        }
        else {
          console.log('about to return false')
          return false
        }
      }
    } });

draggable();

});
