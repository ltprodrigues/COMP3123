/*
Purpose: Act as an API developer and crate a new Promise to either Reolser or reject
*/


async function fetchGames(){
    let promise_games = new Promise((resolve, reject) => {
        let isRegistered = true
        setTimeout(() => {
            if(isRegistered){
                const gamesJSON = {
                    monday: "leafs",
                    tuesday: "raptors"
                }
                //static method that comes fromthe JSON prototype/class
                
                let gamesJSONstr = JSON.stringify(gamesJSON) 
                resolve(gamesJSONstr)
            } else {
                reject("you must be a registere member first!")
            }

        }, 2000)
         
        if(isRegistered){
            const gamesJSON = {
                monday: "leafs",
                tuesday: "raptors"
            }
            //static method that comes fromthe JSON prototype/class
                
            let gamesJSONstr = JSON.stringify(gamesJSON) 
            resolve(gamesJSONstr)
        }
        

    })

    let result_from_promise = await promise_games
    console.log(result_from_promise)


    const gamesJSONparsed = JSON.parse(result_from_promise)
    console.log(gamesJSONparsed)
    console.log(gamesJSONparsed.monday)


}

fetchGames()
let someStrToPrint = "bob"
console.log(someStrToPrint)
