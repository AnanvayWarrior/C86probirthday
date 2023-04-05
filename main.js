var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
image="BirthdayImage.jpg"

function new_image(BirthdayImagejpg)
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(710);
        block_image_object.scaleToHeight(500);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}

function playSound(){
	x.play();
    new_image("BirthdayImage.jpg");
}

function pauseSound(){
    x.pause();
}

function back(){
    window.location="new.html";
}


