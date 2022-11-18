var numberOfButton=document.querySelectorAll(".alpha").length;
for(var i=0;i<numberOfButton;i++){
    document.querySelectorAll(".alpha")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
    });
    
    }


        
    
      
        
       document.addEventListener("keypress",function(event){
         makeSound(event.key);
       });

     
    
function makeSound(key){
    switch (key) {
        case "A":
            var tom1=new Audio('./sounds/A.mp3');
            tom1.play();
            
        
                
       

            break;
     case "B":
        var tom2= new Audio('./sounds/b.mp3');
        tom2.play();
        break;
        case "C":
            var tom3= new Audio('./sounds/c.mp3');
            tom3.play();
            break;
            case "D":
            
                var tom4= new Audio('./sounds/d.mp3');
                tom4.play();
                break;
                case "E":
            
                    var tom5= new Audio('./sounds/e.mp3');
                    tom5.play();
                    break;
                    case "F":
            
                        var tom6= new Audio('./sounds/f.mp3');
                        tom6.play();
                        break;
                        case "G":
            
                            var tom7= new Audio('./sounds/g.mp3');
                            tom7.play();
                            break;
                            case "H":
            
                                var tom8= new Audio('./sounds/h.mp3');
                                tom8.play();
                                break;
                                case "I":
            
                                    var tom9= new Audio('./sounds/i.mp3');
                                    tom9.play();
                                    break;
                                    case "J":
            
                                        var tom10= new Audio('./sounds/j.mp3');
                                        tom10.play();
                                        break;
                                        case "K":
            
                                            var tom11= new Audio('./sounds/k.mp3');
                                            tom11.play();
                                            break;
                                            case "L":
            
                                                var tom12= new Audio('./sounds/o.mp3');
                                                tom12.play();
                                                break;
                                                case "M":
            
                                                    var tom13= new Audio('./sounds/m.mp3');
                                                    tom4.play();
                                                    break;
                                                    case "N":
            
                                                        var tom14= new Audio('./sounds/n.mp3');
                                                        tom14.play();
                                                        break;
                                                        case "O":
            
                                                            var tom15= new Audio('./sounds/o.mp3');
                                                            tom15.play();
                                                            break;
                                                            case "P":
            
                                                                var tom16= new Audio('./sounds/p.mp3');
                                                                tom16.play();
                                                                break;
                                                                case "Q":
            
                                                                    var tom17= new Audio('./sounds/q.mp3');
                                                                    tom17.play();
                                                                    break;
                                                                    case "R":
            
                                                                        var tom18= new Audio('./sounds/r.mp3');
                                                                        tom18.play();
                                                                        break;
                                                                        case "S":

                                                               var tom19= new Audio('./sounds/s.mp3');
                                                                            tom19.play();
                                                                            break;
                                                                            case "T":
            
                                                                                var tom20= new Audio('./sounds/t.mp3');
                                                                                tom20.play();
                                                                                break;
                                                                                case "U":
            
                                                                                    var tom21= new Audio('./sounds/u.mp3');
                                                                                    tom4.play();
                                                                                    break;
                                                                                    case "V":
            
                                                                                        var tom22= new Audio('./sounds/v.mp3');
                                                                                        tom22.play();
                                                                                        break;
                                                                                        case "W":
            
                                                                                            var tom23= new Audio('./sounds/w.mp3');
                                                                                            tom23.play();
                                                                                            break;
                                                                                            case "X":
                                                                                                var tom24= new Audio('./sounds/x.mp3');
                                                                                                tom24.play();
                                                                                                break;
                                                                                                case "Y":
            
                                                                                                    var tom25= new Audio('./sounds/y.mp3');
                                                                                                    tom25.play();
                                                                                                    break;
                                                                                                    case "Z":
                                                                                                    var tom26= new Audio('./sounds/Z.mp3');
                                                                                                    tom26.play();
                                                                                                    break;
                                                                                                    case "auto":
                                                                                                        var tom27= new Audio('./sounds/auto.mp3')
                                                                                                        tom27.play();
                                                                                                        break;
        default: 
            
        
            break;
     }
    }
