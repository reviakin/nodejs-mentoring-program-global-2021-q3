import { resolve } from "path";
import { createReadStream, createWriteStream } from "fs";
import csvtojson from "csvtojson";

const bookCSVFilePath = resolve(process.cwd(), "src/task2/csv/book.csv");
const bookTXTFilePath = resolve(process.cwd(), "src/task2/txt/book.txt");

const readStream = createReadStream(bookCSVFilePath);
readStream.on("error", console.error);

const writeStream = createWriteStream(bookTXTFilePath);
writeStream.on("error", console.error);

readStream.pipe(csvtojson()).pipe(writeStream);
