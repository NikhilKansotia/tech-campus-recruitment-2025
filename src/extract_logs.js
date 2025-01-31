const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function extractLogs(logFile, targetDate, outputDir = 'output') {
    if (!fs.existsSync(logFile)) {
        console.error(`Error: Log file '${logFile}' not found.`);
        return;
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFile = path.join(outputDir, `output_${targetDate}.txt`);
    const readStream = fs.createReadStream(logFile, 'utf-8');
    const writeStream = fs.createWriteStream(outputFile, 'utf-8');

    const rl = readline.createInterface({ input: readStream, crlfDelay: Infinity });

    for await (const line of rl) {
        if (line.startsWith(targetDate)) {
            writeStream.write(line + '\n');
        }
    }

    writeStream.end();
    console.log(`Logs for ${targetDate} saved in ${outputFile}`);
}

console.log(process.argv);
if (process.argv.length !== 4) {
    console.log("Usage: node extractLogs.js <log_file_path> <YYYY-MM-DD>");
    process.exit(1);
}

const logFilePath = process.argv[2];
const dateToExtract = process.argv[3];
console.log(logFilePath,dateToExtract);
extractLogs(logFilePath, dateToExtract);