
const name = "Ton Napat Kaewchan"
import {sayHi} from "./function"
//const sayHi = who => `Hello, ${who}!`
console.log(sayHi(name)) // add this line

import axios from 'axios'
const batmanUrl = 'http://www.omdbapi.com/?t=Batman&y=&plot=short&r=json'
const promise =  axios.get(batmanUrl)
promise.then(function(response){
console.log('GET Title:' ,response.data.Title);

  })
