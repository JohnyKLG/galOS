async function gAuth(){
    insertG('logo','logo',100,167,0,0,30,30);    
    bd.style.background = "url('"+aw+"') no-repeat center top fixed";
    bd.style.backgroundSize = 'cover';
    // Verificar se há usuário
    if(localStorage.getItem('user')){
        insertG('popup','auth',350,200,50,50,0,0);
        auth.style.margin = '-100px -175px';
        auth.innerHTML = '<h2>Olá, benvindo ao galOS</h2>';
    }else{
        var stl = document.createElement('style');
        stl.innerHTML = "#btn{width:130px;height:30px;border:1px solid #666;background:#bbbbbb55;border-radius:5px;outline:none;}";
        stl.innerHTML+= "#btn:hover{border:1px solid #577;background:#00808030;color:#355;cursor:pointer;}";
        hd.appendChild(stl);
        insertG('popup','auth',270,130,50,50,0,0);
        auth = document.getElementById('auth');
        auth.style.margin = '-65px -135px';
        auth.innerHTML = '<h2>Olá, tudo bem?</h2>';
        auth.innerHTML += '<span>Não identificamos nenhum usuário cadastrado neste host, o que você gostaria de fazer?</span><br><br>';
        auth.innerHTML += '<button id="btn" onclick="gUser(\'new\')" style="margin-right:10px">Cadastrar usuário</button>';
        auth.innerHTML += '<button id="btn" onclick="gUser(\'imp\')">Importar usuário</button>';
    }
}
function gUser(ins){
    genClear();
    insertG('logo','logo',100,167,0,0,30,30);
    if(ins === 'new'){
        //cad
    }else if(ins === 'imp'){
        //imp
    }
}