<script lang="ts">
let toggleModal=()=>{
		let el=document.getElementById('signin-modal');
		if(el.style.width==="100%") el.style.width="0px";
		else el.style.width="100%";
}

let login=()=>{
	alert("hello from login");
}

</script>

<button on:click={toggleModal} class="btn btn-primary">log in</button>

<div class="modal" id="signin-modal">
	<div class="modal-card">
		<h2>Log In</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	    <div class="flex-left">
			<div><button class="btn btn-success" on:click={login}>login</button></div>
			<div><button class="btn" on:click={toggleModal}>cancel</button></div>
		</div>
	
	
	
	</div>

</div>