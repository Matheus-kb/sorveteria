import { useState, useEffect } from "react"
import { dados } from "./sabores"
import ItemSabor from "./ItemSabor"

function ListaSabores() {
    const [sabores, setSabores] = useState([])
    const [selecionados, setSelecionados] = useState([])
    const [preco, setPreco] = useState(0)

    useEffect (() => {
        setSabores (dados)
    },[])

    function selecionaSabor(sabor) {
        let lista 
        if (selecionados.indexOf(sabor) == -1) {
            if (selecionados.length == 3){
                alert("No maximo três sabores.")
                return
            }
            lista = [...selecionados]
            lista.push(sabor) 
        } else {
            lista = selecionados.filter(sorvete => sorvete != sabor )
        } 

        setSelecionados(lista)

        if (lista.length == 0 ){
            setPreco(0)
        } else if (lista.length == 1){
            setPreco(5)
        } else if (lista.length == 2){
            setPreco(9)
        } else {
            setPreco(13)
        }
        
    }

    const ListaDeSabores = sabores.map(sabor => (
        <ItemSabor key={sabor.id} sabor={sabor} seleciona={() => selecionaSabor(sabor.sabor)}/>
    ))


    return(
        <div className="container">

            <div className="row">
                <div className="col-sm-9">
            <h2>Sabores: [{selecionados.join(", ")}]</h2>
            </div>
            <div className="col-sm-3">
            <h2>Preço: [{preco.toLocaleString("pt-br", {minimumFractionDigits: 2})}]</h2>
            </div>
            </div>    

            <h2 className="mt-2">Escolhas os sabores do seu sorvete</h2>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Sabores disponiveis:</th>
                        <th>Detalhes do sorvete:</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                {ListaDeSabores}
            </tbody>
        </div>
    )
}

export default ListaSabores