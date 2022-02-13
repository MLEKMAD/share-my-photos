<script>
  import { images, imageShowingIndex } from "./stores.js";
  import Slide from "./Slide.svelte";
  import Caption from "./Caption.svelte";
  import { getPhotos } from "../../scripts/photos.js";
  import { onMount } from "svelte";

  let keyCode;
 // Using keyboard to move between slides
  function handleKeydown(event) {
    keyCode = event.keyCode;
    keyCode == 39 ? nextSlide() : keyCode == 37 ? prevSlide() : null;
  }
  onMount(async () => {
    const response = await getPhotos();
    $images = [...response];
    console.log({ $images });
  });

  /* IMAGE TO SHOW */
  $: console.log({ $images });
  $: image = $images[$imageShowingIndex];

  const nextSlide = () => {
    if ($imageShowingIndex === $images.length - 1) {
      $imageShowingIndex = 0;
    } else {
      $imageShowingIndex += 1;
    }
  };

  const prevSlide = () => {
    if ($imageShowingIndex === 0) {
      $imageShowingIndex = $images.length - 1;
    } else {
      $imageShowingIndex -= 1;
    }
  };

  export const goToSlide = (number) => ($imageShowingIndex = number);
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $images.length}
  <main>
    <!-- image gallery -->
    <div class="container">
      <Slide
        image={`http://localhost:8081/images/${image.filename || ""}`}
        altTag={image.title}
        slideNo={$imageShowingIndex + 1}
        totalSlides={$images.length}
        attr={image.title}
      />
    </div>

    <!-- Image text -->
    <Caption
      caption={image.comment}
      on:prevClick={prevSlide}
      on:nextClick={nextSlide}
    />
  </main>
{:else}
  <p>No photo was found!!</p>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap");

  * {
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
  }

  main {
    width: 70vw;
    display: flex;
    flex-direction: column;
    margin: 10% auto;
    background-color: #222;
    box-shadow: 0 0 10px black;
  }

  /* Position the image container (needed to position the left and right arrows) */
  .container {
    position: relative;
    width: 100%;
  }
</style>
