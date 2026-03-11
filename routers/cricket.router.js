import express from "express";
import cricketController from "../controllers/cricket.controller.js";
import { validateSchema } from "../middleware/validate.schema.js";
import { cricketScoreSchema } from "../schemas/cricket.schema.js";

const cricketRouter = express.Router();

cricketRouter.get("/", cricketController.getAllScores);
cricketRouter.get("/all-players", cricketController.findAllPlayers);
cricketRouter.get("/india-players", cricketController.findIndiaPlayers);
cricketRouter.get("/high-scorers", cricketController.findHighScorers);
cricketRouter.get("/quick-batters", cricketController.findQuickBatters);
cricketRouter.get("/power-hitters", cricketController.findPowerHitters);
cricketRouter.get(
  "/projection-name-runs",
  cricketController.getPlayerNameAndRuns,
);
cricketRouter.get("/aus-eng-players", cricketController.findAusOrEngPlayers);
cricketRouter.get("/top-3-scorers", cricketController.getTop3Scorers);
cricketRouter.get("/most-balls-player", cricketController.getPlayerMostBalls);
cricketRouter.get("/total-runs", cricketController.getTotalRunsAll);
cricketRouter.get("/average-runs", cricketController.getAverageRunsAll);
cricketRouter.get("/total-players", cricketController.getTotalPlayerCount);
cricketRouter.get("/total-runs-by-team", cricketController.getTotalRunsByTeam);
cricketRouter.get(
  "/player-count-by-team",
  cricketController.getPlayerCountByTeam,
);

cricketRouter.get("/:id", cricketController.getScoreById);

cricketRouter.post(
  "/",
  validateSchema(cricketScoreSchema),
  cricketController.createScore,
);

cricketRouter.put(
  "/:id",
  validateSchema(cricketScoreSchema),
  cricketController.updateScoreById,
);

cricketRouter.delete("/:id", cricketController.deleteScoreById);

export default cricketRouter;
