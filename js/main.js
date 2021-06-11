function true_vw() {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
  
    window.document.getElementById('wrapper').style.width = `calc(100vw - ${scrollbarWidth}px)`;
  }
  true_vw()

  
  