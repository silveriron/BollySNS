import { auth } from "../../../utility/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const login = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        res.status(200).json({ user });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.errorMessage;
        res.status(401).json({ errorMessage });
      });
  }
};

export default login;
