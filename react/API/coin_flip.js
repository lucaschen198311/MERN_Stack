function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }    

function fiveHeadsSync() {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        return `It took ${attempts} tries to flip five "heads"`;
    }
    console.log( fiveHeadsSync() );
    console.log( "This is run after the fiveHeadsSync function completes" );


    function fiveHeadsPromise() {
            return new Promise( (resolve, reject) => {
                // your code here!
                let headscount = 0;
                let attempts = 0;
                while(headscount<5){
                    attempts++;
                    let result = tossCoin();
                    if(result=="heads"){
                        headscount++;
                    }else{
                        headscount = 0;
                    }
                }
                if(attempts<=100){
                    resolve(`It took ${attempts} time to filp 5 heads.`)
                }else{
                    reject("This flip has been exceed over 100 times.")
                }
            });
        }
        fiveHeadsPromise()
            .then( res => console.log(res) )
            .catch( err => console.log(err) );
        console.log( "When does this run now?" );
        
    