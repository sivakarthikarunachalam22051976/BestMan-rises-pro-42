class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.manimage = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.batmanImg = loadImage("Bestman-01.png")
        
    }
    
    

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.manimage,pos.x,pos.y+70,300,300)

        
        
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount >= 200)
    image(this.batmanImg,pos.x,pos.y+70,200,300)

    
        
        }        
}
