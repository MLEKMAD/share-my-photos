import Api from "./Api";
/**
 * 
 * @returns images from server
 */
export const getPhotos = async () => {
    try {
      const response = await Api.get("/");
      return response;
    } catch (error) {
      console.error("Error: ",error);
    }
};

/**
 * 
 * @param {*} fileId the id of the image
 */
export const deletePhoto = async (fileId) => {
  try {
    console.log({fileId})
    const response = await Api.delete(`/${fileId}`)
    console.log("delete response", response)
  } catch (error) {
    console.log(error)
    throw error;
  }
}
/**
 * 
 * @param {*} fileId the id of the image we want to comment
 * @param {*} payload the comment 
 */
export const commentPhoto = async (fileId, payload) => {
  try {
    console.log({fileId})
    console.log({payload})
    const response = await Api.post(`/${fileId}/comment`, payload)
    console.log("comment response", response)
  } catch (error) {
    console.log(error)
    throw error;
  }
}

/**
 * 
 * @param {*} comment the filter with which we look for the images
 * @returns the images that contains the filter
 */
  export const findByComment = async (comment) => {
    try {
      const response = await Api.get(`/comment`, {params:{comment}})
      console.log("find by comment response", response)
      return response
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

