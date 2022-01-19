<script>
  import { commentPhoto } from "../../scripts/photos";
  import { images, imageShowingIndex } from "./stores.js";
  let comment = "";
  const updateComment = (e) => {
    e.preventDefault();
    let picture = $images[$imageShowingIndex];
    console.log({ picture });
    console.log("event", e);
    commentPhoto(picture._id, {comment})
    images.update(images => {return images = [...images]})
  };
</script>

<form method="post">
  <input type="text" bind:value={comment} />
  <button on:click={updateComment}>update</button>
</form>
