export const state = () => ({
    data: [],
    id :0
})
export const mutations ={
    storeUsers:(state:{id:number},data:number)=>{
        state.id = data
    }
}
  