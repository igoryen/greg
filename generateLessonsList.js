const fs = require("fs");
const path = require("path");

function generateLessonsList() {
    const dataDir = path.join(__dirname, "src/data");
    const outputFile = path.join(__dirname, "src/data/lessonsList.json");

    const lessonsList = {};

    // ✅ Whitelist
    const whiteList = ["af", "ax", "dc", "gb", "gp", "ih", "ik", "ip", "kz", "rp", "sb", "vh"];

    const students = fs.readdirSync(dataDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    students.forEach(student => {
        const studentDir = path.join(dataDir, student);
        const files = fs.readdirSync(studentDir).filter(file => file.endsWith(".json"));

        lessonsList[student] = [];

        const showMessages = whiteList.includes(student);

        files.forEach(file => {
            const filePath = path.join(studentDir, file);
            const rawData = fs.readFileSync(filePath, "utf-8");
            const jsonData = JSON.parse(rawData);

            if (!jsonData.student) {
                if (showMessages) {
                    console.warn(`⚠️ Skipping ${file} for ${student} (missing "student")`);
                }
                return; // skip if student is missing
            }

            // extract number from filename (last 2 digits before .json)
            const match = file.match(/(\d+)\.json$/);
            const fileNumber = match ? parseInt(match[1], 10) : null;

            lessonsList[student].push({
                number: jsonData.number,      // from inside JSON
                fileNumber,                   // from filename
                date: jsonData.date,
                period: jsonData.period || "lesson"
            });
        });

        // 🔽 sort descending by fileNumber
        lessonsList[student].sort((a, b) => b.fileNumber - a.fileNumber);
    });

    fs.writeFileSync(outputFile, JSON.stringify(lessonsList, null, 2), "utf-8");
    console.log(`✅ lessonsList.json has been generated at ${outputFile}`);
}

generateLessonsList();
