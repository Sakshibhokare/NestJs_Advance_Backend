## relationships in SQL databases
to create a table in database based on our entity we need to import 
in perticular module file,
for example, we have post entity created
to create a table in the database,
imports:[TypeOrmModule.forFeature([Post])] this let you create a table into the database


## One to One relationship
liner relationship,
in this a PK of one of the table will be FK of another table

## unidirectional one to one relationship
only one of the entity knows about the relationship
when both entities are known about the relationships
@OneToOne(()=> MetaOption) 
@JoinColumn() //will will create an ID column for metaoptions, in our post table
every post will have one metaoptions

## creating service file
npx nest g service meta-options/providers/meta-options.service

@Injectable()
export class MetaOptionsService{
    constructor(
        //inject metaoptionsRepo
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>
    )
    public async create(createMetaOptionsDto: CreatePostMetaOptionsDto){
        let metaOption= this.metaOptionRepository.create(
            createPostMetaOptionsDto
        );
        return await this.metaOptionsRepository.save(metaOption)
    }
}


## Cascade creation with relationship
using cascade, we can create both object in a single save operations
we can create Metaoption and post in single save operation

in the enity of post

@OneToOne(()=>MetaOption, {
    cascade:true, // we have multiple options here to perform on both
    cascade:['remove', 'Insert'] //will get cerated together, and removed together
})
@JoinColumn()
metaOptions?:MetaOptions;

## Querying with eager loading 
//will get all posts whos metaoption property value is set to true 
let posts = await this.postsRepository.find({
    reltions:{
        metaOptions:true,
    }
})

//eager loading 
when we what automatically get the relation without explicitly mentioning 
in post entity
@OneToMay(()=>MetaOptions,{
    cascade:true,
    eager:true
})
@JoinColumn()
metaOptions?:MetaOption; 
//this will fetch relation automatically 

## Deleting related entity
public async delete(id:number){
    //find the post
    let post = await this.postRepository.findOneBy({id});

    //delete the post: post table have FK containts with metaOption table so postgreSQL will not allow you to delete MetaOptions first, since it's ID is getting used somewhere in another entry
    await this.postRepository.detele(id);

    //delet metaOptions
    await this.metaOptionsRepository.delete(post.metaOptions.id);

    //confirmation
    return {deleted:true}

}


## Bi-directional relationship
export class MetaOptions{
    @createDateColumn()
    createdate:Date;

    @OneToOne(()=>Post, (post)=>post.metaOptions)
    post:Post;
}

we need to update in post as well
//in short we define in each other entity where we storing relationship 
@OneToMay(()=>MetaOptions,(metaOptions)=>metaOptions.post
{
    cascade:true,
    eager:true
})
@JoinColumn() //FK will only be in Post entity 
metaOptions?:MetaOption;

//now we will query to find post
let inversePost = await this.metaOptionsRepository.find({
    where:{id: post.metaOptions.id},
    relations:{
        post:true
    }
})

## Cascade delete with bi directional relationship
if we have FK in both tables with bi directional relationship 
in metaOptions

@OneToOne(()=>Post, (post)=>post.metaoptions, {
    onDelete: 'CASACADE'
})
@JoinColumn()
post:Post

//onDelete should be so that when we remove post, the metaOptions will be automatically removed


## OnteToMany ManytoOne relation
<!-- In post entity -->
@ManyToOne(()=>User, (user)=>user.posts)
author:User;

<!-- In user enity -->
@OneToMany(()=>Post, (post)=>post.author)
posts:Post[];

