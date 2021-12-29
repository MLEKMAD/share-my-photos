<script>
  import FilePond, { registerPlugin, supported } from "svelte-filepond";
  import { postPhotos } from "../scripts/photos";
  import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
  import FilePondPluginImagePreview from "filepond-plugin-image-preview";
  // Register the plugins
  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
  );
  // a reference to the component, used to call FilePond methods
  let pond;

  
    // TODO: wait for upload before sending the post

  // pond.getFiles() will return the active files
  // Import the Image EXIF Orientation and Image Preview plugins
  // Note: These need to be installed separately
  // `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`

  // the name to use for the internal file input
  let name = "photo";

  // handle filepond events
  const handleInit = () => {
    console.log("FilePond has initialised");
  };

  const handleAddFile = async (err, fileItem) => {
    console.log("A file has been added", fileItem);
    try {
        const {name, data, type} = fileItem.file
        console.log("name",name)
       const res = await postPhotos(fileItem).catch(err => console.log({err}));
       console.log({res})
    } catch (e) {
      console.error("Error dl7za9", e);
    }
  };
</script>

<div class="post-card">
  <FilePond
    class="filepond--root"
    bind:this={pond}
    name="photo"
    server="http://localhost:8081/api/photos"
    allowMultiple={true}
    oninit={handleInit}
    onaddfile={handleAddFile}
  />
</div>

<style global>
  @import "filepond/dist/filepond.css";
  @import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
</style>
