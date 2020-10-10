let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = () => {
  for (let key in tacoCatInc) 
    // console.log(key)
    return key  
}



tacoCatInc.sale = (object) => {
    let totalTotal = 0
    for (let subKey in key) 
 
      totalTotal += tacoCatInc.key[subkey].cost * tacoCatInc.key[subkey].quantity
    
    return totalTotal += tacoCatInc.cash
}


  // return price of order
        //  push to inventory
        //  inventory += cash property
