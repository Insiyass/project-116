var noseX=0;
var noseY=0;
var mustash;

function preload(){
    mustash=loadImage('Mustache.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size (300,300);
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes)
}

function modelLoaded(){
    console.log("poseNet is initialized")
}

function draw(){
    image(video,0,0,300,300);
    // fill('red');
    // stroke('red');
    // circle(noseX,noseY,20)
    image(mustash,noseX-27,noseY+8,60,30)
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('noseX= '+noseX+', noseY= '+noseY)
    }
}
function take_snapshot(){
    save("myImage.png");
}