<script>
	import { onMount } from 'svelte'
	import getPhotos from '../scripts/photos'
	let data
	onMount(async () => {
		data = getPhotos.then(res => console.log("result", res))
	})
</script>

<h1>Share my photos beaaaaaach</h1>