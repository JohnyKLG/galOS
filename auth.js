function gAuth(){
    genClear();
    insertG('logo','logo',100,167,0,0,30,30);    
    bd.style.background = "url('"+aw+"') no-repeat center top fixed";
    bd.style.backgroundSize = 'cover';
    // Verificar se há usuário
    if(localStorage.getItem('user')){
        var stl = document.createElement('style');
        stl.innerHTML = "#auth{margin:-67px -135px;}"
        hd.appendChild(stl);
        insertG('popup','auth',270,135,50,50,0,0);
        auth = document.getElementById('auth');
        var userA = localStorage.getItem("user");
        user = userA.split(";");
        auth.innerHTML = '<h2>Olá, '+user[2]+'</h2>';
        auth.innerHTML += '<span>'+user[1]+'</span><br><br>';
    }else{
        var stl = document.createElement('style');
        stl.innerHTML = "#auth{margin:-67px -135px;}"
        stl.innerHTML+= "#auth .btn{width:130px;height:30px;border:1px solid #888;background:#bbbbbb55;border-radius:5px;outline:none;}";
        stl.innerHTML+= "#auth .btn:hover{box-shadow: 0px 0px 5px #577;border:1px solid #577;background:#eeeeee40;color:#355;cursor:pointer;}";        
        hd.appendChild(stl);
        insertG('popup','auth',270,135,50,50,0,0);
        auth = document.getElementById('auth');
        auth.innerHTML = '<h2>Olá, tudo bem?</h2>';
        auth.innerHTML += '<span>Não identificamos nenhum usuário cadastrado neste host, o que você gostaria de fazer?</span><br><br>';
        auth.innerHTML += '<button class="btn" onclick="gUser(\'new\')" style="margin-right:10px">Cadastrar usuário</button>';
        auth.innerHTML += '<button class="btn" onclick="gUser(\'imp\')">Importar usuário</button>';
    }
}
function gUser(ins){
    genClear();
    insertG('logo','logo',100,167,0,0,30,30);
    if(ins === 'new'){
        var stl = document.createElement('style');
        stl.innerHTML = "#pnew{margin:-175px -150px;text-align:right;}"
        stl.innerHTML+= "#pnew h3{float:left;}"
        stl.innerHTML+= "#pnew input{width:calc(100% - 16px);padding:2px 7px;height:30px;margin:3px 0;border:1px solid #999;background:#eeeeee77;border-radius:5px;outline:none;}";
        stl.innerHTML+= "#pnew input:hover{background:#eeeeeeaa;}";
        stl.innerHTML+= "#pnew .btn{width:100px;height:30px;border:1px solid #888;background:#bbbbbb55;border-radius:5px;outline:none;}";
        stl.innerHTML+= "#pnew .btn:hover{box-shadow: 0px 0px 5px #577;border:1px solid #577;background:#eeeeee40;color:#355;cursor:pointer;}";
        stl.innerHTML+= "#pnew #cnl:hover{box-shadow: 0px 0px 5px #755;border:1px solid #755;color:#533;}"
        hd.appendChild(stl);
        insertG('popup','pnew',300,350,50,50,0,0);
        pnew = document.getElementById('pnew');
        pnew.innerHTML = '<h3>Novo usuário</h3>';
        pnew.innerHTML += '<input id="fd0" type="text" placeholder="Qual o seu nome? (completo)"></input>';
        pnew.innerHTML += '<input id="fd1" type="email" placeholder="Qual o seu e-mail?"></input>';
        pnew.innerHTML += '<input id="fd2" type="email" placeholder="Confirme seu e-mail."></input>';
        pnew.innerHTML += '<input id="fd3" type="text" placeholder="Se preferir utilizar um nickname, digite-o aqui."></input>';
        pnew.innerHTML += '<input id="fd4" type="password" placeholder="Crie uma senha."></input>';
        pnew.innerHTML += '<input id="fd5" type="password" placeholder="Confirme a senha." style="margin-bottom:15px"></input>';
        pnew.innerHTML += '<button class="btn" id="cnl" onclick="gAuth()" style="margin-right:10px">Cancelar</button>';
        pnew.innerHTML += '<button class="btn" onclick="gReg(\'user\')">Concluir</button>';
    }else if(ins === 'imp'){
        var stl = document.createElement('style');
        stl.innerHTML = "#pimp{margin:-91px -149px;}"
        stl.innerHTML+= "#pimp input{width:50px;padding:2px 7px;height:30px;margin:3px 0;";
        stl.innerHTML+= "border:1px solid #999;background:#eeeeee77;border-radius:5px;outline:none;";
        stl.innerHTML+= "text-transform:uppercase;text-align:center;font:17px sans-serif;}";
        stl.innerHTML+= "#pimp input:hover{background:#eeeeeeaa;}";
        stl.innerHTML+= "#pimp .btn{width:100px;height:30px;border:1px solid #888;background:#bbbbbb55;border-radius:5px;outline:none;float:right;}";
        stl.innerHTML+= "#pimp .btn:hover{box-shadow: 0px 0px 5px #577;border:1px solid #577;background:#eeeeee40;color:#355;cursor:pointer;}";
        stl.innerHTML+= "#pimp #cnl:hover{box-shadow: 0px 0px 5px #755;border:1px solid #755;color:#533;}"
        hd.appendChild(stl);
        var sep = "&nbsp;-&nbsp;";
        insertG('popup','pimp',298,182,50,50,0,0);
        pimp = document.getElementById('pimp');
        pimp.innerHTML = '<h3>Importar usuário</h3>';
        pimp.innerHTML += '<span>Por favor digite sua chave pessoal, para iniciar o processo de validação de identidade.</span><br><br>';
        pimp.innerHTML += '<input id="fd0" type="text" maxlength="4"></input>'+sep;
        pimp.innerHTML += '<input id="fd1" type="text" maxlength="4"></input>'+sep;
        pimp.innerHTML += '<input id="fd2" type="text" maxlength="4"></input>'+sep;
        pimp.innerHTML += '<input id="fd3" type="text" maxlength="4" style="margin-bottom:15px"></input>';
        pimp.innerHTML += '<button class="btn" onclick="gReg(\'code\')">Concluir</button>';
        pimp.innerHTML += '<button class="btn" id="cnl" onclick="gAuth()" style="margin-right:10px">Cancelar</button>';
    }
}