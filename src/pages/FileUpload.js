import React, { Fragment, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import https from 'https';


import Button from '../components/Button';
import Message from '../components/Message';
import Progress from '../components/Progress';

function FileUpload(){
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChangeHandler = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const httpsAgent = new https.Agent({
                rejectUnauthorized: false // (NOTE: this will disable client verification)
              });
              
              
            const res = await axios.post('https://localhost:5001/api/Items/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                httpsAgent: httpsAgent,
                onUploadProgress: progressEvent => {
                  setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
                
                setTimeout(() => setUploadPercentage(0), 10000);
                }
                
             });
             const { fileName, filePath } = res.data;
             setUploadedFile({ fileName, filePath });
             setMessage('File uploaded');
        } catch(err) {
            console.log("ERRO", err);
            
            setMessage('There was a problem with the server');
            
        }
    }
    return(
        <>
        <div>
        <h1 className={css(styles.h1)}>Importação de Produtos</h1>
        <div className={css(styles.page)}>
        <form className={css(styles.form)}>
            <img alt='img-upload' className= {css(styles.img)} src='upload.png'/>
            <Fragment>
                {message ? <Message msg={message} /> : null}
                <form onSubmit={onSubmitHandler}>
                    <div className="custom-file mb-4">
                        <input 
                        type="file" 
                        className="custom-file-input" 
                        id="customFile" onChange={onChangeHandler} />
                        <label className="custom-file-label" htmlFor="customFile">
                        {fileName}
                        </label>
                    </div>
                    <Progress percentage={uploadPercentage} />
                    <input
                    type="submit"
                    value="Upload"
                    className="btn btn-primary btn-block mt-4"
                    />
                </form>
                { uploadedFile ? <div className="row mt-5">
                <div className="col-md-6">
                    <h3 className="text-center">{fileName}</h3>
                </div>
                </div> : null}
            </Fragment>
         {/* <p>Para enviar um arquivo</p> */}
        </form>
        <Button title='Enviar' className={css(styles.button)}></Button>
        </div>
        </div>
        </>
    )
};

const styles = StyleSheet.create({
    h1:{
        position: 'absolute',
        width: 450,
        height: 50,
        left: 139,
        top: 40,
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 36,
        color: '#000000'
    },
    page:{
        position: 'absolute',
        width: 1217,
        height: 520,
        left: 139,
        top: 140,
        background: '#FFFFFF',
        borderRadius: 10
    },
    form:{
        position: 'absolute',
        width: 422,
        height: 325,
        left: 68,
        top: 98,
        background: '#EDEDED',
        border: 3,
        boxSizing: 'border-box',
        borderRadius: 10,
    },
    button:{
        position: 'absolute',
        width: 141,
        height: 50,
        background: 'linear-gradient(90deg, #FF4427 0%, #FFBA00 97.87%)',
        borderRadius: 25,
        left: 1036,
        top: 24
    },
    img:{
        position: 'absolute',
        width: '50%',
        height: '50%',
        left: '25%',
        top: '15%'
    }
});

export default FileUpload