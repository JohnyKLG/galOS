function load(ms){return new Promise(resolve => setTimeout(resolve, ms));}
/* ----------------- Johny KLG -----------------+
| Interface gráfica operacional multiplataforma |
| baseada em hipertexto HTML5 sendo puramente   |
| desenvolvida em JavaScript.                   |
|                                               |
| Brasil, julho de 2020                         |
+--------------------------------------------- */
async function galOS(ins){
    // Definir variáveis de boot
    hd = document.head;
    bd = document.body;
    aw = 'wall.jpg';
    lg = 'logo.png';
    ps = "style='color:lime;font:57px sans-serif'";
    pc = "style='color:lime'";
    pl = "style='color:yellow'";
    pb = "style='color:orange'";
    bd.style.background = "#000";
    bd.style.color = "#fff";
    bd.style.font ="12px monospace"
    // Verificar se há requisição para boot
    if(ins === "boot"){
        // Carregar os scripts do sistema
        bd.innerHTML = "||<br>|| github.com/JohnyKLG";
        bd.innerHTML += "<br>||<br>|| Inicializando";
        document.documentElement.style.cursor = 'none';
        for(var i = 0; i < 30; i++){await load(100);bd.innerHTML += ".";}
        bd.innerHTML += "<br>||<br><br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span "+ps+"><sub>gal</sub><l "+pl+">OS</l>";
        bd.innerHTML += "</span><sup "+pb+">v1.0.0</sup>";
        await load(1500);
        bd.innerHTML = "<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span "+ps+"><sub>gal</sub><l "+pl+">OS</l></span>";
        bd.innerHTML += "&emsp;<sup "+pb+">v1.0.0</sup><br><br>";
        bd.innerHTML += "<p "+pc+">Carregando gerenciador de registros <l "+pl+">reg.js</l></p>";
        var s0 = document.createElement('script');s0.src = 'reg.js';hd.appendChild(s0);
        await load(200);
        bd.innerHTML += "<p "+pc+">Carregando engine de gráficos <l "+pl+">gen.js</l></p>";
        var s1 = document.createElement('script');s1.src = 'gen.js';hd.appendChild(s1);
        await load(200);
        bd.innerHTML += "<p "+pc+">Carregando gerenciador de aplicativos <l "+pl+">app.js</l></p>";
        var s2 = document.createElement('script');s2.src = 'app.js';hd.appendChild(s2);
        await load(200);
        bd.innerHTML += "<p "+pc+">Carregando gerenciador de autenticação <l "+pl+">auth.js</l></p>";
        var s3 = document.createElement('script');s3.src = 'auth.js';hd.appendChild(s3);
        await load(100);
        // Definir tag de título para o interpretador
        bd.innerHTML += "<p "+pc+">Identificando para o host <b "+pb+">KLG galOS</b> v1.0.0</p>";
        var tt = document.createElement('title');tt.innerText = 'galOS';hd.appendChild(tt);
        await load(100);
        // Carregar os metadados do interpretador
        bd.innerHTML += "<p "+pc+">Aplicando metadados <l "+pl+">description</l></p>";
        var m0 = document.createElement('meta');m0.name = 'description';
            m0.content = 'galOS';hd.appendChild(m0);
        await load(100);
        bd.innerHTML += "<p "+pc+">Aplicando metadados <l "+pl+">viewport</l></p>";
        var m1 = document.createElement('meta');m1.name = 'viewport';
            m1.content = 'width=device-width, initial-scale=1';hd.appendChild(m1);
        await load(200);
        // Iniciar funções do xGen
        bd.innerHTML += "<p "+pc+">Iniciando engine gráfica <b "+pb+">KLG xGen</b> <l "+pl+">v1.0.0</l></p>";
        bd.style.color = "orange";
        for(var i = 0; i < 25; i++){await load(100);bd.innerHTML += "&block;";}
        insertG('logo','logo',100,167,0,0,30,30);
        for(var i = 0; i < 15; i++){await load(100);bd.innerHTML += "&block;";}
        document.documentElement.style.cursor = 'default';
        bd.innerHTML += "<p "+pc+">Iniciando tela de autenticação <l "+pl+">auth</l></p>";
        for(var i = 0; i < 10; i++){await load(100);bd.innerHTML += "&block;";}    
        bd.style.background = "#000 url('"+aw+"') no-repeat";
        bd.style.backgroundSize = '3px';
        for(var i = 0; i < 15; i++){await load(100);bd.innerHTML += "&block;";}
        bd.innerHTML = null;
        gAuth();
    }
}