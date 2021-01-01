<script lang="ts">
let toggleModal=()=>{
		let el=document.getElementById('signin-modal');
		if(el.style.width==="100%") el.style.width="0px";
		else el.style.width="100%";
	}

</script>

<button on:click={toggleModal} class="btn btn-primary">log in</button>

<div class="modal" id="signin-modal">
    <div class="modal-close">
        <a class="btn-lg" href="#" on:click={toggleModal}>&times;</a>

    </div>
</div>