import React, {useEffect, useState} from 'react';
import './style.css';

//API: https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  //carregar useEffect quando iniciar o app
  useEffect(() => {

    function loadApi(){
      
      //armazenando a API numa variável
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      //metodo para fazer as requisições HTTP
      fetch(url)
      
      //REQUISIÇÃO OK, VEM PARA O THEN//--------------->
      
      //receberá o resultado e será transformado em json
      .then((r)=> r.json())
       //json transformado, dados a serem recebidos
      .then((json)=> {
        console.log(json)

        //passando o json para useState para podermos construir a nossa interface
        setNutri(json)
      })
    }

    loadApi();

  },[]);


  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{ //percorrendo os itens que esta dentro da array nutri
        
        return(
          <article key={item.id} className="post">
          <strong className='titulo'>{item.titulo}</strong>
          <img src={item.capa} alt={item.titulo} className="capa"/>
          <p className='subtitulo'>
            {item.subtitulo}
          </p>
          <h1>Categoria: {item.categoria}</h1>
          <a className='botao'>Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
