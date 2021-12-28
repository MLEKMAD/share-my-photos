<script>
	import Display from "./Display.svelte";
	import Post from "./Post.svelte";
	
	export let menu = 1;
</script>

<style>
	ul#menu li{
		display : inline;
	}
</style>

<ul id="menu">
	<li><a href="/" on:click|preventDefault={() => (menu = 1)}>Photos</a></li> |
	<li><a href="/" on:click|preventDefault={() => (menu = 2)}>Add a picture</a></li>
</ul>

{#if menu === 1}
<Display />
{:else if menu === 2}
<Post />
{:else}
<h1>
	Page Not Found
</h1>
{/if}

