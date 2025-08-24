const fs = require("fs");
const path = require("path");

function generateLessonsList() {
    const dataDir = path.join(__dirname, "src/data");
    const outputFile = path.join(__dirname, "src/data/lessonsList.json");

    const lessonsList = {};

    const students = fs.readdirSync(dataDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    students.forEach(student => {
        const studentDir = path.join(dataDir, student);
        const files = fs.readdirSync(studentDir).filter(file => file.endsWith(".json"));

        lessonsList[student] = [];

        files.forEach(file => {
            const filePath = path.join(studentDir, file);
            const rawData = fs.readFileSync(filePath, "utf-8");
            const jsonData = JSON.parse(rawData);

            if (!jsonData.student) {
                console.warn(`⚠️ Skipping ${file} for ${student} (missing "student")`);
                return; // skip if student is missing
            }

            lessonsList[student].push({
                number: jsonData.number,
                date: jsonData.date,
                period: jsonData.period || "lesson" // fallback in case period is missing
            });
        });

        // sort descending by number
        lessonsList[student].sort((a, b) => b.number - a.number);
    });

    fs.writeFileSync(outputFile, JSON.stringify(lessonsList, null, 2), "utf-8");
    console.log(`✅ lessonsList.json has been generated at ${outputFile}`);
}

generateLessonsList();
