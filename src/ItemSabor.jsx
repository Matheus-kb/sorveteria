import "./ItemSabor.css"

function ItemSabor(props) {
    return (
        <tr>
            <td><img src={props.sabor.foto} alt="sabor" width={300} height={200} onClick={props.seleciona} /></td>
            <td>
                <h4>Sabor:{props.sabor.sabor}</h4>
                <h4>Ingredientes:{props.sabor.ingredientes}</h4>
                <h4>Calorias:{props.sabor.calorias}</h4>
            </td>
        </tr>
    )
}

export default ItemSabor