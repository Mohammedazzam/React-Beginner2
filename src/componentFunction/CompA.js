// import React ,{useState, useEffect} from 'react'

// function CompA() {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}> Increase</button>
//             {count}
//             <button onClick={() => setCount(count - 1)}> Descrease</button>
//         </div>
//     )
// }
// export default CompA







// import axios  from 'axios'
// import React ,{useState, useEffect} from 'react'

// function CompA() {
//     const [posts, setPosts] = useState([
//     ])
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
//             // console.log(res)
//             console.log(res.data)
//         }).catch(err => {
//             console.log(err)
//         })
//     }, [])
//     return (
//         <div>

//         </div>
//     )
// }
// export default CompA







// import axios  from 'axios'
// import React ,{useState, useEffect} from 'react'

// function CompA() {
//     const [posts, setPosts] = useState([
//     ])
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
//             // console.log(res)
//             setPosts(res.data)
//         }).catch(err => {
//             console.log(err)
//         })
//     }, [])
//     return (
//         <div>
//             {posts.map(post => <div key={post.id}>{post.id} - {post.title}</div>)}
//         </div>
//     )
// }
// export default CompA






// import axios  from 'axios'
// import React ,{useState, useEffect} from 'react'

// function CompA() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
//             // console.log(res)
//             setPosts(res.data)
//         }).catch(err => {
//             console.log(err)
//         })
//     }, [])
//     return (
//         <div>
//             {posts.map(post => <div key={post.id}>{post.id} - {post.title}</div>)}
//         </div>
//     )
// }
// export default CompA



// import axios  from 'axios'
// import React ,{useState, useEffect} from 'react'

// function CompA() {
//     const [posts, setPosts] = useState({})
//     const [id, setId] = useState (1)
//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>{
//             // console.log(res)
//             setPosts(res.data)
//         }).catch(err => {
//             console.log(err)
//         })
//     }, [id])
//     return (
//         <div>
//             <input type="text" value={id} onChange={ (e) => setId(e.target.value)}/>
//             {posts.id} - {posts.title}
//             {/* {posts.map(post => <div key={post.id}>{post.id} - {post.title}</div>)} */}
//         </div>
//     )
// }
// export default CompA



import axios  from 'axios'
import React ,{useState, useEffect} from 'react'

function CompA() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState (1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>{
            // console.log(res)
            setPosts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <input type="text" value={id} onChange={ (e) => setId(e.target.value)}/>
            {posts.id} - {posts.title}
            {/* {posts.map(post => <div key={post.id}>{post.id} - {post.title}</div>)} */}
        </div>
    )
}
export default CompA