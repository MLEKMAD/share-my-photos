<script>
  import { onMount } from "svelte";
  import { getPhotos } from "../scripts/photos";
  import Gallery from "svelte-image-gallery";
  const handleClick = (e) => {
    console.log("here");
    console.log(e.detail.src);
  };
  let images = [];
  onMount(async () => {
    const response = await getPhotos();
    images = response;
    console.log({ images });
  });
</script>

<h1>
  My Photos

</h1> <Gallery gap="12" on:click={handleClick}> 
 {#each images as image}
    <img
      src={`http://localhost:8081/images/${image.filename}`}
      alt={image.title}
    />
    <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
  {/each}
</Gallery>

<style>
  :global(img) {
    opacity: 0.9;
    transition: all 0.2s;
  }
  :global(img):hover {
    opacity: 1;
    transform: scale(1.04);
  }
</style>
