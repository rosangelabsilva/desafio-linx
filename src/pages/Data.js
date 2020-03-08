import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Data(){
    return(
        <>
        <div className={css(styles.page)}>
        <h1 className={css(styles.h1)}>Importação de Dados</h1>
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
    }
});

export default Data