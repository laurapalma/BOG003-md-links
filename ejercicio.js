(function() {
    var a = b = 3;
    console.log("a defined" + (typeof a !== 'undefined')); 
    console.log("a defined" + (typeof b !== 'undefined')); 
   })

   console.log(0.1+0.2 ==0.3)


   for (let i = 0; i < 5; i++) {
       var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' +i))
        btn.addEventListener('click', function(){ console.log(i);
        document.body.appendChild(btn);    
    })

       
   }