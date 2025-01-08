
function pesquisar()
{
    
let sectionPesquisa = document.getElementById("resultados-pesquisa")
console.log(sectionPesquisa);

let campoPesquisa = document.getElementById('searchBar').value;



let resultados = "";



for (let dado of dados) 
{
    if (campoPesquisa == ""){
        sectionPesquisa.innerHTML = "Digite algo no campo de busca para obter algun resultado";
        return
    }

    campoPesquisa = campoPesquisa.toLoweCase()

    // se titulo include campoPesquisa 
        // então, faça...
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}." target="_blank"> Mais informações</a>
    `
    } 
    
    
}

    if (!resultados)
    {
        resultados = "Não temos na nossa base de dados"
    }


sectionPesquisa.innerHTML = resultados;

}


function resultadinho()
{
    
}



 