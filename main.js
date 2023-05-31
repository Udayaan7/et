function  setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(550,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        noseX = results[0.].pose.nose.nose.x;
        noseY = results[0.].pose.nose.nose.y;
        console.log("noseX = " + noseX + "noseY = "+noseY);

        leftWristX  = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;
        diffrence = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWristX" + leftWristX + "diffrence = " +diffrence );
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function draw(){
    background('#1f5ed1');
    fill('#ecf01a');
    stroke('#ecf01a');
    square(noseX,noseY,diffrence);
}

noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0; 

function preload(){

}


