import lettersService from "../services/letters.service.js";
import { Readable } from "stream";

const createLetter = async (request, response) => {
  // read my payload from request body

  const payload = request.body;
  /**
   * fromName
   * toName
   * leaveDate
   * letterDate
   * description
   * subject
   */
  const result = await lettersService.createTemplate(payload);

  const pdfResult = await lettersService.htmltoPdf(result);

  const myLetter = Readable.from([result]);

  response.setHeader("Content-type", "text/html");

  myLetter.pipe(response);
};

const lettersController = {
  createLetter,
};

export default lettersController;
