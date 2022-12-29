AFRAME.registerComponent("shoot",{
    init:function(){
      this.shootButtet();
    },
    shootButtet:function(){    
      window.addEventListener("keydown ",(e)=>{
      if(e.key=="z"){
        var bullet = document.createElement("a-entity");
      
        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });
      
        bullet.setAttribute("material", "color", "white");
      
        var cam=document.querySelector("camera")
        bullet.setAttribute("position",{
          x:cam.x,
          y:cam.y,
          z:cam.z
        })}
        cam.appendChild(bullet)
      })
    }
     
   
  
    
    
});