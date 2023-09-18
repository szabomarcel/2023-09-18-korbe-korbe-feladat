const teknos = document.querySelector('#teknos');
const szelesseg = window.innerWidth;
const magassag = window.innerHeight;
var szam = 0;
console.log(szelesseg, magassag);
teknos.addEventListener('click', korbe);
function korbe(){
    x = Math.random() * szelesseg;
    y = Math.random() * magassag;
    console.log(x,y);
    if(teknos > szelesseg){        
        teknos.style.position = 'absolute';
        teknos.style.right = x += 1000;         
    }
    if(teknos > magassag){        
        teknos.style.position = 'absolute';
        teknos.style.top = y -= 1000;            
    }
    if(teknos < szelesseg){        
        teknos.style.position = 'absolute';
        teknos.style.right = x -= 1000;        
    }
    if(teknos < magassag){        
        teknos.style.position = 'absolute';
        teknos.style.bottom = y += 1000;        
    }
    setInterval(teknos, 10);
}

