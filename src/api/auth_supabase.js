import { setCurrentUser } from "context";
import { supabaseAuthen } from "api/api_supabase";

export const signUp = async (formValues) => {
  try {
    console.log(formValues);
    console.log(supabaseAuthen.auth);
    const { user, session, error } = await supabaseAuthen.auth.signIn({
      provider: "google.com",
    });

    if (error) {
      throw error;
    }

    const currentUser = setCurrentUser();
    currentUser.setEmail(user.email);
    currentUser.setAccessToken(session.access_token);
  } catch (error) {
    console.log(error);
  }
};

// export const signUp = async (formValues) => {
//   try {
//     console.log(formValues.username);
//     const { user, error } = await supabaseAuthen.auth.signUp({
//       email: formValues.email,
//       password: formValues.password,
//     });

//     if (error) {
//       throw error;
//     }

//     const { email } = user;
//     console.log(email);
//     setCurrentUser({ username: formValues.username, email });
//   } catch (error) {
//     console.log(error);
//   }
// };
