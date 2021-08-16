class launcher{
    constructor(body,anchor){
     var options = {
            bodyA:body,
            pointB: anchor,
            stiffness: 0.04,
            length: 10
        }   
        this.bodyA=body
        this.pointB=anchor 
        this.launcher=Constraint.create(options)
        World.add(world,this.launcher)
    }
    attach(stoneObj){
        this.launcher.bodyA = stoneObj;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display (){
        if(this.launcher.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.pointB
            strokeWeight(3)
            line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}