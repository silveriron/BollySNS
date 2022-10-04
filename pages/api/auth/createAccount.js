import { auth } from "../../../utility/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const createAccount = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;
    createUserWithEmailAndPassword(auth, email, password)
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

export default createAccount;
