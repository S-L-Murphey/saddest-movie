import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@component/server/api/trpc";

export const movieRouter = createTRPCRouter({

  movie: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return {
        movie: `${input.id}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
