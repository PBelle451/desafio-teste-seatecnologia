import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://www.seatecnologia.com.br',
        viewportWidth: 1366,
        viewportHeight: 768,
        video: true,
        screenshotOnRunFailure: true,
        retries: {
            runMode: 1,
            openMode: 0,
        },
        setupNodeEvents(on, config) {
            on('after:spec', (spec, results) => {
                if (results && results.video) {
                    const failures = results.tests.some(t => t.state === 'failed');
                    if (!failures) {
                        require('fs').unlinkSync(results.video);
                    }
                }
            });
            return config;
        },
    },
    reporter: 'spec',
    reporterOptions: {
        mochaFile: 'relatorio/cypress-[hash].xml',
        overwrite: false,
        html: false,
        json: true,
    },
});