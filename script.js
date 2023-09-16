var result=document.querySelector('#result');
 var btn=document.querySelectorAll('.btn');

 for(item of btn){
    item.addEventListener('click',(e) => {
        btntext=e.target.innerText;
        result.value+=btntext;
    });
}

function backspace(){
    if(result.value==='NaN' || result.value==='Error' || result.value==='undefined'){
        result.value='';
    }
    else{
        result.value=result.value.slice(0,-1);
    }
}

function fact(){
    var num=parseFloat(result.value);
    if(!isNaN(num) && Number.isInteger(num) && num>=0){
        var res=1;
        for(var i=1;i<=num;i++){
            res*=i;
        }
        result.value=res;
    }
    else{
        result.value='Error';
    }
}

function sin(){
    result.value=Math.sin(parseFloat(result.value));
}

function pi(){
    result.value=Math.PI;
}

function cos(){
    result.value=Math.cos(parseFloat(result.value));
}

function log(){
    result.value=Math.log(parseFloat(result.value));
}
    
function tan(){
    result.value=Math.tan(parseFloat(result.value));
}

function sqrt(){
    var num=parseFloat(result.value);
    if(num>=0) {
        result.value=Math.sqrt(num);
    } 
    else{
        result.value='Error';
    }
}

function e(){
    result.value=Math.exp(parseFloat(result.value));
}

function pow(){
    result.value=Math.pow(parseFloat(result.value), 2);
}

function handleKeyPress(event){
    if(event.key==='Enter'){
        evaluateExpression();
    }
}

function evaluateExpression(){
    try{
        if(result.value===''){
            result.value='';
        }else{
            var evalResult=eval(result.value);
            if(isNaN(evalResult) || !isFinite(evalResult)){
                result.value='Error';
            }
            else{
                if(evalResult===Infinity || evalResult===-Infinity) {
                    result.value = 'Error';
                }
                else{
                    result.value = evalResult;
                }
            }
        }
    }catch(error){
        result.value='Error';
    }
}