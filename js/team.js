
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

