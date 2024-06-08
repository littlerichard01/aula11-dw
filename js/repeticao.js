function lista_veiculos(){
    let veiculos = ['Jeep', 'Ford', 'VW', 'Fiat', 'Citroen']

    let ul = document.getElementById('lista_veiculos')

    for (let i = 0; i<veiculos.length;i++){
        let li = document.createElement('li')
        li.textContent=veiculos[i]
        ul.appendChild(li)
    }

}

lista_veiculos()