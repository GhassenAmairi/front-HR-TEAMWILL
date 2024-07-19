export const state = () => ({
    data: [],
    id :0
})
export const mutations ={
    storeJobs:(state:{id:number},data:number)=>{
        state.id = data
    }
}
  