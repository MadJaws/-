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
kminus.onclick = function(){
    document.getElementById('text').value+= ' - ';
}
kmulti.onclick = function(){
    document.getElementById('text').value+= ' * ';
}
kdivision.onclick = function(){
    document.getElementById('text').value+= ' / ';
}
ktotal.onclick = function(){
    let sum = document.getElementById('text').value;
    let sum1 = sum.split(' ');
    let number = [];
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    for (let q of sum1){
         if ((q !='+') && (q !='-') && (q != '*') && (q != '/')){
            number.push (Number(q));
            continue;
        }else{
            number.push (q);
            continue;
        }
    } 
    for (let i=0; i<number.length; i++){
        if (number[i] === '*'){
            sum4 = 1;
        } else if (number[i] === '/'){
            sum4 = 2;
        } else if (sum4 === 1){
            number[i] = number[i]*number[i-2];
            number.splice(i-2,2);
            i = i - 2;
            sum4 = 0;
        } else if(sum4 === 2){
            number[i] = number[i-2]/number[i];
            number.splice(i-2,2)
            i = i -2;
            sum4 = 0;
        } 
        console.log(number);
    } 
    console.log(number);
     for (let i=0; i<number.length; i++ ){
        if (number[i] === '+'){
             sum3 = 1;
            continue;
        }else if(number[i] === '-'){
            sum3 = 2;
            continue;
        }else if(sum3 === 2){
            sum2 = sum2 - number[i];
            sum3 = 0;
            continue;
        } else if(sum3 === 1){
            sum2 += number[i];
            sum3 = 0;
            continue;
        } else {
            sum2 += number[i];
            continue;
        }
} console.log(sum2);
document.getElementById('text').value = sum2;
} 
