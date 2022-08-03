


function randomize() {
    var rgbcolor;
    red = Math.floor(Math.random() * 250 + 0);
    green = Math.floor(Math.random() * 250 + 0);
    blue = Math.floor(Math.random() * 250 + 0);
  
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  
    red = ("0" + red.toString(16)).substr(-2).toUpperCase();
    green = ("0" + green.toString(16)).substr(-2).toUpperCase();
    blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();

    return rgbColor;

  }
  
  randomize();


  function submit1(){
    document.getElementById("box_click").style.backgroundColor = randomize();

  }
  function submit2(){
    document.getElementById("box_click").style.backgroundColor = randomize();

  }
  function submit3(){
    document.getElementById("box_click").style.backgroundColor = randomize();

  }
