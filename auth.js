function gAuth(){
    insertG('logo',100,167,0,0,30,30);    
    bd.style.background = "url('"+aw+"') no-repeat center top fixed";
    bd.style.backgroundSize = 'cover';
    bd.style.color = "#333";
    // Verificar se há usuário
    if(localStorage.getItem('user')){
        insertG('auth',350,200,50,50,0,0);
        auth.style.margin = '-100px -175px';
        auth.innerHTML = '<h2>Olá, benvindo ao galOS</h2>';
    }else{
        var stl = document.createElement('style');
        stl.innerHTML = "#btn{width:100%;height:30px;border:1px solid #666;background:#bbbbbb55;border-radius:5px;outline:none;}";
        stl.innerHTML+= "#btn:hover{border:1px solid #577;background:#00808030;color:#355;cursor:pointer;}";
        hd.appendChild(stl);

        insertG('auth',144,120,50,50,0,0);
        auth.style.margin = '-60px -72px';
        auth.innerHTML = '<h2>Olá, tudo bem?</h2>';
        auth.innerHTML += '<p style="line-height:7px">Tudo pronto para iniciar.</p><br>';
        auth.innerHTML += '<button id="btn" onclick="gUser(\'new\')">Iniciar</button>';
    }
}