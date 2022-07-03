export default async function handler(req, res) {
    try {
        const { code } = req.query
        if (!code) {
            throw new Error()
        }
        const urlRastreio = 'https://proxyapp.correios.com.br/v1/sro-rastro/' + code
        const response = await fetch(urlRastreio).then(response => response.json())

        if(response.objetos[0].mensagem) {
            throw new Error()
        }
        try {
            const url = `https://rastreamento.correios.com.br/app/dataMaxima.php?objeto=${code}&tipoPostal=N`
            const dataPrevisao = await fetch(url).then(response => response.json())
            res.status(200).json({
                eventos: response.objetos[0],
                previsao: dataPrevisao
            })
        } catch(e) {
            res.status(200).json({
                eventos: response.objetos[0]
            })
        }

    } catch (error) {
        res.status(400).send()
    }
}