import Api from "./Api";

export const getPhotos = async () => {
    try {
      const response = await Api.get("/");
      return response;
    } catch (error) {
      console.error(error);
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
