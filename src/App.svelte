<script lang="ts">
	export let name: string;

	let toggleNav=()=>{
		let el=document.getElementById('sidenav');
		if(el.style.width==="200px") el.style.width="0px";
		else el.style.width="200px";
	}
	
	
	let data=[];

	for(let i=0;i<50;i++) {
		data[i]="xyz"+i;
	}

</script>

<div class="side-nav" id="sidenav">
	<button on:click={toggleNav}>&times;</button>
</div>

<div class="wrapper">

	

	<div class="header">
					<div class="navbar-section">
					<div class="p10">
	
					<a class="button" href="#" on:click={toggleNav}>&equiv;</a>
					</div>
					<div class="p10">heading</div>
				</div>
					
				<div class="p-10">
					<a href="#">link1</a>
					<a href="#">link2</a>
					<a href="#">link3</a>
					<a href="#">link4</a>
				
				</div>
			
				
				<div class="p-10">right links</div>

	</div>
	<div class="header">

		</div>
		<div class="content">
		  <!--<div style="height:1000px;">Content</div>-->
		  <p>ewffgf ef gfe geg fergr g3r gr3 g3g 3rg 3g 3g 3g 3g 3gr3 gr3 g3 gr3 gr3 g3 g3r g3 g3 g3g 3 g3r g3rg 3rg 3r g3rg 3g 3rg 3g 3g ffwfwfwefewfw fwe fwef wef ewf wf wef wef ewf wef wef w wef wef wef wefw ef wfwe eff wef ewew fwe few fwe fwef</p>
			<p> bgrb    <button class="button">clear</button></p>
		  <table>
			  <tr>
				  {#each data as item}
					<td>{item}</td>
				  {/each}
			  </tr>
		  </table>
		
		</div>
		<div class="footer">
			<div class="p-10">Footer
				</div>
			</div>
	  </div>


<style>
	
</style>