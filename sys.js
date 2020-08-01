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
    // Verificar se há requisição para boot
    if(ins === "boot"){
        var ps = "style='color:lime;font:57px sans-serif'";
        var pc = "style='color:lime'";
        var pl = "style='color:yellow'";
        var pb = "style='color:orange'";
        bd.style.background = "#000";
        bd.style.color = "#fff";
        bd.style.font ="12px monospace"
        // Carregar os scripts do sistema
        bd.setAttribute('ondragover','event.preventDefault()');
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
        bd.innerHTML += "<p "+pc+">Carregando encoder de imagem <l "+pl+">i64.asm</l></p>";
        var s2 = document.createElement('script');s2.src = 'i64.asm';hd.appendChild(s2);
        await load(200);
        bd.innerHTML += "<p "+pc+">Carregando decoder de imagem <l "+pl+">x64.h</l></p>";
        var s3 = document.createElement('script');s3.src = 'x64.h';hd.appendChild(s3);
        await load(200);
        bd.innerHTML += "<p "+pc+">Carregando gerenciador de aplicativos <l "+pl+">app.js</l></p>";
        var s4 = document.createElement('script');s4.src = 'app.js';hd.appendChild(s4);
        await load(200);
        bd.innerHTML += "<p "+pc+">Carregando gerenciador de autenticação <l "+pl+">auth.js</l></p>";
        var s5 = document.createElement('script');s5.src = 'auth.js';hd.appendChild(s5);
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
        bd.style.background = "#000 url('"+auth64+"') no-repeat";
        bd.style.backgroundSize = '3px';
        for(var i = 0; i < 10; i++){await load(100);bd.innerHTML += "&block;";}    
        bd.style.background = "#000 url('"+wall64+"') no-repeat";
        bd.style.backgroundSize = '3px';
        for(var i = 0; i < 5; i++){await load(100);bd.innerHTML += "&block;";}
        gAuth();
    }
    // Verificar se há requisição para iniciar o x64
    if(ins === "x64"){
        var stl = document.createElement('style');
        stl.innerHTML = "body{background:url('"+wall64+"') no-repeat center top fixed;background-size:cover;margin:0;}";
        stl.innerHTML+= "#panel{position:fixed;top:0px;left:0px;right:0px;height:35px;background:#000000ba;}";
        stl.innerHTML+= "#panel button{height:35px;border:0;margin:0 9px;background:none;color:#aaa;outline:none;}";
        stl.innerHTML+= "#panel button:hover{color:#fff;cursor:pointer;}"
        stl.innerHTML+= "#panel img{position:fixed;top:3px;right:9px;height:32px;border:3px solid #000000ba;border-radius:50%;}";
        stl.innerHTML+= "#dock{position:fixed;bottom:0px;left:50%;margin-left:-250px;width:500px;height:40px;";
        stl.innerHTML+= "background:#cccccccd;box-shadow: 0px 0px 10px #333;border-radius:20px 20px 0 0;display:none;}";

        stl.innerHTML+= "#desk{position:fixed;top:0px;left:0px;bottom:0px;right:0;background:url('"+auth64+"') no-repeat center top fixed;background-size:cover;margin:0;}"
        hd.appendChild(stl);
        bd.innerHTML = '<div id="panel"></div>';var pn = document.getElementById('panel');
        pn.innerHTML = '<button onclick="gDock()">Aplicativos</button>';
        pn.innerHTML+= '<button onclick="gDock()">Arquivos</button>';
        pn.innerHTML+= '<img src="'+user[4]+'" title="'+usr+'">';
        bd.innerHTML+= '<div id="dock"></div>';        
        bd.innerHTML+= '<div id="desk"></div>';
    }
}
function gDock(){
    var dock = document.getElementById('dock').style;
    if(dock.display == 'block'){dock.display = 'none';}
    else{dock.display = 'block';}
}