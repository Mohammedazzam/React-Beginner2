// import React , {useState} from 'react'

// function TestCompHooks(x ,y) {
//     const [product , setProduct] =  useState('laptop')

//     // const changValue = () => {
//     //     setProduct('Mouse')
//     // }

//     return (
//         <div>
//         <button onClick={() =>setProduct('Mouse')
// }>ChangeValue</button>
//             {product}
//         </div>
//     )
// }
// export default TestCompHooks



import React, { useState , useEffect } from 'react'

function TestCompHooks(x, y) {
    const [product, setProduct] = useState([
        { id: 1, name: 'laptop' },
        { id: 3, name: 'laptop2' }
    ]);

    const [name, setName] = useState('test')

    const [vl, setVl] = useState('');
    const addOneItem = () => {
        setProduct([...product, { id: 3, name: 'laptop3' }])
    }
    
    useEffect(() => {
        console.log("this is useEffect")
    }, [name, vl])
    return (
        <div>
            <input type="text" onChange={(e) => setVl(e.target.value)} />
                {vl}
            <button onClick={addOneItem}>Add Item</button>
            {product.map(product => <span key={product.id}>{product.name}</span>)}
        </div>
    )
}
export default TestCompHooks