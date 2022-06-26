import React, { useEffect, useState } from 'react'

const Teste = () => {
    const [nome, setNome] = useState("")
    const [num, setNum] = useState(0)
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("Contando letras");
        setNum(nome.length)
    }, [nome])

    return (
        <div>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <p>Número de letras no nome: {num}</p>
            <button onClick={() => setContador(current => current + 1)}>Acrescentar: {contador}</button>
        </div>
    )
}

export default Teste