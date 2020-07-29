function gReg(opr){
    if(opr == 'user'){
        var name = document.getElementById('fd0').value;
        var mail = document.getElementById('fd1').value;
        var cfml = document.getElementById('fd2').value;
        var nick = document.getElementById('fd3').value;
        var pass = document.getElementById('fd4').value;
        var cfpw = document.getElementById('fd5').value;
        if(mail == cfml){
            var mail = document.getElementById('fd1').value;
            if(pass == cfpw){
                if(nick){nick = nick}else{nick = '0';}
                var str = name+"*"+mail+"*"+nick+"*"+document.getElementById('fd4').value+"*"+localStorage.getItem('pic');
                localStorage.setItem('user', str);
                alert('sucesso');
                gAuth();                
            }else{alert('erro');}
        }else{alert('erro');}
    }
    if(opr == 'code'){
        var cd0 = document.getElementById('fd0').value;
        var cd1 = document.getElementById('fd1').value;
        var cd2 = document.getElementById('fd2').value;
        var cd3 = document.getElementById('fd3').value;
        var str = cd0+cd1+cd2+cd3;
        var code = str.toUpperCase();
        alert('code = '+code);
    }
}
var gRegFile = function(event){
    var prv = document.getElementById('prev');
    prv.src = URL.createObjectURL(event.target.files[0]);
    var out = document.getElementById('gFileOut');
    out.src = URL.createObjectURL(event.target.files[0]);
    prv.onload = function(){
        URL.revokeObjectURL(prv.src);
    }
    out.onload = function(){
        URL.revokeObjectURL(out.src);
        gRegProv();
    }
};
function toBase64String(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 90, 90);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}
function gRegProv(){
    localStorage.setItem('pic', toBase64String(document.getElementById('gFileOut')));
}
