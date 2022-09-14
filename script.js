// Array Intro

// const planets = [
//   "Mars", 
//   "Earth", 
//   "Venus"
// ]

// console.log(planets[2])


// Add elements

// const planets = [
//   "Mars", 
//   "Earth", 
//   "Venus"
// ]

// // we can add more than one item to an array

// planets.push('test', 'test2')

// // Add instruments to the beggining of an array

// planets.unshift('test', 'test2')

// Remove items from an array

// planets.pop() //Last

// planets.shift() First


// get first or last item from an array

// let lastItem = planets.push();

// document.write(lastItem)


//Spread operator


const middle = ['one', 'two', 'three']
const burger = ['toyota', ...middle, 'mercedes']


const brass = ['test', 'test2', 'test3', 'test4']
const woodwind = ['heck1', 'heck2', 'heck3', 'heck4']

const instr = [...brass, ...woodwind]

instr.push('Spiderman')
