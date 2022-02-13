<script>
  import { commentPhoto, getPhotos } from "../../scripts/photos";
  import { images, imageShowingIndex } from "./stores.js";
  let comment = "";
  const updateComment = (e) => {
    e.preventDefault();
    let picture = $images[$imageShowingIndex];
    commentPhoto(picture._id, {comment})
    images.update( async images => {return images = [...await getPhotos()]})
    closeModal();
  };
  const closeModal = () => {
    console.log('closing...')
  }
</script>

<form method="post">
  <input type="text" bind:value={comment} />
  <button on:click={updateComment}>update</button>
</form>
