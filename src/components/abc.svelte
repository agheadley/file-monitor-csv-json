<script lang="ts">
let data=[];
	for(let i=0;i<50;i++) {
		data[i]="xyz"+i;
	}
</script>

<div class="container">
<h1>abc</h1>
</div>

<div class="card">
<table>
    <tr>
        {#each data as item}
          <td>{item}</td>
        {/each}
    </tr>
</table>
</div>