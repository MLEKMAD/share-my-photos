<script>
  import FilePond, { registerPlugin, supported } from "svelte-filepond";
  import { deletePhoto } from "../scripts/photos";
  import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
  import FilePondPluginImagePreview from "filepond-plugin-image-preview";
  // Register the plugins
  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
  );
  let pond;



  const handleRemove = async (fileId) => {
    const { imageId } = JSON.parse(fileId);
    try {
      const res = await deletePhoto(imageId);
    } catch (e) {
      console.error("Error", e);
    }
  };
  const handleFinish = () => {
    if (pond.getFiles().length != 0) {
    pond.removeFiles()
  }
  myMenu = 1
  }
</script>

<div class="post-card">
  <FilePond
    class="filepond--root"
    bind:this={pond}
    name="photo"
    server={{
      url: "http://localhost:8081/api/photos",
      revert: handleRemove,
      remove: handleRemove,
    }}
    allowMultiple={true}
    dropOnPage={true}
    dropValidation={true}
  />
</div>
<button on:click={handleFinish}>finish</button>

