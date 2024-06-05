import { api } from "@/lib/axiosProvider";

export const sendPasswordResetEmail = async (values) => {
  const { email, ...rest } = values;
  const modifiedData = {
    identifier: email,
    ...rest,
  };

  try {
    const response = await api.post(
      "/user-gateway/retrive-password-email",
      modifiedData
    );
    const data = response?.data;
    return { success: data.message === "success", details: data.details };
  } catch (error) {
    console.error(error);
    console.error(error.response?.data?.error);
    throw new Error(error.message || "Network error");
  }
};

// Function to activate user
export const activateUser = async (identifier, authToken) => {
  const response = await api.post("/user-gateway/activate-user", {
    user_id: identifier,
    authToken: authToken,
  });
  return response;
};

// Function to activate user
export const resetUser = async (identifier, otp) => {
  

  const response = await api.post(
    "/user-gateway/confirm-code-forgot-password",
    {
      identifier: identifier,
      authToken: otp,
    }
  );

  return response;
};
