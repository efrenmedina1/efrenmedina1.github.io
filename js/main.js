

function goIframe(loc) {
  let element = document.getElementById("parallax");
    element.classList.add("bodyOpen");

  document.getElementById("modals").style.display = "inline";
    document.getElementsByClassName('iframe')[0].src = loc;
    document.getElementsByClassName('iframe')[0].contentWindow.location.reload();
    
    console.log('go')
    console.log(document.getElementsByClassName('iframe')[0].src)
    
    
  }

  function leaveIframe(loc) {
    let element = document.getElementById("parallax");
    element.classList.add("bodyClosed");
    document.getElementById("modals").style.display = "none";
    location.reload();
 
  
  
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

     