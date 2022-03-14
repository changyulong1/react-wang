let id = JSON.parse(window.localStorage.getItem('_Id')||"0")
const TagId = ()=>{
    id++
    window.localStorage.setItem('_Id',id)
    return id
}
export {TagId}