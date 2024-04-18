let btn = document.querySelector("button");
let initial = document.querySelector("#result");
initial.innerText = "What do you call a cow with two legs? Lean beef.";

let url = "https://icanhazdadjoke.com/";

btn.addEventListener("click",async ()=>{
    let joke = await getJokes();
    console.log(joke);
    let p = document.querySelector("#result");

    p.innerText = joke;
});

async function getJokes(){
    try{
    
        let config = {headers:{Accept : "application/json"}};
        let res = await axios.get(url,config);
        return res.data.joke;
    }catch(err){
        console.log(err);
        // return err;
    }
}
