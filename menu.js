window.onload = function () {
    //alert(window.innerWidth);
    if (window.innerWidth <= 890) {
        console.log("Appareil portable détecté");
      }
      else {
        console.log(window.innerWidth);
        const menuElement = document.getElementById('menu');
   
        if (menuElement) {
            menu.classList.toggle("hidden");
        }
      }

    
  };