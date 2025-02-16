import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';

const app = new Elysia()
.use(staticPlugin({
    assets: 'dist/assets',
    prefix: '/assets',
    staticLimit: 1024 * 1024 * 10,
    alwaysStatic: true,
    ignorePatterns: ['/api/*']
}))
.get("/", () => Bun.file("dist/index.html"))
.listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);