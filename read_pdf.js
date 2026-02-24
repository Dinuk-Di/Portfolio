const fs = require('fs');
const pdf = require('pdf-parse');

async function extractText(filePath) {
    let dataBuffer = fs.readFileSync(filePath);
    try {
        let data = await pdf(dataBuffer);
        return data.text;
    } catch (e) {
        return "Error reading " + filePath + ": " + e;
    }
}

async function main() {
    const mlResume = await extractText('./public/P_D_Dinuk_ML_Resume.pdf');
    const seResume = await extractText('./public/P_D_Dinuk_SE_Resume.pdf');
    fs.writeFileSync('resume_data.txt', "--- ML RESUME ---\n" + mlResume + "\n\n--- SE RESUME ---\n" + seResume);
    console.log("Extracted text saved to resume_data.txt");
}

main();
