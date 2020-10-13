
// YOUR CODE BELOW
function searchParty(name, world){
    for(let place in world){
      let thingImSearching = world[place];
      if(typeof thingImSearching === 'string'){
        if(thingImSearching === name){
          return [place];
        }
      } else if(Array.isArray(thingImSearching)){
        if(thingImSearching.includes(name)){
          return [place];
        }
      } else if(typeof thingImSearching === 'object'){
        let found = searchParty(name, thingImSearching);
        if(found !== null){
          return [place].concat(found);
        }
      }
    }
    return null;
  }



function searchParty(name, worldObject) {
    let result = [];
    for (let key in worldObject) {
        let value = worldObject[key];
        // Check if the value is our target
        if (value === name) {
            result.push(key);
        } else if (Array.isArray(value)) {
            // If value is an array, iterate through to look
            // for target
            for (let names of value) {
                if (names === name) {
                    result.push(key);
                }
            }
        } else if (typeof value === 'object') {
            // If value is an object, recursively call our method
            // and concat what we found into our array
          result.concat( searchParty(name, value) );
          result.push(key);
          if (result.length > 0) {
              result.push(key);
          }
        }
        if (result.includes(name)) {
            result.push(key);
        }
    }
    if (result.length === 0) {
        return null;
    }
    return result;
}

