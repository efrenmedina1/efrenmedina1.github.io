

function go(loc) {
    
    document.getElementsByClassName('iframe')[0].scrollIntoView({
        behavior: 'smooth'
      })
    document.getElementsByClassName('iframe')[0].src = loc;
    document.getElementsByClassName('iframe')[0].contentWindow.location.reload();
    console.log('go')
    console.log(document.getElementsByClassName('iframe')[0].src)
    

  }