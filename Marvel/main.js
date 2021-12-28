let search_res=document.getElementById("search-res")

async function search1(char_search){
        
    let res=await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${char_search}&apikey=74cb79fb15603b1c533dccf9181c0bf8`) 

    let data =await res.json()
    return data.data.results;  
}
function append_res(res){
    search_res.innerHTML=null;

    res.forEach(({name})=>{
        let p=document.createElement('p')
        p.innerText=name;
        search_res.append(p)
    })
}

async function main(){
    let char_search=document.getElementById("search3").value
    let charter_res=await search1(char_search)
    if(charter_res===undefined){
       return false
    }
    append_res(charter_res)
    
}

var timerId;
function debounce(func,delay){
    
 let  char_search=document.getElementById("search3").value;

    if(char_search.length<2){
        return false
    }
    if (timerId) {
            clearTimeout(timerId);
        }
    timerId= setTimeout(() => {
         func();
     },delay);
 }