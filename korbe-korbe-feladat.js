const teknos = document.querySelector('#teknos');
var szelesseg = window.innerWidth;
var magassag = window.innerHeight;
var sebesseg = 0;
var en = 0, ok = 0;
function korbe(){
    switch(sebesseg){
        case 0:
            if(en < szelesseg){        
                szelesseg += 10;         
            }
            else{
                sebesseg = 1;
            }
            break;
        case 1:
            if(ok < szelesseg){        
                szelesseg += 10;         
            }
            else{
                sebesseg = 2;
            }
            break;
        case 2:
            if(en > 0){        
                szelesseg -= 10;         
            }
            else{
                sebesseg = 3;
            }
            break;
        case 3:
            if(ok < 0){        
                szelesseg -= 10;         
            }
            else{
                sebesseg = 0;
            }
            break;
    }
    console.log(en,ok);
    csiga.style.left = parseInt(en).toString() + "px";
    csiga.style.top = parseInt(ok).toString() + "px";
}
setInterval(korbe, 10000);
/*if(teknos > magassag){        
    teknos.style.position = 'absolute';
    teknos.style.top = y += 1000;            
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

x = Math.random() * szelesseg;
y = Math.random() * magassag;
    console.log(x,y);
    setInterval(teknos, 10);*/