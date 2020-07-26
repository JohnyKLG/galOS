document.addEventListener("dragstart", function( event ){
/* ----------------- Johny KLG -----------------+
| Plataforma gráfica de gerenciamento do galOS  |
| baseada em object style CSS3 sendo puramente  |
| desenvolvida em JavaScript.                   |
|                                               |
| Brasil, julho de 2020                         |
+--------------------------------------------- */
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
}, false);
// Definir posição do objeto
function dragG(id){    
    eid = document.getElementById(id);
    var e = window.event;
    if(e.clientY >= 1){y = e.clientY}
    if(e.clientX >= 1){x = e.clientX}
    eid.style.top = y+"px";
    eid.style.left = x+"px";
}
function insertG(obj,id,w,h,t,l,b,r){
    // Objeto gráfico logo
    if(obj === 'logo'){
        var logo = 'position:absolute;bottom:'+b+'px;right:'+r+'px;width:'+w+'px;height:'+h+'px;background:url('+lg+');filter:invert(1)';
        var lgo = document.createElement('logo');lgo.style = logo;lgo.id = id;bd.appendChild(lgo);
    }
    // Objeto gráfico popup
    if(obj === 'popup'){
        var dstl = 'position:absolute;top:'+t+'%;left:'+l+'%;width:'+w+'px;height:'+h+'px;';
            dstl+= 'border-radius:9px;background:#cccccccd;color:#333;';
            dstl+= 'box-shadow: 0px 0px 10px #333;font:9.5pt sans-serif;padding:0 9px';
        var div = document.createElement('div');div.style = dstl;div.id = id;
        div.draggable = "true";div.setAttribute('ondrag','dragG(this.id)');bd.appendChild(div);
    }
}
function genClear(){
    bd.innerHTML = "";
    bd.style.font = "";
    bd.style.color = "";
}