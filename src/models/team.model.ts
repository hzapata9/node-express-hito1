import {readFile, writeFile} from "node:fs/promises";
import path from "node:path";
import {Team} from "../interfaces/team.interface";


const __dirname = import.meta.dirname;
const pathFile = path.resolve(__dirname, "../../data/teams.json");

const readTeams = async() => {
    const teamsJSON = await readFile(pathFile, "utf-8");
    return JSON.parse(teamsJSON);
};

const writeTeams = async(teams: Team[]) => {
    const teamsJSON = JSON.stringify(teams, null, 2);
    return await writeFile(pathFile, teamsJSON);
};


export const TeamModel = {
    readTeams,
    writeTeams,
};