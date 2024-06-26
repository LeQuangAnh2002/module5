import React, {useState} from 'react';

function ImageUpLoad() {
    const  [image,setImage] = useState('');
    function handleImage(e) {
        console.log(e.target.files)
            setImage(e.target.files[0])
    }
    function handleApi() {
        const formData = new FormData();
        formData.append('image',image);

    }
       return(
           <div>
                <input type="file" name="file" onChange={handleImage}/>
                <button onClick={handleApi}>Submit</button>
           </div>
       )
}
export default ImageUpLoad;