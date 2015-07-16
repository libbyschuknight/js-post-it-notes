// ####### BOARD #######

var Board = function( selector ) {
  // Your board related code goes here

  // Use $elem to access the DOM element for this board
  var $elem = $( selector );

  function initialize() {
    // What needs to happen when this object is created?
    $elem.on("click", function(event) {
      var x = event.pageX;
      var y = event.pageY;
      new PostIt(x, y);
    })
  };

  initialize();
};


// ####### POST IT NOTE ########

var PostIt = function(x, y) {
  // Your post-it related code goes here
  var $elem = $(
    "<div class='post-it'>" +
      "<div class='drag_header' > </div>" +
        "<button class='delete'> &#10008 </button>" +
      "<div class='header' contenteditable='false' ></div>" +
      "<div class='content' contenteditable='false' ></div>" +
    "</div>"
    ).css({
      "top" : y,
      "left" : x
    });

  function initialize (x, y) {
    $("#board").append($elem);
  }

  function PLUR () {
    $elem.find('.content').css({
      'backgroundColor' : randRGB()
    });
  }

  function headerEdit (){
    var $header = $(".header");

    $header.on("click", function(event) {
      event.stopPropagation();

      current_header = $(event.target);
      current_header.attr("contentEditable", "true");
    })
  }

  function drag_note (){
    $(".post-it").draggable({ handle: ".drag_header" });
  }

  function contentEdit (){
    var $content = $(".content");

    $content.on("click", function(event) {
      event.stopPropagation();

      current_content = $(event.target);
      current_content.attr("contentEditable", "true");
   })
  }

  function delete_note () {
    var $delete_button = $(".delete");

    $delete_button.on("click", function(event) {
      event.stopPropagation();
      $(event.target).parent().remove();
    })
  }

  function resize_it () {
    $(".post-it").resizable();
  }



  initialize();
  PLUR();
  headerEdit();
  contentEdit();
  drag_note();
  delete_note();
  resize_it();
};


// #### document ready #####
$(function() {
  // This code will run when the DOM has finished loading
  new Board('#board');
});






