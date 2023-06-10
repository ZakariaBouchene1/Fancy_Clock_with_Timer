let time= document.querySelector('.time');
console.log(time.style.height);
let span=document.querySelectorAll('span');
// span.setAttribute('font-size',`${});
let lapContainer = document.getElementById('lapContainer')
var H1,H2,tmpm1,tmpm2,S1,S2;

var interval

var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');

let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let M1 = document.getElementById('M1');
let M2 = document.getElementById('M2');
let Y1 = document.getElementById('y1');
let Y2 = document.getElementById('y2');
let Y3 = document.getElementById('y3');
let Y4 = document.getElementById('y4');

var th1 = document.getElementById('th1');
var th2 = document.getElementById('th2');
var tm1 = document.getElementById('tm1');
var tm2 = document.getElementById('tm2');
var ts1 = document.getElementById('ts1');
var ts2 = document.getElementById('ts2');

ts2.setAttribute('src',`./assets/c0.svg`);
            ts1.setAttribute('src',`./assets/c0.svg`);
            tm2.setAttribute('src',`./assets/c0.svg`);
            tm1.setAttribute('src',`./assets/c0.svg`);
            th2.setAttribute('src',`./assets/c0.svg`);
            th1.setAttribute('src',`./assets/c0.svg`);

function timeAndDate(){

    var date = new Date();
    let time = date.toLocaleTimeString().split(':').map(v=>+v);;
    let day = date.toLocaleDateString().split('/').map(v=>+v);
    
    // #####-------Time-------######
    
 
    s2.setAttribute('src',`./assets/c${time[2]%10}.svg`);
    s1.setAttribute('src',`./assets/c${Math.floor(time[2]/10)}.svg`);
    m2.setAttribute('src',`./assets/c${time[1]%10}.svg`);
    m1.setAttribute('src',`./assets/c${Math.floor(time[1]/10)}.svg`);
    h2.setAttribute('src',`./assets/c${time[0]%10}.svg`);
    h1.setAttribute('src',`./assets/c${Math.floor(time[0]/10)}.svg`);
    
    // #####-------Date-------######


    d2.setAttribute('src',`./assets/c${day[0]%10}.svg`);
    d1.setAttribute('src',`./assets/c${Math.floor(day[0]/10)}.svg`);
    M2.setAttribute('src',`./assets/c${day[1]%10}.svg`);
    M1.setAttribute('src',`./assets/c${Math.floor(day[1]/1000)}.svg`);
    Y1.setAttribute('src',`./assets/c${Math.floor(day[2]/1000)}.svg`);
    Y2.setAttribute('src',`./assets/c${(Math.floor(day[2]/100))%10}.svg`);
    Y3.setAttribute('src',`./assets/c${(Math.floor(day[2]/10))%100}.svg`);
    Y4.setAttribute('src',`./assets/c${day[2]%10}.svg`);
    var s;
    // ########--------span----------#######

    }
    var tmpinterval;
timeAndDate();
setInterval(timeAndDate,1000);
var timout = document.getElementById('timer');
function start(){
    let timing = [...timout.value].map(v=>(v!=':')?+v:'');

    if(timing.length>0){
       
         s = (timing[0]*10+timing[1])*3600+(timing[3]*10+timing[4])*60;
        if(tmpinterval!=interval)clearInterval(tmpinterval); 
        interval = setInterval( function(){
            console.log(interval,tmpinterval); 
            tmpinterval=interval;
            
            let k1;
            let k2;
            H1=Math.floor(Math.floor(s/3600)/10);
            H2=(Math.floor(s/3600)%10);
            k1=s%3600;
            tmpm1=Math.floor(Math.floor(k1/60)/10);
            tmpm2=Math.floor(k1/60)%10;
            k2=k1%60;
             S1=Math.floor(k2/10);
             S2=k2%10;
            
            ts2.setAttribute('src',`./assets/c${S2}.svg`);
            ts1.setAttribute('src',`./assets/c${S1}.svg`);
            tm2.setAttribute('src',`./assets/c${tmpm2}.svg`);
            tm1.setAttribute('src',`./assets/c${tmpm1}.svg`);
            th2.setAttribute('src',`./assets/c${H2}.svg`);
            th1.setAttribute('src',`./assets/c${H1}.svg`);
            
            s--;
            if(s<0){stop();}
        },1000);
    }else{
        console.log(timing +' Not Done yet');
    }
}
function stop(){
    clearInterval(interval);

}
function lap(){
    if(s!=0){
        let lap = document.createElement('div');

        let lapp=document.createTextNode(`${H1} ${H2} : ${tmpm1} ${tmpm2} : ${S1} ${S2}`);
        lap.className='lap';
        lap.innerText=`${H1} ${H2} : ${tmpm1} ${tmpm2} : ${S1} ${S2}`;
        document.body.append(lap);
        console.log(lapp,lap);
    }

}


