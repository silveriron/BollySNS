import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utility/firebase";
import Pweet from "./Pweet";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const Home = ({ userObj }) => {
  const [pweet, onChangePweet, setPweet] = useInput();
  const [pweets, setPweets] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    onSnapshot(collection(db, "pweet"), (snapshot) => {
      const pweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      pweetArray.sort((a, b) => b.createAt - a.createAt);
      setPweets(pweetArray);
    });
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let imageUrl = null;
    let imageName = null;
    if (image) {
      imageName = uuidv4();
      const storageRef = ref(storage, `${userObj.uid}/${imageName}`);
      const response = await uploadString(storageRef, image, "data_url");
      imageUrl = await getDownloadURL(ref(storageRef));
    }

    const pweetObj = {
      text: pweet,
      createAt: Date.now(),
      creatorId: userObj.uid,
      imageUrl,
      imageName,
    };
    console.log(pweetObj);
    if (pweet.length > 0) {
      try {
        await addDoc(collection(db, "pweet"), pweetObj);
      } catch (e) {
        console.error(e);
      }
    }
    setPweet("");
    setImage(null);
  };

  const onImageChangeHandler = (e) => {
    const {
      target: { files },
    } = e;
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (fileEvent) => {
        setImage(fileEvent.currentTarget.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onClearImageHandler = () => setImage(null);

  return (
    <>
      {image && (
        <div>
          <Image src={image} alt={image} width="200" height="200" />
          <button onClick={onClearImageHandler}>Clear</button>
        </div>
      )}
      <form onSubmit={onSubmitHandler}>
        <input
          value={pweet}
          placeholder="어떤 생각을 하고 계시나요?"
          type="text"
          onChange={onChangePweet}
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onImageChangeHandler} />
        <input type="submit" value="Pwitter" />
      </form>
      <div>
        {pweets.map((pweet) => {
          return (
            <Pweet
              key={pweet.id}
              pweetObj={pweet}
              isOwner={pweet.creatorId === userObj.uid}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
