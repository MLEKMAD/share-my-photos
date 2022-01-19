<script>
  import { images, imageShowingIndex } from "./stores.js";
  import Slide from "./Slide.svelte";
  import Modal from "svelte-simple-modal";
  import CommentPopup from './CommentPopup.svelte'
  import Caption from "./Caption.svelte";
  import { deletePhoto } from "../../scripts/photos";
  import { Link } from "svelte-routing";
  import { writable } from 'svelte/store';


  const commentModal = writable(null);
  const showCommentModal = (e) => {
	  console.log('here')
    commentModal.set(CommentPopup);
  };
  const commentOnPhoto = () => {
    let picture = $images[$imageShowingIndex];
    console.log({ picture });
  };
  const deleteAPhoto = async () => {
	if($images.length){
    let picture = $images[$imageShowingIndex];
    console.log({ picture });
    try {
      const res = await deletePhoto(picture._id);
    } catch (e) {
      console.error("Error", e);
    }
	images.update(images => {images.splice($imageShowingIndex,1);
	return images = [...images]})
	nextSlide();
	}
  };
  /* IMAGE TO SHOW */
  $: console.log({$images})
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
<Modal show={$commentModal}>
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

  <button on:click={showCommentModal}><Link to="/display-photos"/> update comment </button>
  <button on:click={deleteAPhoto}> delete photo </button>
</main>
{:else}
	<p>No photo was found!!</p>
{/if}
</Modal>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap");

  * {
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
  }

  main {
    /* width: 70vw; */
    display: flex;
    flex-direction: column;
    margin: 10% auto;
    background-color: #222;
    box-shadow: 0 0 10px black;
  }

  /* Position the image container (needed to position the left and right arrows) */
  .container {
    position: relative;
  }
</style>
