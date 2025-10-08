// Script pour générer le CV en PDF
// Utilise Puppeteer pour convertir le HTML en PDF

const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    try {
        console.log('🚀 Génération du CV PDF...');
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Charger le fichier CV HTML
        const cvPath = path.join(__dirname, 'cv.html');
        await page.goto(`file://${cvPath}`, { waitUntil: 'networkidle0' });
        
        // Générer le PDF
        const pdf = await page.pdf({
            path: 'cv_thibaud_masurel.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '15mm',
                bottom: '15mm',
                left: '15mm',
                right: '15mm'
            }
        });
        
        await browser.close();
        
        console.log('✅ CV PDF généré avec succès : cv_thibaud_masurel.pdf');
        
    } catch (error) {
        console.error('❌ Erreur lors de la génération :', error);
    }
}

// Lancer la génération si le script est exécuté directement
if (require.main === module) {
    generatePDF();
}

module.exports = generatePDF;