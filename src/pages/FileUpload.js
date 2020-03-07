import React from 'react';
function FileUpload(){
    return(
        <>
        <form class="app-form">
            <mat-form-field class="app-form-control">
            <ngx-mat-file-input placeholder="Anexos" formControlName="anexos"></ngx-mat-file-input>
            <mat-icon matSuffix>Arquivo</mat-icon>
            </mat-form-field>

            <button click="onSubmit()">Salvar</button>
        </form>
        </>
    )
}

export default FileUpload