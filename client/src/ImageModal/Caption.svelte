<script>
	import { createEventDispatcher } from 'svelte';
  export let caption;
	
	const dispatch = createEventDispatcher();
</script>

<style>
/* Container for image text */
.caption-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
  text-align: center;
  background-color: #222;
	font-size: 1.2rem;
  padding: 2px 16px;
  color: white;
}
	
/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
/*   position: absolute;
  top: 50%; */
  width: auto;
/*   padding: 16px;
  margin-top: -50px; */
  color: hsla(125, 86%, 100%, .7);
  font-weight: bold;
  font-size: 2rem;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
/*   right: 15vw; */
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  color: hsla(125, 26%, 64%, .5);
	text-decoration: none;
}	
	
.prev:active,
.next:active {
  color: hsla(125, 86%, 64%, 1);
	text-decoration: none;
}		
	
</style>


<div class="caption-container">
	<!-- Previous Arrow -->
	<a href="#arrowL" class="arrow prev" on:click={() => dispatch('prevClick')}>&#10094;</a>
		<!-- Caption -->
	<p id="caption">{caption}</p>
		<!-- Next Arrow -->
	<a href="#arrowR" class="arrow next" on:click={() => dispatch('nextClick')}>&#10095;</a>
</div>