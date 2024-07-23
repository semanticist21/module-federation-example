import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { NativeFederationTypeScriptRemote } from "@module-federation/native-federation-typescript/vite";

const moduleConfig = {
  name: "remote-app",
  filename: "remoteEntry.js",
  exposes: {
    "./store1": "./src/store/store1",
    "./Button": "./src/Button",
  },
  shared: ["react", "react-dom", "zustand"],
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
