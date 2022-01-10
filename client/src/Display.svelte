<script>
  import { onMount } from "svelte";
  import { getPhotos } from "../scripts/photos";
  import Gallery from "svelte-image-gallery";

  const handleClick = (e) => {
    console.log("here");
    console.log(e.detail.url);
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

</h1>
<Gallery gap="12">
  {#each images as image}
    <img
      on:click={handleClick}
      src={`http://localhost:8081/images/${image.filename}`}
      alt={image.title}
    />
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
