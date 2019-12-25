const canvas = document.querySelector('#Etch-a-Sketch');
const ctx = canvas.getContext('2d'); 
const width = canvas.width; 
const height = canvas.height; 

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10; 

let hue = 0; 

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath(); 
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke(); 

//ctx.beginPath();
//ctx.lineTo(1, 1);
//ctx.lineTo(30,30);
//xctx.stroke()
console.log(width, height);



// attach event listeners to the arrow keys on the keyboard. 
function handleKey(e) {
    if(e.key.includes('Arrow')){
    e.preventDefault();
    draw({ key: e.key} )
    console.log('Handle key');
} }



window.addEventListener('keydown', handleKey);

function draw({ key }){
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    console.log(key);
    ctx.beginPath()
    ctx.moveTo(x, y);
    switch (key) {
        case 'ArrowUp':
        y = y - 10;
        break;
        case 'ArrowDown':
            y= y + 10;
        break;
        case 'ArrowLeft':
            x= x - 10 ; 
            break; 
        case 'ArrowRight':
            x =  x + 10; 
            break;
        default:
            break;
    }
   
    ctx.lineTo(x , y);
    ctx.stroke();
    
    

}

// creat function for each direction
function up(x,y) { 
    
ctx.lineTo(x,y)       
ctx.lineTo(x ,y -10);
ctx.stroke()
return (x , y - 10)
    
}

function down (x,y) {
    ctx.lineTo(x,y)       
    ctx.lineTo(x ,y +10);
    ctx.stroke()
    return (x,y+10)
}
function right(x,y) { 
 
    
        ctx.lineTo(x,y)       
        ctx.lineTo(x+10 ,y);
        ctx.stroke()
        return (x , y-10)
}

function left(x,y) { 
    
    ctx.lineTo(x,y)       
    ctx.lineTo(1-10 ,y);
    ctx.stroke()
    return (x , y-10)
}

function clearCanvas(){
    canvas.classList.add('shake')
   
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
    }, {
        once: true 
    })
    ctx.clearRect(0,0, width, height,)
 
} 

const button = document.querySelector('.shake')
button.addEventListener('click', clearCanvas);