const newarr = [0];
let counter = 15;
let lastItem;

loop();

function loop(){
    if (counter > 0) {
        counter -= 1;
        lastItem = newarr[0]+1;
        newarr.unshift(lastItem);
        if (newarr.length >= 10) {
            newarr.pop();
        }
        console.log(newarr);
        setTimeout(loop, 500);
    }
}