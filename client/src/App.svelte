<script>
  import { onMount } from "svelte";
  import { getPhotos, postPhotos } from "../scripts/photos";
  let images;
  onMount(async () => {
    const response = await getPhotos();
    console.log("response", response);
  });

</script>

<h1>Share my photos beaaaaaach</h1>
<form action='http://localhost:8081/api/photos' enctype="multipart/form-data" method="post" >
<label for="avatar">Upload images here:</label>
<input
  accept="image/png, image/jpeg"
  bind:this={images}
  id="image"
  multiple
  name="photo"
  type="file"
/>
<input type='submit' />
</form>

