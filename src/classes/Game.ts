import {Person} from "./Person";
import {Team} from "./Team";

export class Game {
  public teamA: Team;
  public teamB: Team;

  constructor(members: Person[]) {
    this.teamA = new Team();
    this.teamB = new Team();
    this.balanceTeams(members);
  }

  public balanceTeams(members: Person[]) {
    members.sort((a, b) => {
      return a.weight - b.weight;
    })
    let odd = false;
    for (const member of members) {
      if (odd) {
        this.teamA.members.push(member);
      } else {
        this.teamB.members.push(member);
      }
      odd = !odd;
    }
    if (this.teamA.members.length !== this.teamB.members.length) {
      if (this.teamA.getAverageWeightCategory() !== this.teamB.getAverageWeightCategory()) {
        this.teamA.members = [];
        this.teamB.members = [];
        for (const member of members) {
          let averageWeightTeamA = this.teamA.getAverageWeightCategory();
          let averageWeightTeamB = this.teamB.getAverageWeightCategory();
          if ((!averageWeightTeamA && !averageWeightTeamB) ||
            (averageWeightTeamA === averageWeightTeamB)) {
            this.teamA.members.push(member);
          } else if (!averageWeightTeamA ||
            (averageWeightTeamA?.id < averageWeightTeamB?.id)) {
            this.teamA.members.push(member);
          } else if (!averageWeightTeamB ||
            (averageWeightTeamB?.id < averageWeightTeamA?.id)) {
            this.teamB.members.push(member);
          }
        }
      }
      if (this.teamA.getAverageWeightCategory() !== this.teamB.getAverageWeightCategory()) {
        if (this.teamA.getAverageSeniority() !== this.teamB.getAverageSeniority()) {
          members.sort((a, b) => {
            return a.getSeniority() - b.getSeniority();
          })
          this.teamA.members = [];
          this.teamB.members = [];
          for (const member of members) {
            let averageSeniorityTeamA = this.teamA.getAverageSeniority();
            let averageSeniorityTeamB = this.teamB.getAverageSeniority();
            if ((!averageSeniorityTeamA && !averageSeniorityTeamB) ||
              (averageSeniorityTeamA === averageSeniorityTeamB)) {
              this.teamA.members.push(member);
            } else if (!averageSeniorityTeamA ||
              (averageSeniorityTeamA < averageSeniorityTeamB)) {
              this.teamA.members.push(member);
            } else if (!averageSeniorityTeamB ||
              (averageSeniorityTeamB < averageSeniorityTeamA)) {
              this.teamB.members.push(member);
            }
          }
        }
      }
    }
  }

}
