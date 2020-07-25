function gAuth(){
    // Definiar e criar popup de autenticação
    var logo = 'position:absolute;bottom:30px;right:30px;width:100px;height:167px;background:url('+lg+');filter:invert(1)';
    var lgo = document.createElement('logo');lgo.style = logo;lgo.id = 'logo';bd.appendChild(lgo);
    var dstl = 'position:absolute;top:50%;left:50%;';
        dstl+= 'border-radius:9px;background:#cccccccc;';
        dstl+= 'box-shadow: 0px 0px 10px #333;font:13px sans-serif;padding:9px';
    var div = document.createElement('div');div.style = dstl;div.id = 'auth';bd.appendChild(div);
    var auth = document.getElementById('auth');
    // Verificar se há usuário
    if(localStorage.getItem('user')){        
        auth.style.width = '350px';        
        auth.style.height = '200px';
        auth.style.margin = '-100px -175px';
        auth.innerHTML = '<h2>Olá, benvindo ao galOS</h2>';
    }else{
        auth.style.width = '300px';        
        auth.style.height = '120px';
        auth.style.margin = '-60px -150px';
        auth.innerHTML = '<h2>Olá, benvindo ao galOS</h2>';
        auth.innerHTML += '<p>No momento não encontrei nenhum usuário.</p>';
        auth.innerHTML += '<button>Cadastrar usuário</button>';
    }
}