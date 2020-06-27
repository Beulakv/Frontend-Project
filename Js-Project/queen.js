var queen={
                direction:"s",position:{x:4,y:4}
          }
var input=prompt("Enter your direction and steps like N5 S2....");

if(input.length==3)
{
    var steps =Number(input.slice(2,));
    var direction=input.slice(0,2).toUpperCase();
    changeDirection(direction,steps);
}
else if (input.length==2)
{
    var steps=Number(input.slice(1,));
    var direction = input.slice(0,1).toUpperCase();
    changeDirection(direction,steps);
}
else
{
        alert("ALERT .......\nInput range should be 2 to 3 only...");
        var input=prompt("Enter your direction and steps like N5 S2....");

}

function changeDirection(direction,steps){
    switch(direction)
    {
        case "S":
            if(queen.position.x+steps<=7)  
            {
                queen.position.x+=steps;
                console.log("Now your position is "+queen.position.x,queen.position.y);
                break;
            }
            else
            {
                    console.log("your position is outof boundary so invalid position..");
            }
            break;

       case "N":
            if(queen.position.x-steps>=0) 
            {
                    queen.position.x-= steps;
                    console.log("Now your position is "+queen.position.x,queen.position.y);
            }
            else
            {
                    console.log("your position is outof boundary so invalid position..");
            }
            break;

       case  "E":
            if(queen.position.y+steps<=7)
            {
                queen.position.y+=steps;
                console.log("Now your position is "+queen.position.x,queen.position.y);
                break;   
            }
            else
            {
                console.log("your position is outof boundary so invalid position..");
            }
            break;

       case "W" :  
            if(queen.position.y-steps>=0)
            {
                queen.position.y-=steps;
                console.log("Now your position is "+queen.position.x,queen.position.y);
                break;  
            }
            else
            {
                console.log("your position is outof boundary so invalid position..");
            }
            break;

       case "NE" :
            if( queen.position.x+steps<=7 && queen.position.y+steps<=7)
            {
                queen.position.x+=steps;
                queen.position.y+=steps;
                console.log("Now your position is "+queen.position.x,queen.position.y);
                break; 
            }
            else
            {
                console.log("your position is outof boundary so invalid position..");
            }
            break;

       case "SW":
            if( queen.position.x+steps<=7 && queen.position.y-steps>=0)
            {
                queen.position.x+=steps;
                queen.position.y-=steps;
                console.log("Now your position is "+queen.position.x,queen.position.y);
                break; 
            }
            else
            {
                console.log("your position is outof boundary so invalid position..");
            }
            break;

       case "NW":
            if( queen.position.x-steps>=0 && queen.position.y-steps>=0)
            {
                queen.position.x-=steps;
                queen.position.y-=steps;
                console.log("Now your position is "+queen.position.x,queen.position.y);
                break;  
            }
            else 
            {
                console.log("your position is outof boundary so invalid position..");
            }
            break;

       case "SE" :
            if( queen.position.x+steps<=7 && queen.position.y+steps<=7)
            {
                queen.position.x+=steps;
                queen.position.y+=steps;
                console.log("Now your position is "+queen.position.x,queen.position.y);
                break; 
            }
            else
            {
                console.log("your position is outof boundary so invalid position..");
            }
            break;

       default:  
            console.log("your direction is invalid ....please enter valid diretion");
    }
}


 var alpha = ["a","b","c","d","e","f","g","h"];
 var num = ["1","2","3","4","5","6","7","8"];

 console.log("Current position is " + alpha[queen.position.x]+num[queen.position.y]);