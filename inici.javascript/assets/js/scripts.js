 var currentnumberwrapper= document.getElementById("currentnumber")
 var currentnumber=0

 function increment() { currentnumber = currentnumber +1;
    currentnumberwrapper.innerHTML=currentnumber;
     
    }

    function decrement() {currentnumber = currentnumber -1;
        currentnumberwrapper.innerHTML=currentnumber;

    }