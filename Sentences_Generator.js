// Randomizer function
function randomizer(num){return Math.floor(Math.random()*num)};

// Object 
const obj = {action:["Accept advice","Do the washing up","Don't be frightened of cliches","Sing", "Use an old idea", "Just carry on", "Decorate, decorate","Do nothing","Emphasize the flaws","Do something boring","Balance the consistency principle with the inconsistency principle","Get your neck massaged","Wait","Listen in total darkness, or in a very large room, very quietly","Take a break","Change nothing and continue with immaculate consistency","Cut a vital connection","Disconnect from desire","Emphasize the flaws","Imagine the music as a set of disconnected events","Run","Study a new language", "Bake a cake"],
when:['right now', 'in summer', 'immediately', 'when you travel','sometimes','every time', 'rarely', 'once a year'],
where:['abroad', 'at the zoo', 'everywhere','in the supermarket', 'at your office','in your house', 'at school', 'in bed', 'on top of the mountains'],
why:['because it is necessary','because you like it', 'because your parents will be proud of you','because you deserve it', 'because you should']}

let resultArray =[];
for (let item in obj){
    let PickUpACard = randomizer(obj[item].length)
    if (item ==='action'){
        resultArray.push(obj[item][PickUpACard])
    } 
    if(item==='when'){
        resultArray.push(obj[item][PickUpACard])
    }
    if(item==='where'){
        resultArray.push(obj[item][PickUpACard])
    }
    if(item==='why'){
        resultArray.push(obj[item][PickUpACard])
    }

};

function formatResult(resultArray) {
    const result = resultArray.join(' ')
    console.log(result)
  }
  
  formatResult(resultArray);


