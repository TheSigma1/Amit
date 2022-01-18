!
function reversed(){
    x=parseInt(window.prompt("enter values here:- ","0"),10);
    y= x.toString();
    z= y.split('');
    b = z.reverse();
    c = b.join('');
    a = parseInt(c);
    console.log(a);
}
reversed();