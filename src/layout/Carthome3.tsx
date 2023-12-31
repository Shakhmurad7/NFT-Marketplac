import axios from 'axios'
import style from '../pages/Home/index.module.css'
import {useState , useEffect} from 'react'
const url = `https://book-db-shakhmurad.vercel.app/NFT-post-cart-4`
function Carthome3() {
    const [data , setdata] = useState([])

    useEffect(()=>{
        axios(url).then(({data})=>{
            setdata(data)
        })
    } , [])
  return (
    <div className={style['cart-container-big-3']}>
        {
            data.map(({id , img , text , item})=>(
                <div key={id} className={style['cart-container-3']}>
                    <img src={`./img/${img}.png`} />
                    <h2>{item}</h2>
                    <p>{text}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Carthome3