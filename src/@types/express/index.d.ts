import {db} from "@/globals";
import { user } from "@prisma/client";

declare global {
    namespace Express{
        interface Request {
            user: user ;
        }
    }
}