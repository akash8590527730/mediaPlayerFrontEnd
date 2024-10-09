import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

export const uploadVideoAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideoes`,video)
}
//getALLVideoApi - called by view compoenent
export const getALLVideoApi = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideoes`,"")
}
// save history api-called by videocard
export const saveHistoryAPI = async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}
// getHistoryaPI -CALL BY HISTORY
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
// removeHistoryApi - called by history
export const removeHistoryApi = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}
// removeVideoApi - called by VideoCard
export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideoes/${id}`,{})
}
// addCategoryApi - called by Category
export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}
export const getAllCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

// removeCategoryAPI - called by category
export const removeCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}
// getSingleVideoAPI - called by category
export const getSingleVideoAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideoes/${id}`,"")

}
// updateCategoryAPI - CALLED by category
export const updateCategoryAPI = async (categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}
// getSingleCategoryAPI - called view
export const getSingleCategoryAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${id}`,"")
}