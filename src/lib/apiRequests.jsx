import { api } from "@/lib/axiosProvider";



// Function to activate user
export const activateUser = async (identifier, authToken) => {
  console.log("activating user")
  const response = await api.post("/user-gateway/activate-user", {
    user_id: identifier,
    authToken: authToken,
  });
  return response;
};

// Function to activate user
export const resetUser = async (identifier, otp) => {
  
console.log("resetting")
  const response = await api.post(
    "/user-gateway/confirm-code-forgot-password",
    {
      identifier: identifier,
      authToken: otp,
    }
  );

  return response;
};
