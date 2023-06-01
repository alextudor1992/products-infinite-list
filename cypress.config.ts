import { defineConfig } from "cypress";

declare var require: any

export default defineConfig({
  video: false,
  videoCompression: 51,
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalInteractiveRunEvents: true,
  },
});