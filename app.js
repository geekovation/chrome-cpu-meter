chrome.experimental.systemInfo.cpu.onUpdated.addListener(function(info) {
  
  
  drawCircleGraph(info.averageUsage);
  
  //drawCircleGraph(50);
  
  
});


function drawCircleGraph(usage) {
  
  var height = 19;
  
  var angle = usage* Math.PI*2 /100 ;
  
  // console.log(usage+': '+angle);
 
  var canvas = document.createElement('canvas');

  var context = canvas.getContext('2d');

  context.beginPath();
  
  context.lineWidth = 3;
  context.strokeStyle = 'silver';
  context.arc(10,10,7,0,Math.PI * 2, false);
 
  context.stroke();
  
  context.beginPath();
  
  context.lineWidth = 3;
  context.strokeStyle = '#00BBBC';
  context.arc(10,10,7,0,angle, false);
 
  context.stroke();
  
  context.font = '7pt Arial';
  context.fillStyle = 'black';
  
  var u = Math.round(usage);
  
  if (u<10) u = '0'+u;
  
  u = u+'';
  
  context.fillText(u, 5, 13);

  var imageData = context.getImageData(0, 0, 19, 19);
  
  chrome.browserAction.setIcon({
    imageData: imageData
  });  

  context.clearRect(0,0,19,19);

  
  
  
}


function drawGraph(usage) {
  
  
  var height = 19;
  
  var graph_height = Math.round(usage*19 /100 );
  
  var canvas = document.createElement('canvas');

  var context = canvas.getContext('2d');

  var start_y = 19-graph_height;
  
 
  context.beginPath();
  context.rect(3, start_y , 16, 19-start_y);
  context.fillStyle = '#00FF00';
  context.fill();

  var imageData = context.getImageData(0, 0, 19, 19);
  
  chrome.browserAction.setIcon({
    imageData: imageData
  });  
  
}

 