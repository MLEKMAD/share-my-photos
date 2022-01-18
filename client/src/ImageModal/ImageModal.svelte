<script>
	import Content from './Content.svelte';
  import Modal from './Modal.svelte';
	import { modal } from './stores.js';
</script>

<Modal show={$modal}>
	<Content />
</Modal>