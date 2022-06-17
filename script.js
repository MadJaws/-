k9.onclick = function(){
    document.getElementById('text').value+= '9';
}
k8.onclick = function(){
    document.getElementById('text').value+= '8';
}
k7.onclick = function(){
    document.getElementById('text').value+= '7';
}
k6.onclick = function(){
    document.getElementById('text').value+= '6';
}
k5.onclick = function(){
    document.getElementById('text').value+= '5';
}
k4.onclick = function(){
    document.getElementById('text').value+= '4';
}
k3.onclick = function(){
    document.getElementById('text').value+= '3';
}
k2.onclick = function(){
    document.getElementById('text').value+= '2';
}
k1.onclick = function(){
    document.getElementById('text').value+= '1';
}
k0.onclick = function(){
    document.getElementById('text').value+= '0';
}
ksum.onclick = function(){
    document.getElementById('text').value+= ' + ';
}
ktotal.onclick = function(){
    let sum = document.getElementById('text').value;
    let sum1 = sum.split(' ');
    let number = [];
    let sum2 = 0;
    for (let q of sum1){
         if (q !='+'){
            number.push (Number(q));
        }else{
            number.push (q);
        }
    }
    for (let w of number){
        if (w === '+'){
            sum2 += w; 
        } else {
            sum2 += w;
        }
        
    }
    // console.log(number)
   
    console.log(sum2)
    
    // console.log(sum);
    // console.log(sum1);
    // console.log(typeof(sum1))
}