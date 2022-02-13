import Api from "./Api";

export const getPhotos = async () => {
    try {
      const response = await Api.get("/");
      return response;
    } catch (error) {
      console.error("Error: ",error);
    }
};


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

