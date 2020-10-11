// YOUR CODE BELOW
function getDogBreeder(name1, age1) {
    return function dogBreeder(name2 = name1, age2 = age1) {

       
        
        if (typeof name1 === 'number' || typeof name2 === 'number') {
            return {
            
            name: name1,
            age: name2
        }
        } else {
            return {
                name: name2,
                age: age2
            }
        }
        
    }
}

let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

puppyFarm('Olaf', 3); // => {name: 'Olaf', age: 3};
puppyFarm(2); // => {name: 'Snoopy', age: 2}

rescueShelter(); // => {'Odie', 3}

