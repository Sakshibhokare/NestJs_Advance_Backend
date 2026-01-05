in nest js we have two ways of documentation
1. API Documentation :
     For Client, uses OPEN API(swagger), Hosted with API
2. Code Documentation: For Developers, uses COMPODOC, Generated inside APP 

Enabbling swagger in nest js 
we need to install swagger in our application 
npm i @nestjs/swagger@7.3.0
we need to configure swagger in main file 

main.ts ->
<!--
Swagger configuration 
 -->
const config = new DocumentBuilder().setVersion('1.0').build();
//Instantiate Document
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

await app.listen(3000);

*****************************************************************
we will provide more information about the application 
in the document 

const config = new DocumentBuilder()
.setTitle('Nestjs masteclass - Blog app API)
.setDescription('Use the base API usrl as')
.setTermsOfService('https://hjbjbbbbm.com')
.addServer()
.setVersion('1.0')
.build();

const document = SwaggerModule.createDocument(app, config)


****************************************************************
decorators to use for controller 
@ApiPropertyOptional({
    description:"",
    example:""
})
//this is for query 
@ApiQuery({
    name:'limit',
    type:'number',
    required:false,
    description:'entry retured per query'
})
//what this api related to or what actually does 
@ApiOperation({summary:'fetches the users'})

@ApiResponse({
    status:200,
    description:"users fetch successfully"
})

*******************************************************************
Post type request for post controller and DTO 

structure of request body to create a new post
title: string 
postType: enum(post, page, strory, series)
slug: string
status: enum(deaft, scheduled, review, published)
contetnt?:string,
schema?:string
featuredImageUrl?:string
publishOn:Date
tags: string[]
metaOptions:[{key:value}]

we have enum file inside our DTO folder
export enum PostType{
    POST = 'post',
    PAGE='page',
    STORY = 'story',
    SERIES = 'series'
}
export enum Poststatus{
      DRAFT = 'draft',
      SCHEDULED = 'scheduled',
      REVIEW = 'review',
      PUBLISHED = 'publised'
}

export class CreatePostMetaOptionsDTO{
    @IsString()
    @IsNotEmpty()
    key:string;

    @IsNotEmpty()
    value:any;
}

// create post DTO 
export class CreatePostDTO{
    //adding validators
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title:string;

    @IsEnum(PostType)
    @IsNotEmpty()
    postType: PostType;

    @IsString()
    @IsNotEmpty()
    @Matches(, {message:'A slug should be all small letters and uses only "-'}) we can pass regular expression
    slug:string;

    @IsEnum(Poststatus)
    @IsNotEmpty()
    status: Poststatus;

    @IsString()
    @IsOptional()
    content?:string;
   
    @IsOption()
    @IsJSON() when not parsible to json will throw an error 
    schema?:string;


    @IsOptional()
    @IsUrl()
    featuredImageUrl:string;

    @IsISO8601() //this checks the data format 
    @IsOptional()
    publishOn: Date;

    @IsOptional()
    @IsArray()
    @IsString({each:true}) // this will check if each values is string or not 
    @MinLength(3, {each:true}).
    tags?:string[];

    //nested object has two properties key and value
    @IsOptional()
    @IsArray()
    @ValidateNested({each:true})  // coming from class transaformer not class validator 
    @Type(()=>CreatePostMetaOptionsDTO)
    metaOptions:CreatePostMetaOptionsDTO[];
}


## cerate new post endpoint
export class PostController{
    @Post()
    public createPost(){}
}


## Using Swagger for documenattion  
 @ApiProperty({
    example:'this is a title',
    description:'this is the title for blog post'
 }) // the value will be added to api property section/ example value on swagger 
 @IsString()
 @MinLength(4)
 @IsNotEmpty()
 title:string;


 @ApiProperty({
    enum:postType,
    description: 'Possible values, 'post','page', 'story''
 })
 @IsEnum(postType)
 @IsNotEmpty()
 postType:postType;

 and so on

 @ApiPropertyOptional({
    description:'this is the content of the post'
 })


//nested object 
 @ApiPropertyOptional({
    type:'array',
    required: false,
    items:{
        type:'object',
        properties:{
            key:{
                type:'string',
                description:'The can be any string identifier',
                example:'sidebarEnabled'
            },
            vale{
                type:'any',
                description:"any value",
                example:true
            }
        }
    }
 })


## mapped types using swagger
@ApiOperation({
   summary:"Creates a new blog post"
})

@ApiResponse({
    status:201,
    description:"you get 201 response if your post is created sucessfully"
})

@Post()
public createPost(@Body() createPostDto:CreatePostDTO){
    console.log(createPostDto)
}


//mapp type
@Patch()
public updatePost(@Body() patchPostDto:any){
    console.log(patchPostsDto);
}

//patch-post.dto.ts 
//CreatePostDto properties will be optional
export class PatchPostDto extends PartialType(CreatePostDto){ //PartialType comes from swagger package 
    @ApiProperty({
        description:"ID of post that needs to be updated"
    })
    @IsInt()
    @IsNotEmpty()
    id:number 
}


for running will create .http file
PATCH http://localhost:3000/posts
Content-Type: application/json

{
    "id":1234
}


## Compodoc
npm i compodoc/compodoc@1.1.23
in package.json script section needs to add a command 
"doc":"npx @compodoc/compodoc -p tsconfig.json -s --port 3001 --watch -d ./documentation"

This command generates project documentation from TypeScript code and serves it locally on port 3001, automatically updating when the code changes.
npx: Runs a package without installing it globally, Fetches @compodoc/compodoc if it’s not already installed

@compodoc/compodoc: Compodoc is a documentation generator for Angular / TypeScript projects, It analyzes your source code and creates HTML documentation

-p tsconfig.json: Tells Compodoc which TypeScript configuration to use

-s: Serve the documentation using a local web server

--port 3001: Runs the documentation server on port 3001

--watch: Watches the source files for changes, Automatically regenerates the documentation when files change

-d ./documentation: Specifies the output directory, Generated docs are saved in the ./documentation folder

then finally npm run doc this creates new document and launches new server 

## compodoc coverage /documentation coverage
for keeping the coverage for compodoc we need to add a comment
like /** */ starts with two star and ends with one star 
