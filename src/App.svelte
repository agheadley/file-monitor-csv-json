<script lang="ts">

	import Abc from "./components/abc.svelte";
	import Def from "./components/def.svelte";
	import Ghi from "./components/ghi.svelte";

	import Login from "./components/login.svelte";
	

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
		{component:Abc,name:"abc"},
		{component:Def,name:"def"},
		{component:Ghi,name:"ghi"}
	];
	
	
	

</script>

<div class="sidebar" id="sidebar">
	<div class="sidebar-close">
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
<div class="header-section"><Login/></div>
</div>  <!--end of header-->


<div class="content">

	<svelte:component this={pages[pageIndex].component} />

</div> <!--end of content-->

<div class="footer">
	<div class="header-section">testing</div>
	<div class="header-section"><img alt="logo" width="30px" height="30px" src="./favicon.ico"/></div>

</div>	

</div> <!--end of wrapper-->


