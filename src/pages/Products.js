import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import https from 'https';

function Products(){
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [searchResults, setResults] = useState([]);
  const [allItems] = useState('');

  useEffect(() => {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false // (NOTE: this will disable client verification)
    });
    
    axios.get('https://localhost:5001/api/Items', {
      httpsAgent: httpsAgent
    })
    .then((items) => {
      setData(items.data)
    })
  },[]);

  useEffect(() => {
    const results = data.filter(item => 
      item.nome.toLowerCase().includes(name)
    );
    setResults(results);
  }, [name]);

    return(
        <>
        <div className={css(styles.page)}>
        <h1 className={css(styles.h1)}>Listagem de Produtos</h1>
        <div className={css(styles.forms)}>
        <form className={css(styles.form)}>
            <input type='text' 
            value={name} 
            placeholder='Busque por palavra-chave                🔎' 
            onChange={(e) => setName(e.target.value)} 
            className={css(styles.input)}>
            </input>
        </form>
        <table className={css(styles.table)}>
          <tr className={css(styles.tr)}>
            <th>Código</th>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
          {searchResults.map((item) => (           
            <tr className={css(styles.trdata)}>
              <th>{item.id}</th><th>{item.nome}</th><th>{item.valor}</th>
            </tr>
          ))}

          {data.map((item) => {
            if(name===''){
              return <tr value={allItems} className={css(styles.trdata)}>
                <th>{item.id}</th><th>{item.nome}</th><th>{item.valor}</th>
                </tr>
            } else {return null} })}
        </table>
        </div>
        </div>
        </>
    )
};

const styles = StyleSheet.create({
  h1:{
    position: 'absolute',
    width: 339,
    height: 50,
    left: 139,
    top: 40,
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 36,
    color: '#000000'
  },
  input:{
    position: 'absolute',
    width: 267,
    height: 50,
    left: 62,
    top: 39,
    border: 1,
    borderColor:'#000000',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    borderRadius: 25,
  },
  forms:{
    position: 'absolute',
    width: 1217,
    height: 459,
    left: 139,
    top: 140,
    background: '#FFFFFF',
    borderRadius: 10
  },
  form:{
    display: 'flex',
  },
  table:{
    left: 60,
    top: 116,
    position: 'absolute',
    width: 1050,
    height: 100,
  },
  tr:{
    background: '#7A4A8C',
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'normal',
    height: 52
  },
  trdata:{
    background: '#FFFFFF',
    color: '#0E0E0E',
    fontSize: 18,
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bolder',
    height: 52,
  },
  button:{
      position: 'absolute',
      top: 55.06,
      left: 291.06,
      textDecoration: 'none',
      fontSize: 15,
      border: 'none',
      background: '#FFFFFF',
  }
});

export default Products