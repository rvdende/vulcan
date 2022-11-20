import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const actionPlansRouter = router({
  test: protectedProcedure
    .input(z.object({
      text: z.string().nullish()
    }).nullish())
    .query((props) => {

      console.log(props);

      return {
        props: props.ctx.session,
        greeting: `Actionplan ${props.input?.text ?? "test"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
