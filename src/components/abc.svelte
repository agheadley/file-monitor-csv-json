<script lang="ts">
let data=[];
	for(let i=0;i<50;i++) {
		data[i]="xyz"+i;
	}
</script>

<h1>abc</h1>

<table>
    <tr>
        {#each data as item}
          <td>{item}</td>
        {/each}
    </tr>
</table>