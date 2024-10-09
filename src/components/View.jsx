import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getALLVideoApi, getSingleCategoryAPI, updateCategoryAPI, uploadVideoAPI } from '../services/allApi'


const View = ({videoUploadResponse,removeVideoResponseFromCategory,setRemoveVideoResponseFromView}) => {
  const[deleteVideoResponse,setDeleteVideoResponse] = useState("")
const [allVideoes,setAllVideoes] = useState([])
useEffect(()=>{
  getAllVideos()
},[videoUploadResponse,deleteVideoResponse,removeVideoResponseFromCategory,setRemoveVideoResponseFromView])

const getAllVideos = async()=>{
  try{
    const response = await getALLVideoApi()
    // console.log(response);
    setAllVideoes(response.data)
  }catch(err){

  }
    
  // console.log(allVideoes);
  
}
const dragOverView = (e)=>{
  e.preventDefault()
}

const categoryVideoDrop = async (e)=>{
  const {categoryId,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(`Video id : ${video.id} from category id : ${categoryId} dropped in View Component`);
  // remove video from category
  // get category details from where we have to remove video
  const {data} = await getSingleCategoryAPI(categoryId)
  // update category after removing video
  const updatedAllvideos = data?.allVideoes?.filter(item=>item.id!=video?.id)
  const updateCategoryDetails = {id:categoryId,categoryName:data.categoryName,allVideoes:updatedAllvideos}
  const response = await updateCategoryAPI(categoryId,updateCategoryDetails)
  // pass response to category
  setRemoveVideoResponseFromView(response)
  // video must be inserted to allVideoes - call uploadvideo api
  await uploadVideoAPI(video)
  getAllVideos()
}
  return (
    <>
    <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDrop(e)}>
  {
    allVideoes.length>0?
    allVideoes?.map(video=>(
      <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
        <VideoCard setDeleteVideoResponse = {setDeleteVideoResponse} displayData={video}/>
      </Col>
    ))
  :
  <div className='text-danger fw-bolder'>No videos are uploaded yet!!</div>
}
    </Row>
    </>
  )
}

export default View