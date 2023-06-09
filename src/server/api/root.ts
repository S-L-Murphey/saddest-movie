import { createTRPCRouter } from "@component/server/api/trpc";
import { movieRouter } from "@component/server/api/routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  movie: movieRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
