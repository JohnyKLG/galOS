function galOS(ins){

    hd = document.head;
    bd = document.body;
    aw = 'aw.jpg';

    if(ins === "boot"){
        var s0 = document.createElement('script');s0.src = 'reg.js';hd.appendChild(s0);
        var s1 = document.createElement('script');s1.src = 'gen.js';hd.appendChild(s1);
        var s2 = document.createElement('script');s2.src = 'app.js';hd.appendChild(s2);
        var s3 = document.createElement('script');s3.src = 'auth.js';hd.appendChild(s3);

        var tt = document.createElement('title');tt.innerText = 'galOS';hd.appendChild(tt);

        var m0 = document.createElement('meta');m0.name = 'description';
            m0.content = 'galOS';hd.appendChild(m0);
        var m1 = document.createElement('meta');m1.name = 'viewport';
            m1.content = 'width=device-width, initial-scale=1';hd.appendChild(m1);
        
        setTimeout(function(){galOS('auth');}, 2000);            
    }

    if(ins === "auth"){
        bd.style.background = "url('"+aw+"') no-repeat center top fixed";
        bd.style.backgroundSize = 'cover';
        gAuth();
    }
}