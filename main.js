function preload()
{

}
function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLodded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
 image(video ,0 ,0 ,300 ,300);
 filter(INVERT);
}
function take_snapshot()
{
    save('myfilterImage.png');
}
function modelLodded()
{
    console.log('poseNet is Initialezed')
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log('nose x =' + results[0].pose.nose.x);
        console.log('nose y =' + results[0].pose.nose.y);
    }
}