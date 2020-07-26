function insertG(obj,id,w,h,t,l,b,r){
    // Objeto gráfico logo
    if(obj === 'logo'){
        var logo = 'position:absolute;bottom:'+b+'px;right:'+r+'px;width:'+w+'px;height:'+h+'px;background:url('+lg+');filter:invert(1)';
        var lgo = document.createElement('logo');lgo.style = logo;lgo.id = id;bd.appendChild(lgo);
    }
    // Objeto gráfico popup
    if(obj === 'popup'){
        var dstl = 'position:absolute;top:'+t+'%;left:'+l+'%;width:'+w+'px;height:'+h+'px;';
            dstl+= 'border-radius:9px;background:#cccccccc;color:#333;';
            dstl+= 'box-shadow: 0px 0px 10px #333;font:13px sans-serif;padding:9px';
        var div = document.createElement('div');div.style = dstl;div.id = id;bd.appendChild(div);
    }
}
function genClear(){
    bd.innerHTML = "";
    bd.style.font = "";
    bd.style.color = "";
}