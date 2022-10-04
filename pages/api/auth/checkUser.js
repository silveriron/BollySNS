import { auth } from "../../../utility/firebase";

const checkUser = (req, res) => {
  if (req.method === "GET") {
    return res.status(200).json({ user: auth.currentUser });
  }
};

export default checkUser;
