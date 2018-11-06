// Variable to track the number of steps
var totalsteps = 6;

// track which step should be displayed
var currentstep = 1;

// store the html of each slide
var currentslide;

$(function(){
  $('.totalsteps').html(totalsteps)
  // hide the steps
  $('.steps li, .end').hide();
});

//click events
$('#begin').on('click' , function(){
  // hides the first page with no steps
  $('.welcome').hide();
  currentstep = 1;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('.controls').fadeIn(1000);
  $('h2').html('Step ' + currentstep);
});

//Click on Next
$('#next').on('click' , function(){
  // hides the step you're looking at
  $(currentslide).hide();
  currentstep++;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step ' + currentstep);


  if(currentstep != totalsteps){
    $('#next').show();
  }
  if(currentstep == 1){
    $('#prev').hide();
  }
});

$('#finish').on('click', function(){
  // Hide everything again
  $('.steps li, .controls, #prev').hide();
  $('.end').fadeIn(1000);
});
