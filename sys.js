async function galOS(ins){
    // Definir variáveis de boot
    hd = document.head;
    bd = document.body;
    aw = 'wall.jpg';
    lg = 'logo.png';
    pc = "style='font:13px monospace;color:lime;line-height:7px;'";
    pl = "style='color:yellow'";
    pb = "style='color:orange'";
    bd.style.background = "#000";
    // Verificar se há requisição para boot
    if(ins === "boot"){
        // Carregar os scripts do sistema
        bd.innerHTML += "<p "+pc+">Carregando gerenciador de registros <l "+pl+">reg.js</l></p>";
        var s0 = document.createElement('script');s0.src = 'reg.js';hd.appendChild(s0);
        function load(ms){return new Promise(resolve => setTimeout(resolve, ms));}
        await load(500);
        bd.innerHTML += "<p "+pc+">Carregando engine de gráficos <l "+pl+">gen.js</l></p>";
        var s1 = document.createElement('script');s1.src = 'gen.js';hd.appendChild(s1);
        await load(500);
        bd.innerHTML += "<p "+pc+">Carregando gerenciador de aplicativos <l "+pl+">app.js</l></p>";
        var s2 = document.createElement('script');s2.src = 'app.js';hd.appendChild(s2);
        await load(500);
        bd.innerHTML += "<p "+pc+">Carregando gerenciador de autenticação <l "+pl+">auth.js</l></p>";
        var s3 = document.createElement('script');s3.src = 'auth.js';hd.appendChild(s3);
        await load(500);
        // Definir tag de título
        bd.innerHTML += "<p "+pc+">Identificando para o interpretador <b "+pb+">KLG galOS</b> <l "+pl+">v1.0.0</l></p>";
        var tt = document.createElement('title');tt.innerText = 'galOS';hd.appendChild(tt);
        await load(500);
        // Carregar os metadados do interpretador
        bd.innerHTML += "<p "+pc+">Aplicando metadados <l "+pl+">description</l></p>";
        var m0 = document.createElement('meta');m0.name = 'description';
            m0.content = 'galOS';hd.appendChild(m0);
        await load(500);
        bd.innerHTML += "<p "+pc+">Aplicando metadados <l "+pl+">viewport</l></p>";
        var m1 = document.createElement('meta');m1.name = 'viewport';
            m1.content = 'width=device-width, initial-scale=1';hd.appendChild(m1);
        await load(500);
        bd.innerHTML += "<p "+pc+">Iniciando engine gráfica <b "+pb+">KLG xGen</b> <l "+pl+">v1.0.0</l></p>";
        await load(2000);
        // Iniciar funções do xGen
        insertG('logo',100,167,0,0,30,30);
        await load(1000); 
        bd.innerHTML += "<p "+pc+">Iniciando tela de autenticação <l "+pl+">auth</l></p>";
        await load(1000);
        bd.innerHTML = "";      
        galOS('auth');
    }
    // Verificar se há requisição para tela de autenticação
    if(ins === "auth"){
        bd.style.background = "url('"+aw+"') no-repeat center top fixed";
        bd.style.backgroundSize = 'cover';
        gAuth();
    }
}