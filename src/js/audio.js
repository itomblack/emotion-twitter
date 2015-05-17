function checkWidth()
 {

  $(document).ready(function() {
     

  if($('.sad-col').width() < 200){
      document.getElementById('sad_audio').volume = 0.3;
      console.log('sad quiet');
} else {
  document.getElementById('sad_audio').volume = 1;
  console.log('sad loud');
}; 
  if($('.happy-col').width() < 200){
      document.getElementById('happy_audio').volume = 0.3;
      console.log('happy quiet');
} else {
  document.getElementById('happy_audio').volume = 1;
  console.log('happy loud');
}
  if($('.surprised-col').width() < 200){
      document.getElementById('surprised_audio').volume = 0.3;
      console.log('surprised quiet');
} else {
  document.getElementById('surprised_audio').volume = 1;
  console.log('surprised loud');
}
  if($('.angry-col').width() < 200){
      document.getElementById('angry_audio').volume = 0.3;
      console.log('angry quiet');
  } else {
  document.getElementById('angry_audio').volume = 1;
  console.log('angry loud');
  }
  if($('.afraid-col').width() < 200){
      document.getElementById('afraid_audio').volume = 0.3;
      console.log('afraid quiet');
  } else {
  document.getElementById('afraid_audio').volume = 1;
  console.log('afraid loud');
  }
  });
};

setInterval(function(){
checkWidth();
}, 300);




