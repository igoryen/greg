const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "public", "data", "cnici");
const manifestPath = path.join(dataDir, "manifest.json");

function generateManifest() {
    const files = fs.readdirSync(dataDir);

    const lessons = files
        .filter((f) => /^data\d+\.json$/.test(f))
        .map((f) => f.replace(".json", ""))
        .sort((a, b) => {
            const numA = parseInt(a.replace("data", ""), 10);
            const numB = parseInt(b.replace("data", ""), 10);
            return numA - numB;
        });

    fs.writeFileSync(manifestPath, JSON.stringify(lessons, null, 2));
    console.log(`✅ manifest.json generated with ${lessons.length} lessons`);
}

generateManifest();
