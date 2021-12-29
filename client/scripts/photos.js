import Api from "./Api";

export const getPhotos = async () => {
    try {
      const response = await Api.get("/photos");
      return response;
    } catch (error) {
      console.error(error);
    }
};

export const postPhotos = async (payload) => {
  try {
    console.log("Payload:", payload)
    const response = await Api.post("/photos", payload)
    console.log("response", response)
  } catch (error) {
    console.log(error)
    throw error;
  }
}

