function gReg(opr){
    if(opr == 'user'){
        let name = document.getElementById('fd0').value;
        let mail = document.getElementById('fd1').value;
        let cfml = document.getElementById('fd2').value;
        let nick = document.getElementById('fd3').value;
        let pass = document.getElementById('fd4').value;
        let cfpw = document.getElementById('fd5').value;
        if(name && mail && pass){
            if(localStorage.getItem('pic')){
                if(mail == cfml){
                const mail = document.getElementById('fd1').value;
                    if(pass == cfpw){
                        if(nick){nick = nick}else{nick = '0';}
                        let str = name+"*"+mail+"*"+nick+"*"+pass+"*"+localStorage.getItem('pic');
                        localStorage.setItem('user', str);
                        localStorage.removeItem('pic');
                        gAlert('cadOK','gAuth()');                
                    }else{gAlert('pass','0');}
                }else{gAlert('mail','0');}
            }else{gAlert('nopic','0');}
        }else{gAlert('empty','0');}
    }
    if(opr == 'code'){
        let cd0 = document.getElementById('fd0').value;
        let cd1 = document.getElementById('fd1').value;
        let cd2 = document.getElementById('fd2').value;
        let cd3 = document.getElementById('fd3').value;
        let str = cd0+cd1+cd2+cd3;
        let code = str.toUpperCase();
        alert('code = '+code);
    }
}
var gRegFile = function(event){
    const prv = document.getElementById('prev');
    prv.src = URL.createObjectURL(event.target.files[0]);
    const out = document.getElementById('gFileOut');
    out.src = URL.createObjectURL(event.target.files[0]);
    prv.onload = function(){
        URL.revokeObjectURL(prv.src);
    }
    out.onload = function(){
        URL.revokeObjectURL(out.src);
        gRegPrev();
    }
};
function gRegPrev(){
    localStorage.setItem('pic', toBase64String(document.getElementById('gFileOut')));
}
