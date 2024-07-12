const getData = async () => {
    try {
        const response = await axios.get("https://6691119c26c2a69f6e8e4beb.mockapi.io/products/Produtos")
        console.log(response)
    
        let corpo = document.querySelector("body")
        response.data.forEach(element => {
            let div = document.createElement("div")
            div.innerHTML = ` 
                      <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.id}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${element.nome}</h6>
                            <p class="card-text">${element.descricao}</p>
                            <a href="#" class="card-link">${element.tipo}</a>
                            <a href="#" class="card-link">${element.material}</a>
                        </div>
                        </div>>
            `
            corpo.appendChild(div)
        });
    
    // Unbranded Steel Shirt
    
    } catch (error) {
        console.log(`${error}`)
    }
    }
    getData()