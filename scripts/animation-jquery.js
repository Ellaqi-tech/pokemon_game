//document.getElementById("audio").play();
var enterPressed =0; //detect Enter key pressed times
$(document).on('keypress',function(e) {
    var keyCode = (e.keyCode || e.which);
    if(keyCode === 13) {
        if(enterPressed === 0) { 
            enterPressed++;
        // author: Paolo Bergantino;
        // why use it: to detect press space bar to start the game
        // access date: Dec 10
        // website: https://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery
        $('#description').css('display','none');
        $('header').css('z-index','2');
        $('#static').css('display','none');
        $('#run').css('display','block');
        $('#run').css('width','78px');
        $('body').addClass('bodybg');
        setTimeout(function() {
            $('#moon').css('display','block');
        },7000);
        $('#audio').css('display','none'); 
        // initial setup:
        var containerWidth = parseInt($('#container').width());
        var containerHight = parseInt($('#container').height());
        var ballInitialPosition = parseInt($('#ball').css('right'));
        var ballInitialHeight = parseInt($('#ball').css('top'));
        var pokemonLeft = parseInt($('#pokemon').css('left'));
        var pokemonHeight = parseInt($('#pokemon').css('top'));
        var s = 0;
        var speed = 11;
//*****************set speed up every 3s
        var newspeed = setInterval(function(){
                speed = speed +0.5;
            },3000);
// *****************setInterval function, every 40 ms
        var theGame = setInterval(function(){
            var ballCurrentPosition = parseInt($('#ball').css('right'));
           
            // set ball back when the ball run out of the container:
            if(ballCurrentPosition > containerWidth) {
                var newHeight = parseInt(Math.random()*100);
                //alert(ballInitialHeight + newHeight);
                $('#ball').css('top', ballInitialHeight + newHeight);             
                ballCurrentPosition = ballInitialPosition;
            }//works,good         
            // make the ball move:
            $('#ball').css('right',ballCurrentPosition + speed);                 
//****************************set game over 
        var ballPositionleft = parseInt($('#ball').position().left);
        var pokemonPositionleft = parseInt($('#pokemon').position().left);
            
        var ballPositiontop = parseInt($('#ball').position().top);
        var pokemonPositiontop = parseInt($('#pokemon').position().top);
            
        if ((ballPositionleft <= pokemonPositionleft) && (ballPositionleft >= (pokemonPositionleft - 78)) && ( (ballPositiontop + 10) < pokemonPositiontop)) {
            $('#ball').addClass('bigball');
            $('body').removeClass('bodybg');
            $('#moondiv').css('display','none');
            $('#run').css('display','none');
            stopGame();
            } else if ((ballPositionleft <= pokemonPositionleft) && (ballPositionleft >= (pokemonPositionleft - 78))) {
//************************************set score
                s = s+10;
                $('#score').text(s);
                if(s>=100 && s<300) {
                    $('#score').css('color','#A2D7D5');
                } else if(s>=300 && s<500) {
                    $('#score').css('color','#F5E97E');
                } else if(s>=500 && s<700) {
                    $('#score').css('color','#CC6310');
                } else if(s>=700 && s<900) {
                    $('#score').css('color','#DF807E');
                } else if(s>=900) {
                    $('#score').css('color','#E64556');
                } 
            } 
        },40); //setInterval function end       
//***************************detect space bar pressed:
        $(window).on('keypress',function (e){
            if (e.keyCode === 32) {
                    $('#pokemon').addClass('jump');
                setTimeout(function(){
                    $('#pokemon').removeClass('jump');
                    },1500);    
                } else {
                    clearTimeout;
                }
            });
//************************** stop the game:
        function stopGame() {
            clearInterval(theGame);
            setTimeout(function() {
                $('#reset').css('display','block');
                $('#ball').addClass('oops');
                $('#gotcha').css('display','block');
            },3000);
        }
//************************* reset the game:
        $('#reset').css('z-index','1');
        $('#reset').click(function() {
            location.reload();
        })        
    }
//************************* reload the game when press Enter key the second time      
        else if(enterPressed >= 1) {
            e.preventDefault();
            location.reload();
        }
    } //if(enterpress === 0) statement end   
});      
        
        
        
        
        


