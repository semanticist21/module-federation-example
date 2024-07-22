import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation, {
  VitePluginFederationOptions,
} from "@originjs/vite-plugin-federation";
import { NativeFederationTypeScriptHost } from "@module-federation/native-federation-typescript/vite";

const moduleConfig: VitePluginFederationOptions = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    remoteApp: "http://localhost:3000/assets/remoteEntry.js",
    remoteApp2: "http://localhost:3002/assets/remoteEntry.js",
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
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});
