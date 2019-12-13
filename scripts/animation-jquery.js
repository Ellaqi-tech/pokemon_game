// A $( document ).ready() block.
//$( document ).ready(function() {

$(document).on('keypress',function(e) {
    if(e.which == 13) {
    // author: Paolo Bergantino;
    // why use it: to detect press space bar to start the game
    // access date: Dec 10
    // website: https://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery
        $('#description').css('display','none');
        $('#run').css('width','78px');
        $('body').addClass('bodybg');
        setTimeout(function() {
            $('#moon').css('display','block');
        },10000);
        
        // initial setup:
        var containerWidth = parseInt($('#container').width());
        var containerHight = parseInt($('#container').height());
        var ballInitialPosition = parseInt($('#ball').css('right'));
        var ballInitialHeight = parseInt($('#ball').css('top'));
        var pokemonLeft = parseInt($('#pokemon').css('left'));
        var pokemonHeight = parseInt($('#pokemon').css('top'));
        var s = 0;
    
        var speed = 10;
//*****************set speed up every 3s
        var newspeed = setInterval(function(){
                speed = speed +0.5;
            },3000);
        
// *****************setInterval function, every 40 ms:
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
            $('#moon').css('display','none');
            $('#run').css('display','none');
            stopGame();
            } else if ((ballPositionleft <= pokemonPositionleft) && (ballPositionleft >= (pokemonPositionleft - 78))) {
//************************************set score
                s = s+10;
                $('#score').text(s);
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
            },3000);
            
        }

//************************* reset the game:
        $('#reset').click(function() {
            location.reload();
        })

    }
        
});      
        
        
        
        
        


