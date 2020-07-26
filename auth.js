function gAuth(){
    var stl = document.createElement('style');
    stl.innerHTML = "#btn{width:130px;height:30px;border:1px solid #666;background:#bbbbbb55;border-radius:5px;outline:none;}";
    stl.innerHTML+= "#btn:hover{box-shadow: 0px 0px 5px #577;border:1px solid #577;background:#eeeeee40;color:#355;cursor:pointer;}";
    hd.appendChild(stl);
    insertG('logo','logo',100,167,0,0,30,30);    
    bd.style.background = "url('"+aw+"') no-repeat center top fixed";
    bd.style.backgroundSize = 'cover';
    // Verificar se há usuário
    if(localStorage.getItem('user')){
        insertG('popup','auth',350,200,50,50,0,0);
        auth.style.margin = '-100px -175px';
        auth.innerHTML = '<h2>Olá, benvindo ao galOS</h2>';
    }else{
        insertG('popup','auth',270,135,50,50,0,0);
        auth = document.getElementById('auth');
        auth.style.margin = '-67px -135px';
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
        insertG('popup','pnew',360,400,50,50,0,0);
        pnew = document.getElementById('pnew');
        pnew.style.margin = '-200px -180px';
        pnew.innerHTML = '<h3>Olá, tudo bem?</h3>';
        pnew.innerHTML += '<span>Não identificamos nenhum usuário cadastrado neste host, o que você gostaria de fazer?</span><br><br>';
        pnew.innerHTML += '<button id="btn" onclick="gUser(\'new\')" style="margin-right:10px">Cadastrar usuário</button>';
        pnew.innerHTML += '<button id="btn" onclick="gUser(\'imp\')">Importar usuário</button>';
    }else if(ins === 'imp'){
        //imp
    }
}