import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { NativeFederationTypeScriptRemote } from "@module-federation/native-federation-typescript/vite";

const moduleConfig = {
  name: "remote-app2",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/Button",
    "./Remote2": "./src/pages/Remote2",
  },
  shared: ["react", "react-dom"],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    NativeFederationTypeScriptRemote({
      moduleFederationConfig: moduleConfig,
    }),
    federation(moduleConfig),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3001,
    proxy: {
    "/assets/@mf-types.zip": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: () => `/@fs/${process.cwd()}/dist/@mf-types.zip`,
      },
    },
    fs: {
      allow: ["./dist", "./src"],
    },
  },
  preview: {
    port: 3001,
  },
});
