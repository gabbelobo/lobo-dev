---
title: 'Como funcionam os ciclos de vida do React.js?'
excerpt: 'Cada componente React possui um fluxo de ações que podem ser monitoradas e manipuladas, esse fluxo é chamado de "Lifecycle" ou "Ciclo de vida". Para poder otimizar seu código, ou até mesmo evitar falhas graves como loops infinitos, é de extrema importância o desenvolvedor entender como que o ciclo funciona e também como utilizá-lo ao seu favor.'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2022-06-26T21:06:41.574Z'
author:
  name: Gabriel Lobo
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

Cada componente React possui um fluxo de ações, seja na sua criação ou atualização, que podem ser monitoradas e manipuladas, esse fluxo é chamado de "Lifecycle" ou "Ciclo de vida". Para poder otimizar seu código, ou até mesmo evitar falhas graves como loops infinitos, é de extrema importância para o desenvolvedor entender como que o ciclo funciona e também como utilizá-lo ao seu favor. Nesse artigo vamos explorar o que cada ciclo executa e também mostrar exemplos práticos de cada um.

## 1. Fases do ciclo

O ciclo de vida possúi 3 fases: **Mounting**, **Updating** e **Unmounting**. Cada uma dessas fases possui alguns métodos incorporados que são chamados durante a execução. Nesse artigo vamos focar apenas nos seguintes métodos que são executados no fim de cada fase:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()` 

### Mounting

Representa a etapa de inicialização de um componente. Nessa etapa, o componente lê o state e as props passadas para ele e monta os elementos na DOM. Após completar a montagem, o método `componentDidMount()` é executado. Este método pode ser utilizado para executar funções assim que o componente é inicializado.

### Updating

A próxima fase no ciclo de vida é quando um componente é atualizado.
Um componente é atualizado sempre que há uma mudança no **state** ou nas **props** do componente.
É muito importante entender as condições de atualização, já que (caso não tratado) **todos** os métodos do componente e de seus filhos vão ser executados **toda** vez que qualquer **state** ou **prop** é modificado, podendo causar sérios problemas na performance da aplicação. 
Assim que o componente finalizar a fase de **Updating**, ele executa o método `componentDidUpdate()`.

### Unmounting

A próxima fase no ciclo de vida é quando um componente é removido do DOM. Ela é relativamente simples, mas pode ser extremamente útil para o desenvolvedor. Uma aplicação muito comum é utilizar essa fase para remover qualquer `EventListener` que um componente esteja utilizando, visando a otimização da aplicação. O método `componentWillUnmount()` é chamado quando o componente está prestes a ser removido do DOM. 

## 2. Aplicações

Com a ajuda do hook `useEffect`, podemos executar código em cada uma das etapas do componente. Mais precisamente quando o React chamar os métodos `componentDidMount()`, `componentDidUpdate()` e `componentWillUnmount()`.

O hook possui a seguinte estrutura:

`useEffect(callback, dependencies)`

O parâmetro `callback` representa a função que deve ser executada toda vez que o `useEffect` é chamado.
Já o `dependecies` é um array que define **quando** que o hook deve ser chamado.

Se não passarmos a variável `dependencies`, o `useEffect` será chamado toda vez que o componente for montado ou atualizado (`componentDidMount()` e `componentDidUpdate()`).

Se especificarmos uma array com props ou state dentro, o hook só será chamado quando uma dessas variáveis forem alteradas.

Porém, se especificarmos uma array vazia, o hook será chamado somente na montagem do componente (`componentDidMount()`). Caso o callback retorne uma função, a mesma será executada quando o componente for removido (`componentWillUnmount()`)

### Exemplos:
#### 1. Sem declarar segundo argumento

Considere o seguinte componente funcional:
```jsx
import React, { useEffect, useState } from 'react'

const Componente = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("Atualizado")
    })

    return (
        <button 
            onClick={() => setContador(current => current + 1)}
        >
            Acrescentar
        </button>
    )
}
```

Nesse caso, o `useEffect()` não possui um segundo argumento, por isso, o console deve logar a string `"Atualizado"` uma vez quando montar, uma vez quando atualizar pela primeira vez e toda vez que o `button` for clicado. Esse caso tem pouca usabilidade na prática.

#### 2. Array vazia

Ao declaramos uma array vazia, garantimos que o código de `callback` só será executado quando o componente for montado.  

**AVISO 1:** Caso esteja utilizando o React em "Strict Mode", será executado 2 vezes.  
**AVISO 2:** Se o componente for filho de outro componente, corre o risco do componente pai ser atualizado e consequentemente re-montar o componente filho, causando mais um evento de `componentDidMount()`.

Considere o seguinte cenário onde buscamos informações de uma API para popular o conteúdo da página:

```jsx
import React, { useEffect, useState } from 'react'

const Componente = () => {
    const [fato, setFato] = useState("")
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("Chamando API");
        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(res => {
                setFato(res.fact)
            })
    }, [])

    return (
        <div>
            <p>{fato}</p>
            <button 
                onClick={() => setContador(current => current + 1)}
            >
                Acrescentar: {contador}
            </button>
        </div>
    )
}
```
Podemos confirmar no console que o código foi executado apenas uma vez, apesar de clicar no botão de acrescentar múltiplas vezes:

![image info](/exemplo2.png)

Esse cenário é muito útil para popular conteúdo vindo de APIs, assim como registrar `EventListener`s.

### 3. Array com state

Neste caso vamos especificar uma variável que queremos "observar". Toda vez que aquela variável for alterada, todo o código do `callback` será executado. Serve como um `componentDidUpdate()` específico.

No código abaixo, temos 3 states, `nome`, `num` e `contador`.

`nome` representa o texto escrito no `input`.
`num` representa o número de caractéres no `nome`.
`contador` é o mesmo contador que viemos usando nos últimos códigos.

```jsx
import React, { useEffect, useState } from 'react'

const Componente = () => {
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
            <button 
                onClick={() => setContador(current => current + 1)}
            >
                Acrescentar: {contador}
            </button>
        </div>
    )
}
```

Podemos observar pelo console que a mensagem "Contando letras" apenas aparece quando alteramos o valor do `input`, clicar no `button` e alterando o valor de `contador` não tem impacto nenhum no nosso `useEffect`.

### 4. Efeito de cleanup

Como dito anteriormente, podemos retornar uma função no hook `useEffect` que será executada no método `componentWillUnmount()`, ou seja, quando o componente for removido. Esta função é geralmente chamada de função de "cleanup" ou "limpeza".

No código a seguir, nós adicionamos um `EventListener` do `contextmenu` (botão direito na página) quando o nosso componente é criado e o removemos quando o componente é destruído.

```jsx
import React, { useEffect, useState } from 'react'

const Componente = () => {
    const handleContextMenu = () => {
        console.log('O menu de contexto foi aberto');
    };

    useEffect(() => {
        window.addEventListener('contextmenu', handleContextMenu);

        // cleanup
        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
    )
}
```

## 3. Conclusão

Descrevemos o ciclo de vida de um componente de React em 3 etapas: **Mounting**, **Updating** e **Unmounting**.

- **Mounting** é executado ao montar um componente.
- **Updating** é executado ao atualizar um componente.
- **Unmounting** é executado ao remover um componente.

Podemos utilizar os métodos que são chamados no fim dessas etapas ao nosso favor através do hook `useEffect`, onde seu comportamento pode ser modificado através de uma array de dependências.