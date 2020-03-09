import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import https from 'https';

import Button from "../components/Button";

function Products(){
  const [data, setData] = useState([]);

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
  },[])

    return(
        <>
        <div className={css(styles.page)}>
        <h1 className={css(styles.h1)}>Listagem de Produtos</h1>
        <div className={css(styles.forms)}>
        <form className={css(styles.form)}>
            <input type='text' placeholder='Busque por palavra-chave' className={css(styles.input)}></input>
            <Button title= '🔎' className={css(styles.button)}></Button>
        </form>
        <form>
            <table className={css(styles.table)}>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Valor</th>
                </tr>
                {data.map((item) => {
                  return <tr><th>{item.id}</th><th>{item.nome}</th><th>{item.valor}</th></tr>
                })}
            </table>
        </form>
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
    border: 0.5,
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
    position: 'absolute'
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