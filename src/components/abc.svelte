<script lang="ts">

import * as file from "./../scripts/file";
let data=[];
	for(let i=0;i<50;i++) {
		data[i]=""+i;
    }
    
let files:File[];
let filedata:string="";

let upload=()=>{
    file.read(files[0],res=>{
        filedata=res;
        console.log(res);

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

