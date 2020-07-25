function gAuth(){
    insertG('logo',100,167,0,0,30,30);
    // Verificar se há usuário
    if(localStorage.getItem('user')){
        insertG('auth',350,200,50,50,0,0);
        auth.style.margin = '-100px -175px';
        auth.innerHTML = '<h2>Olá, benvindo ao galOS</h2>';
    }else{
        insertG('auth',300,120,50,50,0,0);
        auth.style.margin = '-60px -150px';
        auth.innerHTML = '<h2>Olá, benvindo ao galOS</h2>';
        auth.innerHTML += '<p>No momento não encontrei nenhum usuário.</p>';
        auth.innerHTML += '<button>Cadastrar usuário</button>';
    }
}