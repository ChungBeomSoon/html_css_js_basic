var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color',color);
  },
  setbackgroundColor: function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }

}
var Links = {
  setColor:function(color){
  //   var x = document.querySelectorAll('a');
  //   var i = 0;
  //   while (i<x.length)
  //   {
  //       x[i].style.color=color;
  //       ++i;
  //   }
  $('a').css('color',color);
  }
}
function nightDayHandler(self)
{
  var target = document.querySelector('body');
  if(self.value==='night')
  {
        Body.setColor('white');
        Body.setbackgroundColor('black');
    self.value='day';

    Links.setColor('powderblue');
  }
  else {
    Body.setColor('black');
    Body.setbackgroundColor('white');
    self.value='night';

    Links.setColor('blue');
  }
}
