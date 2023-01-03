myChart = document.getElementById("myChart").getContext('2d');
myChart.canvas.parentNode.style.width = '32em';

MYChart = new Chart(myChart,{
    type:'doughnut',
    data:{
        labels:['Interest','Amount Invested'],
        datasets:[{
            label:'Interest vs Investment',
            data:[2934,"5000"],
            backgroundColor: [
                '#7A63FF',
                '#6656bf'
              ]
        }],
    },
    options:{/*responsive:true*/}

});
function number_input(num){
    bru = document.getElementById(num).value;
    if(Number(bru)<1){
        document.getElementById(num).value="0";
        window.alert("The value should be between 1 and 10 crore.");
    }else if(Number(bru)>100000000){
        document.getElementById(num).value="100000000";
        window.alert("The value should be between 1 and 10 crore.");
    }
}
function number_input_second(num){
    bru = document.getElementById(num).value;
    if(Number(bru)<0){
        document.getElementById(num).value="0";
        window.alert("The value should be between 0 and 10 crore.");
    }else if(Number(bru)>100000000){
        document.getElementById(num).value="100000000";
        window.alert("The value should be between 0 and 10 crore.");
    }
}
function number_input_years(num){
    bru = document.getElementById(num).value;
    if(Number(bru)<5){
        document.getElementById(num).value="5";
        window.alert("The value should be between 5 and 100");
    }else if(Number(bru)>100){
        document.getElementById(num).value="100";
        window.alert("The years should be between 5 and 100");
    }
}
function kaatle(fum){
    hum = document.getElementById(fum).value.toString();
    dum = hum.replace(".","");
    document.getElementById(fum).value = Number(dum);
}
function percent(num){
    hum = document.getElementById(num).value;
    if(Number(hum)<1){
        document.getElementById(num).value="1";
        window.alert("The value should be between 1 and 30");
    }else if(Number(hum)>30){
        document.getElementById(num).value="30";
        window.alert("The value should be between 1 and 30");
    }
}
function next_string(strin){
    if(strin == 4||strin == 5){
        return " Thousand";
       }else if(strin == 6||strin == 7){
        return " Lakhs";
       }else if(strin>=8&&strin<13){
        return " Cr";
       }else if(strin>=13){
        return " Lakh Cr";
       }else if(strin<4){
        return "";
       }
}
   
function invest(){
    // Defiening Dictionary
    const dict = {
        8: 1,
        7:10,
        6:1,
        5:10,
        4:1,
        3:100,
        2:10,
        1:1,
        9:10,
        10:100,
        11:1000,
        12:10000,
        13:1,
        14:10,
        15:100,
        16:1000,
        17:10000,
        18:100000,
        19:1000000,
        20:10000000,
        21:100000000,
        22:1000000000
    };
   //telling the code that the number of years want to invest should be less than or equal to years stay invested 
    if(Number(document.getElementById("stay_invested_years_invest").value)>Number(document.getElementById("stay_invested_years").value)){
        window.alert("Number of years staying invested cannot be less than number of years you want to invest.")
        document.getElementById("stay_invested_years_invest").value = 5;
        document.getElementById("stay_invested_years").value = 5;
        return;
    }else{
        //defiening variables
    check = document.getElementById("yearly").checked;
    amount_invest = Number(document.getElementById("amount_invest").value);
    amount_invest_every = Number(document.getElementById("amount_invest_invest").value);
    active_years = Number(document.getElementById("stay_invested_years_invest").value);
    stay_invested_years = Number(document.getElementById("stay_invested_years").value);
    ann_return = Number(document.getElementById("percent_invest").value)/100;
    amount_invested = 0;
    yearsl = active_years;
    //checking weather the user has chosen monthly or yearly and accodingly deifiening variable
    if(check == true){
        ann = 1+ann_return
        intrest_cal = amount_invest_every*active_years;
        amount_invested = intrest_cal + amount_invest;
        //console.log(amount_invested);
    }else{
        mudith = 1/12;
        krish = 1+ann_return;
        ann = krish**mudith;

        stay_invested_years = stay_invested_years*12;
        active_years = active_years*12;

        intrest_cal = amount_invest_every*active_years;
        amount_invested = intrest_cal + amount_invest;
        //console.log(amount_invested);
    }
//calculating the answer
inv = amount_invest;
//stay_invested_years++;
for(i=1;i<=stay_invested_years;i++){
    if(i > active_years){
        inv = inv*ann;
        console.log(inv);
    }else{
    inv = inv*ann + amount_invest_every;
    console.log(inv);
    }
}

//Showing The Answer
dhaga = "";
next_amount_invested = "";
none =  Math.round(inv);
console.log("None is "+none);

const gupta = none.toString().length;
const amount_inve = amount_invested.toString().length;

bruhs = none.toExponential().split('e').map(Number);
exponent_amount = amount_invested.toExponential().split('e').map(Number);

dumb = bruhs[0]*dict[gupta];
final_amount = exponent_amount[0]*dict[amount_inve];


document.getElementById('result_amount_val').innerHTML = "₹"+Math.round((dumb + Number.EPSILON) * 100) / 100+ next_string(gupta);
document.getElementById('result_years').innerHTML = yearsl+" years"; 
document.getElementById('annual_rates').innerHTML = " @ "+ann_return*100+"% p.a.";
document.getElementById("simple_amount").innerHTML = "₹"+Math.round((final_amount + Number.EPSILON) * 100) / 100+ next_string(amount_inve);

//Making CHart

MYChart.data.datasets[0].data[1] = amount_invested;
MYChart.data.datasets[0].data[0] = Number(none)-amount_invested;
MYChart.update();

    //Calculating the Answer
    /*inv = 100000;
    for(i=1;i<=30;i++){
        if(i >= 30){
            inv = inv*1.1;
        }else{
        inv = inv*1.1 + 100000;
        }
    }
    //Showing The Answer
    none =  Math.round(inv);
    console.log(none);
    const gupta = none.toString().length;
    bruhs = none.toExponential().split('e').map(Number);
    dumb = bruhs[0]*dict[gupta];
    console.log(dumb);
    document.getElementById("bruh").innerHTML = Math.round((dumb + Number.EPSILON) * 100) / 100+ dice[gupta];*/
}
    }