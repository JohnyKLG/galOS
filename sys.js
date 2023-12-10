async function galOS(ins){
    if(ins === "boot"){
        bd.innerHTML = "<span "+pc+">Carregando gerenciador de registros";
        for(let i = 0; i < 23; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">reg.js</l></span><br>";
        const s0 = document.createElement('script');s0.src = 'reg.js';hd.appendChild(s0);
        await load(200);
        bd.innerHTML += "<span "+pc+">Carregando engine de gráficos";        
        for(let i = 0; i < 29; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">gen.js</l></span><br>";
        const s1 = document.createElement('script');s1.src = 'gen.js';hd.appendChild(s1);
        await load(200);
        bd.innerHTML += "<span "+pc+">Carregando encoder de imagem";        
        for(let i = 0; i < 30; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">gosenc.x64</l></span><br>";
        const s2 = document.createElement('script');s2.src = 'gosenc.x64';hd.appendChild(s2);
        await load(200);
        bd.innerHTML += "<span "+pc+">Carregando decoder de imagem";        
        for(let i = 0; i < 30; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">gosdec.x64</l></span><br>";
        const s3 = document.createElement('script');s3.src = 'gosdec.x64';hd.appendChild(s3);
        await load(200);
        bd.innerHTML += "<span "+pc+">Carregando gerenciador de aplicativos";        
        for(let i = 0; i < 21; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">apps.gjs</l></span><br>";
        const s4 = document.createElement('script');s4.src = 'apps.js';hd.appendChild(s4);
        await load(200);
        bd.innerHTML += "<span "+pc+">Carregando gerenciador de autenticação";        
        for(let i = 0; i < 20; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">auth.jsa</l></span><br>";
        const s5 = document.createElement('script');s5.src = 'auth.js';hd.appendChild(s5);
        await load(100);
        // Definir tag de título para o interpretador
        bd.innerHTML += "<span "+pc+">Identificando para o host";        
        for(let i = 0; i < 33; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">KLG galOS</l></span><br>";
        const tt = document.createElement('title');tt.innerText = 'KLG galOS';hd.appendChild(tt);
        await load(100);
        // Carregar os metadados do interpretador
        bd.innerHTML += "<span "+pc+">Aplicando metadados";        
        for(let i = 0; i < 39; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">OK</l></span><br>";
        const m0 = document.createElement('meta');m0.name = 'description';
            m0.content = 'galOS';hd.appendChild(m0);
        await load(100);
        bd.innerHTML += "<span "+pc+">Ajustando GPU";        
        for(let i = 0; i < 45; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">OK</l></span><br>";
        const m1 = document.createElement('meta');m1.name = 'viewport';
            m1.content = 'width=device-width, initial-scale=1';hd.appendChild(m1);
        await load(200);
        // Iniciar funções do xGen
        bd.innerHTML += "<span "+pc+">Iniciando engine gráfica";
        for(let i = 0; i < 24; i++){await load(35);bd.innerHTML += ".";}
        insertG('logo','logo',100,167,'50%','50%','auto','auto','-83.5px -50px',1);
        for(let i = 0; i < 10; i++){await load(50);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">KLG xGen</l></span><br>";
        document.documentElement.style.cursor = 'default';
        bd.innerHTML += "<span "+pc+">Iniciando tela de autenticação";        
        for(let i = 0; i < 28; i++){await load(25);bd.innerHTML += ".";}
        bd.innerHTML += "<l "+pl+">KLG xAuth</l></span><br>";
        await load(1000);
        bd.innerHTML = null;
        insertG('logo','logo',100,167,'50%','50%','auto','auto','-83.5px -50px',1);
        bd.style.background = "#000 url('"+auth64+"') no-repeat";
        bd.style.backgroundSize = '3px';
        await load(500);
        bd.style.background = "#000 url('data:image/png;base64,"+gOSdec+"') no-repeat";
        bd.style.backgroundSize = '3px';
        await load(500);
        gAuth();
    }
    // Verificar se há requisição para iniciar o x64
    if(ins === "x64"){
        bd.innerHTML = '<div id="panel"></div>';const pn = document.getElementById('panel');
        pn.innerHTML+= '<button onclick="">Aplicativos</button>';
        pn.innerHTML+= '<button onclick="">Arquivos</button>';
        pn.innerHTML+= '<button onclick="" id="user">'+usr+'</button>';
        pn.innerHTML+= '<button onclick="" id="clock"></button>';
        pn.innerHTML+= '<img id="useri" src="'+user[4]+'" title="'+usr+'">';
        bd.innerHTML+= '<div id="desk"></div>';
        const clock = document.getElementById('clock');
        setInterval(function(){
            clock.innerHTML = ((new Date).toLocaleString().substr(11,6));
        }, 10000);
        const stl = document.createElement('style');
        stl.innerHTML = "body{background:url('data:image/png;base64,"+gOSdec+"') no-repeat center top fixed;background-size:cover;margin:0;}";
        stl.innerHTML+= "#panel{position:fixed;top:0px;left:0px;right:0px;height:30px;background:#000000ba;}";
        stl.innerHTML+= "#panel button{height:23px;border:0;margin:3px 9px;background:none;color:#aaa;outline:none;}";
        stl.innerHTML+= "#panel #user{position:fixed;top:0px;right:45px;}"
        stl.innerHTML+= "#panel #clock{position:fixed;top:0px;width:100px;left:50%;margin-left:-50px;}"
        stl.innerHTML+= "#panel button:hover{color:#fff;cursor:pointer;}"
        stl.innerHTML+= "#panel #useri{position:fixed;top:3px;right:9px;height:32px;border:3px solid #000000ba;border-radius:50%;}";
        stl.innerHTML+= "#desk{position:fixed;top:0px;left:0px;bottom:0px;right:0;background:url('"+auth64+"') no-repeat center top fixed;background-size:cover;margin:0;}"
        hd.appendChild(stl);
    }
}
function gDock(){
    const dock = document.getElementById('dock').style;
    if(dock.display == 'block'){dock.display = 'none';}
    else{dock.display = 'block';}
}
