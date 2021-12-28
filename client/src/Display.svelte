<script>
    import { onMount } from "svelte";
    import { getPhotos } from "../scripts/photos";
    let images;
    onMount(async () => {
      const response = await getPhotos();
      console.log("response", response);
    });
  
  </script>
  
<h1>
    My Photos
</h1>
  
  