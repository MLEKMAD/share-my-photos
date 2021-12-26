import Api from "./Api";

export const getPhotos = async () => {
    try {
      const response = await Api.get("/photos");
      console.log("response", response)
      return response;
    } catch (error) {
      console.error(error);
    }
};

