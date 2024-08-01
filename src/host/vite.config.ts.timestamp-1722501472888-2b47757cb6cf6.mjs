// vite.config.ts
import { defineConfig } from "file:///Users/semanticist/Documents/code/module-federation-old/module-federation-example3/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.11/node_modules/vite/dist/node/index.js";
import react from "file:///Users/semanticist/Documents/code/module-federation-old/module-federation-example3/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.3.4_@types+node@20.14.11_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///Users/semanticist/Documents/code/module-federation-old/module-federation-example3/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import { NativeFederationTypeScriptHost } from "file:///Users/semanticist/Documents/code/module-federation-old/module-federation-example3/node_modules/.pnpm/@module-federation+native-federation-typescript@0.6.0_typescript@5.5.3/node_modules/@module-federation/native-federation-typescript/dist/vite.mjs";
import { NativeFederationTypeScriptRemote } from "file:///Users/semanticist/Documents/code/module-federation-old/module-federation-example3/node_modules/.pnpm/@module-federation+native-federation-typescript@0.6.0_typescript@5.5.3/node_modules/@module-federation/native-federation-typescript/dist/vite.mjs";
var moduleConfig = {
  name: "host",
  remotes: {
    remoteApp: "http://localhost:3000/assets/remoteEntry.js",
    remoteApp2: "http://localhost:3001/assets/remoteEntry.js"
  },
  exposes: {
    "./Store": "./src/store/Store",
    "./Query": "./src/query/query"
  },
  shared: ["react", "react-dom"]
};
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation(moduleConfig),
    NativeFederationTypeScriptHost({
      moduleFederationConfig: moduleConfig
    }),
    NativeFederationTypeScriptRemote({
      moduleFederationConfig: moduleConfig
    })
  ],
  build: {
    target: "esnext"
  },
  server: {
    port: 3002,
    proxy: {
      "/assets/@mf-types.zip": {
        target: "http://localhost:3002",
        changeOrigin: true,
        rewrite: () => `/@fs/${process.cwd()}/dist/@mf-types.zip`
      }
    },
    fs: {
      allow: ["./dist", "./src"]
    }
  },
  preview: {
    port: 3002
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2VtYW50aWNpc3QvRG9jdW1lbnRzL2NvZGUvbW9kdWxlLWZlZGVyYXRpb24tb2xkL21vZHVsZS1mZWRlcmF0aW9uLWV4YW1wbGUzL3NyYy9ob3N0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2VtYW50aWNpc3QvRG9jdW1lbnRzL2NvZGUvbW9kdWxlLWZlZGVyYXRpb24tb2xkL21vZHVsZS1mZWRlcmF0aW9uLWV4YW1wbGUzL3NyYy9ob3N0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zZW1hbnRpY2lzdC9Eb2N1bWVudHMvY29kZS9tb2R1bGUtZmVkZXJhdGlvbi1vbGQvbW9kdWxlLWZlZGVyYXRpb24tZXhhbXBsZTMvc3JjL2hvc3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGZlZGVyYXRpb24sIHtcbiAgVml0ZVBsdWdpbkZlZGVyYXRpb25PcHRpb25zLFxufSBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcbmltcG9ydCB7IE5hdGl2ZUZlZGVyYXRpb25UeXBlU2NyaXB0SG9zdCB9IGZyb20gXCJAbW9kdWxlLWZlZGVyYXRpb24vbmF0aXZlLWZlZGVyYXRpb24tdHlwZXNjcmlwdC92aXRlXCI7XG5pbXBvcnQgeyBOYXRpdmVGZWRlcmF0aW9uVHlwZVNjcmlwdFJlbW90ZSB9IGZyb20gXCJAbW9kdWxlLWZlZGVyYXRpb24vbmF0aXZlLWZlZGVyYXRpb24tdHlwZXNjcmlwdC92aXRlXCI7XG5cbmNvbnN0IG1vZHVsZUNvbmZpZzogVml0ZVBsdWdpbkZlZGVyYXRpb25PcHRpb25zID0ge1xuICBuYW1lOiBcImhvc3RcIixcbiAgcmVtb3Rlczoge1xuICAgIHJlbW90ZUFwcDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXNzZXRzL3JlbW90ZUVudHJ5LmpzXCIsXG4gICAgcmVtb3RlQXBwMjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXNzZXRzL3JlbW90ZUVudHJ5LmpzXCIsXG4gIH0sXG4gIGV4cG9zZXM6IHtcbiAgICBcIi4vU3RvcmVcIjogXCIuL3NyYy9zdG9yZS9TdG9yZVwiLFxuICAgIFwiLi9RdWVyeVwiOiBcIi4vc3JjL3F1ZXJ5L3F1ZXJ5XCIsXG4gIH0sXG4gIHNoYXJlZDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG59O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZmVkZXJhdGlvbihtb2R1bGVDb25maWcpLFxuICAgIE5hdGl2ZUZlZGVyYXRpb25UeXBlU2NyaXB0SG9zdCh7XG4gICAgICBtb2R1bGVGZWRlcmF0aW9uQ29uZmlnOiBtb2R1bGVDb25maWcsXG4gICAgfSksXG4gICAgTmF0aXZlRmVkZXJhdGlvblR5cGVTY3JpcHRSZW1vdGUoe1xuICAgICAgbW9kdWxlRmVkZXJhdGlvbkNvbmZpZzogbW9kdWxlQ29uZmlnLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMixcbiAgICBwcm94eToge1xuICAgICAgXCIvYXNzZXRzL0BtZi10eXBlcy56aXBcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAyXCIsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKCkgPT4gYC9AZnMvJHtwcm9jZXNzLmN3ZCgpfS9kaXN0L0BtZi10eXBlcy56aXBgLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZzOiB7XG4gICAgICBhbGxvdzogW1wiLi9kaXN0XCIsIFwiLi9zcmNcIl0sXG4gICAgfSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDMwMDIsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbWMsU0FBUyxvQkFBb0I7QUFDaGUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sZ0JBRUE7QUFDUCxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLHdDQUF3QztBQUVqRCxJQUFNLGVBQTRDO0FBQUEsRUFDaEQsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQy9CO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sV0FBVyxZQUFZO0FBQUEsSUFDdkIsK0JBQStCO0FBQUEsTUFDN0Isd0JBQXdCO0FBQUEsSUFDMUIsQ0FBQztBQUFBLElBQ0QsaUNBQWlDO0FBQUEsTUFDL0Isd0JBQXdCO0FBQUEsSUFDMUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCx5QkFBeUI7QUFBQSxRQUN2QixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLE1BQU0sUUFBUSxRQUFRLElBQUksQ0FBQztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSTtBQUFBLE1BQ0YsT0FBTyxDQUFDLFVBQVUsT0FBTztBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
