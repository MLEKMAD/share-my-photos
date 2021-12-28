<style global>
    @import 'filepond/dist/filepond.css';
    @import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
    </style>
    
    <script>
    import FilePond, { registerPlugin, supported } from 'svelte-filepond';
    
    
    // a reference to the component, used to call FilePond methods
    let pond;
    
    // pond.getFiles() will return the active files
    
    // the name to use for the internal file input
    let name = 'filepond';
    
    // handle filepond events
    function handleInit() {
        console.log('FilePond has initialised');
    }
    
    function handleAddFile(err, fileItem) {
        console.log('A file has been added', fileItem);
    }
    </script>
    
    <div class="app">
    
        <FilePond bind:this={pond} name='photo'
            server="http://localhost:8081/api/photos"
            allowMultiple={true}
            oninit={handleInit}
            onaddfile={handleAddFile}/>
    
    </div>