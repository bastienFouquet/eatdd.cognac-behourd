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

    public balanceTeams(members: Person[]){
        this.teamA.members.push(members[members.length-1]);
        members.pop();
        this.teamB.members.push(members[members.length-1]);
        members.pop();

        while (members.length>=1){

            if(this.teamA.members.length > this.teamB.members.length){
                this.teamB.members.push(members[members.length-1]);

            }else if (this.teamA.members.length < this.teamB.members.length){
                this.teamA.members.push(members[members.length-1]);

            }else if (this.teamA.members.length === this.teamB.members.length){

                if (this.teamA.getAvarageWeightCategory() > this.teamB.getAvarageWeightCategory()){
                    this.teamB.members.push(members[members.length-1]);

                }else if (this.teamA.getAvarageWeightCategory() < this.teamB.getAvarageWeightCategory()){
                    this.teamA.members.push(members[members.length-1]);

                }else if (this.teamA.getAvarageWeightCategory() === this.teamB.getAvarageWeightCategory()){
                    if(this.teamA.getAverageSeniority() > this.teamB.getAverageSeniority()){
                        this.teamB.members.push(members[members.length-1]);
                    }else{
                        this.teamA.members.push(members[members.length-1]);
                    }
                }
            }
            members.pop();
        }
    }

}