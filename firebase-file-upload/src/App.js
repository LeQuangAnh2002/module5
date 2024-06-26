import './App.css'
import React, {useEffect, useState} from "react";
import {storage} from './firebase'
import {ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid';
function App() {

    const [imageUpload,setImageUpload] = useState(null)
    const [imageList,setImageList] = useState([]);

    const imagesListRef = ref(storage,"images/")


    const uploadImage = async () => {
        if (imageUpload === null) return;
        // đây là một tham chiếu đến vị trí lưu trữ file trong Firebase Storage
        // nó được tạo bằng cách sử dụng hàm ref từ Firebase Storage
        // Hàm ref nhận 2 tham số :
        // + storage: đây là một đối tượng Firebase Storage, đại diện cho toàn bộ dịch vụ lưu trữ của Firebase.
        // file.name đây là tên file chúng ta muôn upload
        //storageRef đóng vai trò như một "đường dẫn" để Firebase Storage biết chúng ta muốn upload file vào đâu.
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        // snapshot đối tượng cho đại diện cho quá trình upload file lên Firebase Storage
        // hàm uploadBytes được sử dụng để upload file lên Firebase Storage
        // nó sẽ upload file một cách liên tục, không có khả năng nối lại quá trình upload khi bị gián đoạn.
        // nếu quá trình upload bị gián đoạn(mất kết nối mang, người dùng đó trình duyêt), file sẽ upload lại từ đầu.
        // uploadBytes phù hợp với các file nhỏ hoặc trong các trường hợp không cần quá trình upload liên tục.

        const snapshot = await uploadBytes(imageRef, imageUpload);
        const url  = await getDownloadURL(snapshot.ref)
        setImageList((prev) => [...prev,url])

    }

    useEffect(() => {
        const fetchImageList = async () => {
            const response = await listAll(imagesListRef);

            const urls = await Promise.all(
                response.items.map(async (item) => {
                    const url = await getDownloadURL(item);
                    return url;
                })
            );
            setImageList(urls);
        };
        fetchImageList();
    }, []);
  return (
    <div className="App">
      <input
      type='file'
      onChange={(e) => {setImageUpload(e.target.files[0])}}
      />
      <button onClick={uploadImage}>Upload file</button>

        {imageList.map((url) => (
            <img src={url}/>
        ))}
    </div>
  );
}

export default App;
