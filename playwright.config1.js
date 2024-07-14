// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: 1,
  workers: 1,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  projects: [
    {
      name: "safari",
      use: {
        browserName: "webkit",
        headless: true,
        screenshot: "on",
        trace: "on",
        ...devices["iPhone 11"],
      },
    },
    {
      name: "chrome",
      use: {
        browserName: "chromium",
        headless: false,
        screenshot: "on",
        video: "retain-on-failure",
        trace: "on",
        ignoreHTTPSErrors: true,
        permissions: ["geolocation"],
        viewport: { width: 720, height: 720 },
      },
    },
  ],
});
