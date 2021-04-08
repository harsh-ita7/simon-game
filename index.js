var colours=["red","blue","green","yellow"];
var i=0;
var level=0;
var pattern=[];
var userCreated=[];
$(document).keypress(function()
{
  if(i==0)
  {
    $("#level-title").text("LEVEL:"+level);
  nextSequence();
  ++i;
  }
});

function nextSequence()
{
  userCreated=[];
  level++;
  $("#level-title").text("LEVEL:"+level);
  var ra=Math.floor(Math.random()*4);
   var co=colours[ra];
   pattern.push(co);
   var c='#'+co;

    $(c).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(co);


}
function checkAnswer(currlevel)
{
if(userCreated[currlevel]===pattern[currlevel])
{
  if(userCreated.length===pattern.length)
  {
    setTimeout(function()
    {
      nextSequence();
    },1000);
  }
}
else{
  var aud=new Audio("sounds/wrong.mp3");
  aud.play();
  $("body").addClass("game-over");
  setTimeout(function()
  {
    $("body").removeClass("game-over");
  },200);
  startover();
}
}
$(".btn").click(function handler()
{
  userCreated.push(this.id);
  playsound(this.id);
  animatepress(this.id);
  checkAnswer(userCreated.length-1);
});
function startover()
{
  level=0;
  pattern=[];
  i=0;
  $("h1").text("Press Any Key to Start");
}
function playsound(name)
{
  var audio=new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatepress(currcol)
{
  $("#"+this.id).addClass("pressed");
  setTimeout(function rem()
{
  $("#"+this.id).addClass("pressed");
},100);
}
