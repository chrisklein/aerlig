//variable that will increment through the images
var step=1
function slideit(){
	
//if browser does not support the image object, exit.
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
if (step<miniprofiles)
step++
else
step=1
//call function every 15 seconds
setTimeout("slideit()",5000)
}
slideit()
		
        
        