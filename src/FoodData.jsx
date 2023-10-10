import React,{useEffect,useState} from 'react'
import {fetchingData} from './FoodSlice'
import {useDispatch,useSelector} from 'react-redux'
import First from './First'

const FoodData = () => {
    // const [data,setData]=useState([])
    const {foodData,loading,error}=useSelector((state)=>state.food)
  
  
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchingData())
    },[])
  if(foodData===null||foodData===undefined) return null
   console.log(foodData)
  return (
    <div className='container'>
        
        {loading?"pls wait data is loading":""}
        {foodData.length>0?
         foodData.map((ele)=> <First name={ele.name} url={ele.url}/>)
         :
         <div className='error'>{error}
          </div>
          }
    </div>
  )
}

export default FoodData