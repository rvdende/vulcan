// import { z } from "zod";

import {
  router,
  // publicProcedure,
  protectedProcedure
} from "../trpc";

export const session = router({
  get: protectedProcedure.query((props) => {
    return {
      session: props.ctx.session,
    };
  }),
  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),
});
