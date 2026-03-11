import cricketServices from "../services/cricket.service.js";
import { StatusCodes } from "http-status-codes";

const getAllScores = async (request, response) => {
  try {
    const data = await cricketServices.getAllScores();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getScoreById = async (request, response) => {
  const { id } = request.params;
  try {
    const score = await cricketServices.getScoreById(id);
    if (!score) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Score not found" });
    }
    response.status(StatusCodes.OK).json(score);
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const createScore = async (request, response) => {
  try {
    const payload = request.body;
    const insertStatus = await cricketServices.createScore(payload);
    if (insertStatus.acknowledged === false) {
      return response.status(StatusCodes.BAD_REQUEST).json({
        message: "Failed to Create score",
      });
    } else {
      return response.status(StatusCodes.CREATED).json({
        message: "Score created successfully",
        id: insertStatus.insertedId,
      });
    }
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const updateScoreById = async (request, response) => {
  try {
    const data = request.body;
    const { id } = request.params;

    const status = await cricketServices.updateScore(id, data);

    if (status == false) {
      return response.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to update the id - ${id} (not found or no changes)`,
      });
    } else {
      return response.status(StatusCodes.OK).json({
        message: `Updated Successfully - ${id}`,
      });
    }
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteScoreById = async (request, response) => {
  try {
    const { id } = request.params;
    const status = await cricketServices.deleteScore(id);

    if (status == false) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `Invalid Id - ${id} is not found` });
    } else {
      return response
        .status(StatusCodes.OK)
        .json({ message: `Id - ${id} got deleted successfully` });
    }
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const findAllPlayers = async (request, response) => {
  try {
    const data = await cricketServices.findAllPlayers();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const findIndiaPlayers = async (request, response) => {
  try {
    const data = await cricketServices.findIndiaPlayers();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const findHighScorers = async (request, response) => {
  try {
    const data = await cricketServices.findHighScorers();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const findQuickBatters = async (request, response) => {
  try {
    const data = await cricketServices.findQuickBatters();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const findPowerHitters = async (request, response) => {
  try {
    const data = await cricketServices.findPowerHitters();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getPlayerNameAndRuns = async (request, response) => {
  try {
    const data = await cricketServices.getPlayerNameAndRuns();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const findAusOrEngPlayers = async (request, response) => {
  try {
    const data = await cricketServices.findAusOrEngPlayers();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getTop3Scorers = async (request, response) => {
  try {
    const data = await cricketServices.getTop3Scorers();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getPlayerMostBalls = async (request, response) => {
  try {
    const data = await cricketServices.getPlayerMostBalls();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getTotalRunsAll = async (request, response) => {
  try {
    const data = await cricketServices.getTotalRunsAll();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getAverageRunsAll = async (request, response) => {
  try {
    const data = await cricketServices.getAverageRunsAll();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getTotalPlayerCount = async (request, response) => {
  try {
    const data = await cricketServices.getTotalPlayerCount();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getTotalRunsByTeam = async (request, response) => {
  try {
    const data = await cricketServices.getTotalRunsByTeam();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getPlayerCountByTeam = async (request, response) => {
  try {
    const data = await cricketServices.getPlayerCountByTeam();
    return response.status(StatusCodes.OK).json(data);
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const cricketController = {
  getAllScores,
  getScoreById,
  createScore,
  updateScoreById,
  deleteScoreById,
  findAllPlayers,
  findIndiaPlayers,
  findHighScorers,
  findQuickBatters,
  findPowerHitters,
  getPlayerNameAndRuns,
  findAusOrEngPlayers,
  getTop3Scorers,
  getPlayerMostBalls,
  getTotalRunsAll,
  getAverageRunsAll,
  getTotalPlayerCount,
  getTotalRunsByTeam,
  getPlayerCountByTeam,
};

export default cricketController;
