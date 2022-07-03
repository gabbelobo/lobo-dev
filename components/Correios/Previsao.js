import React from 'react'
import moment from 'moment'
import styles from './Etapa.module.scss'
const Previsao = ({previsao, tipoPostal}) => {
    return (
        <div className={styles.etapa}> 
            <h2>{tipoPostal.categoria}</h2>
            {(previsao && previsao.dataMaxEntrega) && 
                <p>Previsão de Entrega: {moment(previsao.dataMaxEntrega).format('DD/MM/YYYY')}</p>
            }
        </div>
    )
}

export default Previsao