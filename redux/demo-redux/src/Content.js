import React, {useEffect, useState} from "react";

//1.useEffect(callback)
//- Gọi callback mỗi khi component re-render
//- gọi callback sau khi component thêm element vào DOM
//2.useEffect(callback,[])
//- chỉ gọi callback 1 lần sau khi component mounted
//3.useEffect(callback,[deps])
//- callback sẽ dc gọi lại mỗi lần khi deps thay đổi
//---------------------------
//1.Callbacks luôn dc gọi sau khi component mounted.
//2.Cleanup function luôn dc gọi trước khi component unmounted
//3.Cleanup function luôn dc gọi trước khi callback được gọi (trừ lần mounted)
const tabs = ['posts','comments','albums']
export default function Content() {
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')
    const [showGoToTop,setShowGoToTop] = useState(false)

    useEffect(() =>{
        getAll()
    },[type])

    useEffect(()=>{
        const handleScroll = () =>{
            if (window.scrollY >= 200){
            setShowGoToTop(true)
            }else{
                setShowGoToTop(false)
            }

        }

        window.addEventListener('scroll',handleScroll)
    

        return () => window.removeEventListener('scroll',handleScroll)

    },[])

    const getAll = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`)

        const data = await res.json()

        setPosts(data)
    }
    return(
        <div>
            {tabs.map(tab =>(
                <button key={tab}
                style={type === tab ? {
                    color:'#fff',
                    backgroundColor:'#333'
                }:{}}
                onClick={()=>setType(tab)}>
                    {tab}
                </button>
            ))}

            <input value={title} onChange={(e) =>setTitle(e.target.value) } />


                {posts.map((post,index) => {
                        return(<li key={post.id}>{post.title || post.name}</li>)
                    })}


            {showGoToTop && (
                <button style={{
                    position :'fixed',
                    right: 20,
                    bottom:20
                }}>Go to Top</button>
            )}
        </div>

    )
}