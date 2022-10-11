const getUser = () => {
  return new Promise((resolve, reject) => {
    if (window) {
      const idexedDB = window.indexedDB;

      const req = idexedDB.open("firebaseLocalStorageDb");
      req.onsuccess = (e) => {
        const db = req.result;
        const transaction = db.transaction("firebaseLocalStorage");
        const objStore = transaction.objectStore("firebaseLocalStorage");
        const objStoreReq = objStore.openCursor();
        objStoreReq.onsuccess = (e) => {
          resolve(e.target?.result?.value.value);
        };
        objStoreReq.onerror = (e) => {
          reject(e);
        };
      };
    }
  });
};

export default getUser;
