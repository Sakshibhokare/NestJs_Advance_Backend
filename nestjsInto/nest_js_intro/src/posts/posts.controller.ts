import { Controller } from "@nestjs/common";
import { PostService } from "./posts.service";

@Controller()
export class postController{
    constructor(private readonly postService: PostService){}
}