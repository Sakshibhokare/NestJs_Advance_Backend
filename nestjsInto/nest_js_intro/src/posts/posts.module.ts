import { Module } from "@nestjs/common";
import { postController } from "./posts.controller";
import { PostService } from "./posts.service";

@Module({
    imports:[],
    controllers:[postController],
    providers:[PostService]
})
export class PostModule{}
