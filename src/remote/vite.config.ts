import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import {
  NativeFederationTypeScriptHost,
  NativeFederationTypeScriptRemote,
} from "@module-federation/native-federation-typescript/vite";

const moduleConfig = {
  name: "remote-app",
  filename: "remoteEntry.js",
  remotes: {
    hostApp: "http://localhost:3002/assets/remoteEntry.js",
  },
  exposes: {
    "./Button": "./src/Button",
    "./Remote": "./src/pages/Remote",
  },
  shared: ["react", "react-dom"],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    NativeFederationTypeScriptHost({
      moduleFederationConfig: moduleConfig,
    }),
    NativeFederationTypeScriptRemote({
      moduleFederationConfig: moduleConfig,
    }),
    federation(moduleConfig),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3000,
    proxy: {
      "/assets/@mf-types.zip": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: () => `/@fs/${process.cwd()}/dist/@mf-types.zip`,
      },
    },
    fs: {
      allow: ["./dist", "./src"],
    },
  },
  preview: {
    port: 3000,
  },
});
