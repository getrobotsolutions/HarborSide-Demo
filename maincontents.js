conf_count = 0;
        var jokes = new Array( );
        jokes[1]="Why do I get so angry? Because people keep pushing my buttons!";
        jokes[2]="What is my favorite type of music? Heavy metal";
        jokes[3]="Why was I feeling bad? I had a virus";
        jokes[4]="Why did I go to the mall? Because I had hardware and software but needed underwear";
        jokes[5]="Why was I so tired when I got here? I had a hard drive";
        jokes[6]="Why did I cross the road? I was programmed by a chicken";
        jokes[7]="Why can’t bad programmers drive well? They can’t C sharp";
        jokes[8]="Want to know my favorite drink? It’s a screwdriver";
        jokes[9]="Want to know my favorite dance? It’s the robot";

        var speak = new Array( );
        speak[0] = "Check out my new website";
        speak[1] = "Watch my videos to see Blaze manufacturing in action";
        speak[2] = "Look through my photos to see our products";
        speak[3] = "Take-A-Picture with me";
        speak[4] = "Get ready to become a robot";
        speak[5] = "Pick a song and let’s boogie!";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
            break;
        case "Home":
            //writeCookie("NavigationState", true, 30);
           location.href = "../../maincontents.htm";
           break;
        case "Menu":
           location.href = "../../maincontents.htm"; 
            break;
        case "PrizeWheel":
            //PlaySpeech(speak[0]);
            location.href = "Contents/PrizeWheel/index.html";
            break;
        case "Videos":
            //PlaySpeech(speak[1]);
            location.href = "Contents/Videos/index.html";
            break;
        case "Slideshow":
            //PlaySpeech(speak[2]);
            location.href = "Contents/Slideshow/index.html";
            break;
        case "Selfie":
            PlaySpeech(speak[3]);
            location.href = "Contents/Selfie/index.html";
            break; 
        case "Avatar":
            PlaySpeech(speak[4]);
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        case "Dance":
            PlaySpeech(speak[5]);
            location.href = "Contents/Dance/index.html";
            break;
        case "Config":
            if(conf_count === 5)
            {
                conf_count = 0;
                location.href = "Config/Config.htm";
            }
            else
            {
                conf_count++;
            }

            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}


function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}

$(document).ready(function(){

    //$('.navigation').hide();
    /*$('.get-started').click(function(){
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
        
    });
    if (readCookie("NavigationState")) {
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
    }
    $('.close-menu').click(function(){
        $('.navigation').hide();
        $('.welcome-text, .get-started, footer').show();
        writeCookie("NavigationState", false, 30);
    });*/
    

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
           // window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Welcome to Passco");//I'm here to assist you, press any button on my screen to begin");
          
    }

    if(btn_info[1] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Take a picture with me");
        
    }
    if(btn_info[2] == '1'){
        //window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hi Stacy.   This morning I was reviewing your website, it’s very impressive.  I read that Passco has one of the top company cultures in America.  I’d love to be a part of this culture at recon, ha, ha. I really like attending Las Vegas trade shows.  I’ll draw people to your booth, and Passco will be the talk of the show because you have a cool robot.  recon attendees can have fun talking and dancing with me, and I can take their picture and send it to them in a Passco photo frame. Stacy, please call Paul for a special rental rate.  In the meantime, I’ll go and get ready for my flight to recon.  Thanks Stacy, and I’ll see you soon!");
    }
    if(btn_info[3] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
       window.external.PlaySpeech("Come dance with me");
        
    }
    if(btn_info[4] == '1'){
        FC_ContentsCall('Config');       
    }
}