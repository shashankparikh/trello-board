import React,{useEffect} from 'react'
import {Container} from './style'

 const Builder = (props) => {
    console.log(props,"props")
    const {getCategoryList,listData} = props;

    useEffect(()=>{
        getCategoryList();
    },[])

    useEffect(()=>{
   if(listData){
       console.log(listData,"listData")
   }
    },[listData])

    return (
        <Container>
            builder page
        </Container>
    )
}

export default Builder
