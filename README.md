# MODULE FEDERATION EXAMPLE

Module federation example with `React`, `@originjs/vite-plugin-federation`, and `@module-federation/native-federation-typescript`.

In this example, **state management**, **routing** with `Zustand`, `React Query`, `React Router DOM` is implemented across the host and remote app.

## TECH STACK

1. `React`
2. `React Query`
3. `Zustand`
4. `TailwindCSS`
5. `React Router DOM` : for routing in the host app.
6. `@originjs/vite-plugin-federation` : for module federation.
7. `@module-federation/native-federation-typescript` : for type generation for host, remote.

## MODULES

`host` : application that imports the remote app. It manages routing and react query, zustand instance.
`remote` : application that is imported by the host app. It uses react query, zustand from the host app, and uses custom event for routing.
It exports Button and `/remote` page component.
`remote2` : application that is imported by the host app. It justs exports Button and `/remote2` page component.

## SCRIPTS

`vite` : type generation for the host app. `@mf-types` are generated in `src/host`.
`vite:remote` : type generation for the remote app. `@mf-types` are generated in `src/remote`.
`build` : build all applications.
`preview` : build then preview all applications.

suffix with `windows` is for windows.

## HOW TO RUN

1. Run `pnpm i`.
2. Run `pnpm preview` or `pnpm preview-windows`.
3. Enter `http://localhost:3002` in the browser.

## PAGES

In all pages, you can see links and `host react query` state, and `zustand state`.
See how data and state are shared between host and remote.

`/` : home page. You can check that 2 Buttons are imported from `remote`, `remote2` app
`/remote` : page that is imported by the remote app. You can check that react query state is shared between host and remote. Also, routing with custom event is implemented.
`/remote2` : page that is imported by the remote2 app.
