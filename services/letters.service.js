import Handlebars from "handlebars";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

// create my html template

// convert the template to PDF -> html to PDF

// PDF has to be uploaded to your cloudinary Bucket

const createTemplate = async (payload) => {
  const filePath = path.join(process.cwd(), "templates", "letter.html");

  const source = fs.readFileSync(filePath, "utf-8");
  const template = Handlebars.compile(source);

  const result = template(payload);
  return result;
};

const htmlToPDF = async (htmlFile) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();



};

const uploadPDF = () => {};

export default {
  createTemplate,
  htmlToPDF,
  uploadPDF,
};
