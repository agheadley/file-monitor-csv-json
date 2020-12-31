<script lang="ts">

	import abc from "./components/abc.svelte";
	import def from "./components/def.svelte";
	import ghi from "./components/ghi.svelte";
	
	export let name: string;

	let toggleNav=()=>{
		let el=document.getElementById('sidebar');
		if(el.style.width==="200px") el.style.width="0px";
		else el.style.width="200px";
	}

	let openPage=(index:number)=>{
		pageIndex=index;
		toggleNav();
	}

	let pageIndex:number=0;
	let pages=[
		{component:abc,name:"abc"},
		{component:def,name:"def"},
		{component:ghi,name:"ghi"}
	];
	
	
	let data=[];
	for(let i=0;i<50;i++) {
		data[i]="xyz"+i;
	}

</script>

<div class="sidebar" id="sidebar">
	<div>
	<a class="btn-lg" href="#" on:click={toggleNav}>&times;</a>
	</div>
	<div>
		<ul>
		{#each pages as page,i}
		<li><a href="#" on:click={()=>openPage(i)}>{page.name}</a></li>
		{/each}
		</ul>
	</div>
</div>

<div class="wrapper">
<div class="header">
<div class="header-section">
	<div>
	<a class="btn-lg" href="#" on:click={toggleNav}>&equiv;</a>
	</div>
	<div class="nav">
		{#each pages as page,i}
		{#if pageIndex===i}
		<div class="nav-item nav-selected" on:click={()=>pageIndex=i}>{page.name}</div>
		{/if}
		{#if pageIndex!==i}
		<div class="nav-item" on:click={()=>pageIndex=i}>{page.name}</div>
		{/if}
		{/each}
		
	</div>			
</div>
<div class="header-section"><button class="btn-primary">sign-in</button></div>
</div>


<div class="content">

	<svelte:component this={pages[pageIndex].component} />

</div> <!--end of content-->

<div class="footer">
	<div class="header-section">testing</div>
	<div class="header-section"><img width="30px" height="30px" src="./favicon.ico"/></div>

</div>	

</div> <!--end of wrapper-->



<!--
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

	-->
<style>
	
</style>