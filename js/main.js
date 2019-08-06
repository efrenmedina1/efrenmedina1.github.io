

function goIframe(loc) {


  document.getElementById("modals").style.display = "inline";
    document.getElementsByClassName('iframe')[0].src = loc;
    document.getElementsByClassName('iframe')[0].contentWindow.location.reload();
    
    
    
  }

  function goIframe2(loc) {


    document.getElementById("modals2").style.display = "inline";
      
      
      
    }

  function leaveIframe(loc) {

    document.getElementById("modals").style.display = "none";
    document.getElementById("modals2").style.display = "none";
    
 
  
  
    }

  function goHome() {
    
    document.getElementsByID('Home')[0].scrollIntoView({
        behavior: 'smooth'
      })
    }
    
  function goProjects() {
    console.log('projects')
    
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
      })
    }

    function goContact() {
      console.log('Contact')
      
      document.getElementById('contact').scrollIntoView({
          behavior: 'smooth'
        })
      }



      ///////routing


     function routeHome(){
      document.getElementById("home").style.display = "inline";
      document.getElementById("projects").style.display = "none";
      document.getElementById("contact").style.display = "none";
     }

     function routeContact(){
      document.getElementById("home").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("contact").style.display = "inline";
     }

     function routeProjects(){
      document.getElementById("home").style.display = "none";
      document.getElementById("projects").style.display = "inline";
      document.getElementById("contact").style.display = "none";
     }

     ///////background fadeing

     $(document).ready(function(){
      setInterval(function() {
          $(".streakFour").show().delay(1000).fadeOut();
      }, 2000 );
   });