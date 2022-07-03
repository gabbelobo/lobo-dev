import React from 'react'
import styles from './Etapa.module.scss'
import moment from 'moment'
const Etapa = ({ evento }) => {
    return (
        <div className={styles.etapa}>
            <h2>{evento.descricao}</h2>
            <p>de {evento.unidade.tipo}, {evento.unidade.endereco.cidade} - {evento.unidade.endereco.uf}</p>
            {evento.unidadeDestino &&
                <p>para {evento.unidadeDestino.tipo}, {evento.unidadeDestino.endereco.cidade} - {evento.unidadeDestino.endereco.uf}</p>
            }
            <p>{moment(evento.dtHrCriado).format('DD/MM/YYYY HH:mm')}</p>
        </div>
    )
}
export default Etapa