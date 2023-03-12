
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){

      cats.push(name);
}


function destructivelyPrependCat(name){

       cats.unshift(name);

}

function destructivelyRemoveLastCat(){



}

function destructivelyRemoveLastCat(){
 
    cats.pop(); // Removes the last element from the array
    return cats; // Returns the modified array


}

function destructivelyRemoveFirstCat(){
  // Remove the first cat from the array using Array.shift() method
    const firstCat = cats.shift();

    return firstCat;
     // Return the removed cat
}


function appendCat(name) {
    let newCats = cats.concat(name); // creates a new array by appending the name to the cats array
    return newCats;
  }


  function prependCat(name) {
    let newCats = [name].concat(cats); // creates a new array by prepending the name to the cats array
    return newCats;
  }
  
  function removeLastCat() {
    let newCats = cats.slice(0, -1); // creates a new array by removing the last element from the cats array
    return newCats;
  }

  function removeFirstCat(cats) {

    // create a new array with all elements except the first one
    const newCats = cats.slice(1);

    // return the new array without modifying the original cats array
    return newCats;

  }
  
  function removeFirstCat() {
    let newCats = cats.slice(1); // creates a new array by removing the first element from the cats array
    return newCats;
  }