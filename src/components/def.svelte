<script lang="ts">

let data=[];
	for(let i=0;i<50;i++) {
		data[i]=""+i;
    }


</script>

<div class="container">
    <h1>def</h1>
    </div>

    <div class="container">
        <table>
            <thead>
                <tr>
                    {#each data as item}
                      <th>c{item}</th>
                    {/each}
                </tr>
                 
            </thead>
            <tbody>
            <tr>
                {#each data as item}
                  <td>r0c{item}</td>
                {/each}
            </tr>
            <tr>
                {#each data as item}
                  <td>r1c{item}</td>
                {/each}
            </tr>
            <tr>
                {#each data as item}
                  <td>r2c{item}</td>
                {/each}
            </tr>
            
            </tbody>
        </table>
        
    </div>
    
    <div class="card">
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
    <div class="flex-right">
    <div><button class="btn btn-danger">cancel</button></div>
    <div><button class="btn btn-success">save</button></div>
    </div>
    </div>
    
    <div class="card">
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="flex-justify">
            <div><button class="btn btn-danger">cancel</button></div>
            <div><button class="btn btn-success">save</button></div>
        </div>
    
    </div>
    
    <div class="card">
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="flex-left">
            <div><button class="btn btn-danger">cancel</button></div>
            <div><button class="btn btn-success">save</button></div>
            </div>
    
    </div>
    