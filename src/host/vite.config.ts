import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation, {
  VitePluginFederationOptions,
} from "@originjs/vite-plugin-federation";
import { NativeFederationTypeScriptHost } from "@module-federation/native-federation-typescript/vite";
import { NativeFederationTypeScriptRemote } from "@module-federation/native-federation-typescript/vite";

const moduleConfig: VitePluginFederationOptions = {
  name: "host",
  remotes: {
    remoteApp: "http://localhost:3000/assets/remoteEntry.js",
    remoteApp2: "http://localhost:3001/assets/remoteEntry.js",
  },
  exposes: {
    "./Store": "./src/store/Store",
  },
  shared: ["react", "react-dom"],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation(moduleConfig),
    NativeFederationTypeScriptHost({
      moduleFederationConfig: moduleConfig,
    }),
    NativeFederationTypeScriptRemote({
      moduleFederationConfig: moduleConfig,
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3002,
    proxy: {
      "/assets/@mf-types.zip": {
        target: "http://localhost:3002",
        changeOrigin: true,
        rewrite: () => `/@fs/${process.cwd()}/dist/@mf-types.zip`,
      },
    },
    fs: {
      allow: ["./dist", "./src"],
    },
  },
  preview: {
    port: 3002,
  },
});
