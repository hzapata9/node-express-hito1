import { Router } from "express";
import { teamController } from "../controllers/team.controller";

const router: Router = Router();

router.get("/", teamController.getTeams);

router.post("/create", teamController.createTeam);


export default router;