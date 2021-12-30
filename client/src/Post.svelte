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
  // a reference to the component, used to call FilePond methods
  let pond;


  // handle filepond events
  // const handleInit = () => {
  //   console.log("FilePond has initialised");
  // };

  // const handleAddFile = async (err, fileItem) => {
  //   console.log("A file has been added", fileItem);
  // };
  const handleRemove = async (fileId) => {
    const { imageId } = JSON.parse(fileId);
    try {
      const res = await deletePhoto(imageId);
    } catch (e) {
      console.error("Error", e);
    }
  };
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

