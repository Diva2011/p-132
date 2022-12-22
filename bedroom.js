status = "";
img = "";

function preload()
{
   img = loadImage('bedroom2.webp'); 
}

function draw()
{
    image(img,0,0,640,420);
}
function setup()
{
   canvas = createCanvas(640,420);
   canvas.center();
   objectDetector = ml5.objectDetector('cocossd' , modelLoaded);    
   document.getElementById('status').innerHTML = "Status: Detecting Objects";   
}

function modelLoaded()
{
   status = true;
   objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
   if(error)
   {
      console.log(error);
   } else{
      console.log(results);
   }
} 