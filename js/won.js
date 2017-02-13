 module.exports = function won (teams) {

     for(let i = 0; i < teams.length; i++) {
         let frozen = teams[i].isFrozen;
         
         // need to look at these lines, currently registers false
         let runners = teams[i].flag;
         let chasers = teams[i].flag;
         console.log(teams[i].flag);
      if (teams[i].team === 'runners' && frozen !== false || teams[i].team === 'chasers' && chasers === true) {
         return 'chasers won'; 
     } else {
         if (teams[i].team === 'runners' && runners === true) {
             return 'runners won';
         } else {
             return 'no one has won yet';
         }
     }
     }
 }










// won(teams) {
//     let chasers = [];
//     let frozenRunners = [];
//     let flagRunners = [];

//     for (let i = 0; i < teams.length; i++) {
//         if (teams[i].team === 'chasers') {
//             chasers.push(teams[i].isFrozen);
//         } else {
//             if (teams[i].team === 'runners') {
//                 frozenRunners.push(teams[i].isFrozen);
//                 flagRunners.push(teams[i].flag);
//             }
//         }
//     }

// }