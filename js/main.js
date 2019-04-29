

function goIframe(loc) {
    
    document.getElementsByClassName('iframe')[0].scrollIntoView({
        behavior: 'smooth'
      })
    document.getElementsByClassName('iframe')[0].src = loc;
    document.getElementsByClassName('iframe')[0].contentWindow.location.reload();
    console.log('go')
    console.log(document.getElementsByClassName('iframe')[0].src)

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