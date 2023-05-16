import React, { useEffect, useState } from 'react'
import apiDeputados from '../../services/apiDeputados'


const deputados = () => {

    const [deputados, setDeputados] = useState([])

    useEffect(() => {
        apiDeputados.get('/deputados').then(resultado => {setDeputados(resultado.data.dados)})}, [])

    return (
        <>
            <h1>Deputados</h1>

            <div>
                {deputados.map(item => (
                    <img key={item.id} src={item.urlFoto} width="100px" />
                ))}
            </div>


        </>
    )
}

export default deputados