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
    const response = await Api.post("/photos", payload)
  } catch (error) {
    console.log(error)
  }
}

