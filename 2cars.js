var player;
var left1=0;
var right1=0;
$(document)
    .ready(function(){
         p1 = new Player($(window).width()/2-240, $(window).height()-100,  135, 'images/bluecar.png', 1);
        p1.setup();
        p2 = new Player($(window).width()/2+ 190, $(window).height()-100,  135, 'images/redcar.png', 1);
        p2.setup();
    })
    .keydown(function(k){
        if (k.which === 37) {// left arrow key 
            k.preventDefault();
            if(left1==0){
                p1.moveRight();
                left1=1;
            }
            else {
                p1.moveLeft();
                left1=0;
            }
        } 
        else if (k.which === 39) {// right arrow key 
            k.preventDefault();
            if(right1==1){
                p2.moveRight();
                right1=0;
            }
            else {
                p2.moveLeft();
                right1=1;
            }
        }
    })