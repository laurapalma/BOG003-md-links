    const dividir = (num1, num2) => {
        //Vamos a retornar una promesa que reciba res y rej
        return new Promise((res, rej) => {
            //conjunto de instrucciones dentro de la promesa
            setTimeout(() => {
                if (num2 === 0) {
                    rej('No se puede dividir entre 0...');
                }else{
                    res(num1 / num2)
                }
            }, 2000);
        })
    }

    const prueba = (num1, num2) => {
        return dividir(num1, num2).then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    }
   prueba(2,1)
   prueba(4,8)
   prueba(8,0)