<script lang="ts">

import * as file from "./../scripts/file";
let data=[];
	for(let i=0;i<50;i++) {
		data[i]=""+i;
    }
    
let files:File[];
let filedata:string="";

let rowlength:number=60;
let rows:string[][]=[];
rows[0]=[];
let getRows = () => {
    let row:number=0;
    let index:number=0;
    for(let item of filedata) {
        rows[row][index]=item;
        index++;
        if(index>=rowlength) {
            index=0;
            row++;
            rows[row]=[];
        }

    }
    console.log(rows);
};

let upload=()=>{
    file.read(files[0],res=>{
        filedata=res;
        console.log(res);
        getRows();

    });
};
</script>

<div class="container">
<h1>abc</h1>
</div>

<div class="card">
    <h2>File Upload</h2>
    <div>
        <input class="file-input" type="file" bind:files>

    {#if files && files[0]}
    <p><button class="btn btn-success" on:click={upload}>upload</button></p>
    <p>File length : {filedata.length}</p>
    {/if}
    {#if !files || !files[0]}
    <p><button class="btn btn-success" disabled on:click={upload}>upload</button></p>
    <p>File length : (No file selected)</p>
    {/if}
    
    </div>

</div>

<div class="container">

<table>
    <tbody>
        {#each rows as row,rowIndex}
        <tr>
            {#each row as col,colIndex}
                <td>{col}</td>
            {/each}
        </tr>
        {/each}


    </tbody>

</table>


</div>
    