import { router } from "../trpc";
import { actionPlansRouter } from "./actionplans";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { session } from "./session";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  actionplans: actionPlansRouter,
  session,
});

// export type definition of API
export type AppRouter = typeof appRouter;
