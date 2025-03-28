import { defineConfig, devices } from '@playwright/test'
import type { SerenityOptions } from '@serenity-js/playwright-test'

export default defineConfig<SerenityOptions>({
    reporter: [
        [ '@serenity-js/playwright-test', {
            crew: [
                '@serenity-js/console-reporter',
                [ '@serenity-js/serenity-bdd', {
                  specDirectory: './spec'
                } ],
                [ '@serenity-js/core:ArtifactArchiver', {
                  outputDirectory: './target/site/serenity'
                } ],
            ]
        }],

        // Any other native Playwright Test reporters
        [ 'html', { open: 'never' } ],
    ],

    // Global configuration for all test scenarios
    use: {
        screenshot : 'on',
    video: 'on',
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
        launchOptions: {
      // 1
      args: ["--window-size=4930,4080"],
    },
        crew: [
            // Automatically take screenshots upon an assertion failure
            ['@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' }]
        ],
        defaultActorName: 'Alice',
    },

    projects: [
        // Per-project configuration, overrides the global defaults.
        {
            name: 'audit-trail',
            testMatch: [
                '**/audit-trail/**/*.spec.ts',
            ],
            use: {
                ...devices['Desktop Chrome'],
                crew: [
                    // Automatically take screenshots of every actor interaction
                    ['@serenity-js/web:Photographer', { strategy: 'TakePhotosOfInteractions' }]
                ],
            },
        },
        // Other projects

    // Other Playwright Test configuration options
    ]
});