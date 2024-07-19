import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

export const validateUserJWT = async (token) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/users/jwtVerification`, {
      headers: { Authorization: "Bearer " + token },
    });
    return data.userData;
  } catch (error) {
    return null;
  }
};
