<script>
  import { onMount } from "svelte";
  import { getPhotos } from "../scripts/photos";
  import { images } from "./ImageModal/stores.js";
  import Gallery from "svelte-image-gallery";
  import { writable } from "svelte/store";
  import Modal from "svelte-simple-modal";
  import Popup from "./ImageModal/Popup.svelte";
  import { imageShowingIndex } from "./ImageModal/stores";


  const modal = writable(null);
  const showModal = (e) => {
    $imageShowingIndex = $images.findIndex(
      (element) =>
        `http://localhost:8081/images/${element.filename}` === e.detail.src
    );
    modal.set(Popup);
  };
  onMount(async () => {
    const response = await getPhotos();
    $images = [...response];
    console.log({ $images });
  });
</script>

<Modal  show={$modal} styleWindow={{ width: "60%",display: "block"}}>
  {#if $images.length}
  <section>
    <h1>My Photos</h1>
    <Gallery gap="12" on:click={showModal}>
      {#each $images as image}
        <img
          src={`http://localhost:8081/images/${image.filename}`}
          alt={image.title}
        />
      {/each}
    </Gallery>
  </section>
  {:else}
  <p>Add photo to your Album</p>
  {/if}
</Modal>

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
