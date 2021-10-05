import {Person} from "./Person";

export class Team{
    public members: Person[];

    constructor() {
        this.members = [];
    }

    public getAverageWeight(): number {
        let totalWeight = 0;

        this.members.map((member) => {
            totalWeight += member.weight;
        })
        return totalWeight/this.members.length;
    }

    public getAverageSeniority(): number {
        let totalSeniority = 0;
        this.members.map((member) => {
            const seniority = member.yearRegistration;
            totalSeniority += seniority;
        })
        return totalSeniority/this.members.length;
    }

    public getAvarageWeightCategory(): number {
        if(this.getAverageWeight()<52)
            return 1;

        if( 52 < this.getAverageWeight() && this.getAverageWeight() < 57 )
            return 2;

        if( 57 < this.getAverageWeight() && this.getAverageWeight() < 63 )
            return 3;

        if( 63 < this.getAverageWeight() && this.getAverageWeight() < 69 )
            return 4;

        if( 69 < this.getAverageWeight() && this.getAverageWeight() < 75 )
            return 5;

        if( 75 < this.getAverageWeight() && this.getAverageWeight() < 81 )
            return 6;

        if( 81 < this.getAverageWeight() && this.getAverageWeight() < 91 )
            return 7;

        return 8;
    }

}