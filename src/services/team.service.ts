import {TeamModel} from "../models/team.model";
import {Team} from "../interfaces/team.interface";

const getAllTeams = async() => {
    return await TeamModel.readTeams();
};

const getTeamByName = async(name: string) => {
    const teams: Team[] = await TeamModel.readTeams()
    return teams.find((element) => element.name === name);
};

const createTeam = async(name: string, city: string, owner: string, password: string) => {
    const team = await getTeamByName(name);
    if(team) {
        throw new Error("Team already exists! \n");
    }

    const newTeam: Team = {
        name: name,
        city: city,
        owner: owner,
        password: password,
    };
    const teams = await TeamModel.readTeams();
    teams.push(newTeam);
    return await TeamModel.writeTeams(teams);
};

export const teamService = {
    getAllTeams,
    getTeamByName,
    createTeam,
}