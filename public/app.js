(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

let Player = require('./player');
let Team = require('./team');
let Won = require('./won');

window.addEventListener('load', function () {

let chaserNames = ['Bob', 'Tom', 'Jim'];
let runnerNames = ['Wang', 'Thomas', 'Earl'];

let chasers = new Team('chasers');
let runners = new Team('runners');

let c = chasers.roster;
let r = runners.roster;

for (let i = 0; i < chaserNames.length; i++) {
    chasers.add(new Player(chaserNames[i]));
}

for (let i = 0; i < runnerNames.length; i++) {
    runners.add(new Player(runnerNames[i]));
}

console.log(c[0].tag(r[0]));
console.log(chasers.beat(runners));
console.log(runners.beat(chasers));
console.log(c[1].tag(r[1]));
console.log(r[0].getFlag());
console.log(c[0].getFlag());
//console.log(r[2].getFlag());
//console.log(runners.beat(chasers));
console.log(r[2].tag(r[1]));
console.log(r[2].tag(c[2]));
console.log(c[2].tag(c[1]));
console.log(c[2].tag(r[1]));
console.log(c[2].tag(r[1]));
console.log(c[1].tag(r[2]));
console.log(chasers.beat(runners));
});







// let playerList = [
//     new Player('Bob'),
//     new Player('Tom'),
//     new Player('Jim'),
//     new Player('Wang'),
//     new Player('Thomas'),
//     new Player('Earl'),
// ]
// let c0 = playerList[0];
// let c1 = playerList[1];
// let c2 = playerList[2];
// let r1 = playerList[3];
// let r2 = playerList[4];
// let r3 = playerList[5];

//     let team = new Team;
//     team.addChasers(playerList[0]);
//     team.addChasers(playerList[1]);
//     team.addChasers(playerList[2]);
//     team.addRunners(playerList[3]);
//     team.addRunners(playerList[4]);
//     team.addRunners(playerList[5]);
//     team.announce();

// console.log(c1.tag(r1));
// console.log('runner not frozen ' + r3.tag(r2));
// console.log(r1);
// console.log(c1.tag(r2));
// console.log(r2);
// console.log(r2.tag(r1));
// console.log('should unfreeze ' + r3.tag(r2))
// console.log('line 38 ' + r3.tag(r1));
// console.log('chaser tagged by runner ' + r1.tag(c2));
// console.log('chaser tags a chaser ' + c1.tag(c2))
// console.log(c2.tag(r1));
// console.log('get flag function ' + r1.getFlag());
// console.log('chaser getting flag ' + c1.getFlag());
// console.log(c1.tag(r1))
// console.log(r2.getFlag());
// console.log(Won(playerList));
// function tag(player) {
//     if(chasers.Player)
// }


},{"./player":2,"./team":3,"./won":4}],2:[function(require,module,exports){

module.exports = function Player(person) {
    this.name = person;
    this.isFrozen = false;
    this.flag = false;
    this.team = null;

    // tagging function
    this.tag = function (runner) {
        // a runner is frozen if tagged by a chaser or if runner accidently tags a chaser
        if (this.team === 'chasers' && runner.isFrozen === true) {
            return runner.name + ' is already frozen';
        } else {
            if (this.team === 'chasers' && runner.team === 'runners' || this.team === 'runners' && runner.team === 'chasers') {
                runner.isFrozen = true;
                return runner.name + ' was frozen by ' + this.name;
            } else {
                // this statement lets a runner unfreeze another runner
                if (this.team === 'runners' && this.isFrozen === false && runner.team === 'runners' && runner.isFrozen === true) {
                    runner.isFrozen = false;
                    return runner.name + ' was unfrozen by ' + this.name;
                } else {
                    // this statement logs if the tagger tries to unfreeze a runner that is not frozen
                    if (this.team === 'runners' && this.isFrozen === false && runner.team === 'runners' && runner.isFrozen === false) {
                        return runner.name + ' is not frozen';
                    } else {
                        if (this.team === 'chasers' && runner.isFrozen === true) {
                            return runner.name + ' is already frozen';
                        } else {
                            // this statement console.logs if runner is frozen and tries to unfreeze another frozen runner
                            if (this.team === 'runners' && this.isFrozen === true) {
                                runner.isFrozen;
                                return this.name + ' can\'t unfreeze ' + runner.name + ' because ' + this.name + ' is currently frozen ';
                                //  this statement runs if a chaser tags a chaser
                            } else {
                                runner.isFrozen;
                                return 'nothing happened';
                            }
                        }
                    }
                }
            }
        }
    };

    // get the flag function
    this.getFlag = function () {
        if (this.team === 'runners' && this.isFrozen === false) {
            this.flag = true;
            return this.name + ' has the flag ';
        } else {
            if (this.isFrozen === true) {
                return this.name + ' can\'t capture the flag because ' + this.name + ' hasn\'t thawed out yet';
            } else {
                if (this.team === 'chasers') {
                    return this.team + ' can\'t capture the flag ';
                }
            }
        }
    };

}


},{}],3:[function(require,module,exports){

// module.exports = function Team(name) {
//     this.name = name;
//     this.roster = [];

//     this.add = function (recruit) {
//         this.roster.push(recruit);
//         recruit.team = this.name;
//     };

//     this.beat = function (enemy) {
//         if(this.name === 'chasers') {
//             for (let i = 0; i < enemy.roster.length; i++) {
//                 if(enemy.roster[i].isFrozen === false) {
//                     return 'chasers did not win';
//                 }
//             }
//             return 'chasers won';
//         }

//         if(this.name === 'runners') {
//             for (let i = 0; i < this.roster.length; i++) {
//                 if(this.roster[i].flag === true) {
//                     return 'runners won';
//                 }
//             }
//             return 'runners did not win';
//         }
//     }
//     return this;
// };


function Team (runnerTeam, chaserTeam) {
    this.runnerTeam = runnerTeam;
    this.chaserTeam =chaserTeam;

return this;
}


},{}],4:[function(require,module,exports){
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
},{}]},{},[1]);
