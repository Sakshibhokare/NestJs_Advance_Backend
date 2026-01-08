## what is ORM/ object relational mapping?
in ORM we have two different layers: 
1. abstraction layer for user methods
2. Query language like SQL 

example,
user only usese cerate method without being worried about the sql queries 

while quring you do not need to learn different language using typesript with orm you can create complex queries

with user and profile table we can add a relaionship 
using 
in user  enity 
@OneToOne(()=> Profile )
@JoinColumn()
profile:Profile 

## connecting nest js to postgres
we need three additional modules:
1. TypeORM
2. nestjs typeorm
3. need to install specific databse driver 
npm i typeorm@0.3.20 @nestjs/typeorm@10.0.2 pg@8.11.5


install typeorm postgres and nest typeorm 
npm install typeorm pg @nestjs/typeorm@latest

******
for setting up the database will import TypeOrmModule in app.module file

TypeOrmModule.forRoot({
    type:'postgres,
    entities:[],
    synchronize:true,
    port:5432,
    username:'postgres',
    password:'password',
    host:'localhost',
    database:'nestjs-blog'
 })

 using this typeorm will be connected to database 


 ## using async configuration 
 convert the above synchronize connection to async
 writting the database configuration in app.module directly not a  good pratice, will use env for reading those values 

 insetad of forRoot will use forRootAsync:
 will
 TypeOrmModule.forRootAsync({
    imports:[],
    inject:[]
 useFactory: ()=>({
    type:'postgres,
    entities:[],
    synchronize:true,
    port:5432,
    username:'postgres',
    password:'password',
    host:'localhost',
    database:'nestjs-blog'
  })
 })
  

## Theoreotical understanding of the repository pattern
1. Understanding repository pattern :
   what is an entity and what is repository 
   -> user entity: user table, file which contains all columns of specific table with all information of columns 
   -> once you create enitity, you are able to inject repository, you do not take care about usersRepository typeorm takes care of this 
   -> repository is not a file, is is something that is injected into usersService

2. 
@Entity()
export class User{
    @PrimaryGeneratedColumn() / PrimaryColumn : genreation taken care from typeorm / generate by ourself 
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column({default: true})
    isActive: boolean;
}

3. 
Example Repository:

Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async findAll():Promise<User[]>{
        await this.userRepository.find();
    }
}

after creating the user anity will add that into typeOrmModule present in app.module section 
enitities:[User]

## expanding entity defination 
@Column({
    type:'varchar',
    length:96,
    nullable:false,   //can not be null 
    unique: true
})

## injecting user repository 
@Injectable()
export class UserSerice{
    contructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}


    //use repo to create new user 
    public async createUser(createUserDto: CreateUserDTO){
        //check if exists 
        const existingUser = await this.usersRepository.findOne({where:{email: createUserDto.email},
        })

        //create a new user
        let newUser = this.userRepository.create(createUserDto); //this is created only not saved yet 

        newUser = await this.userRepository.save(newUser);
        return newUser;
    }
}



in controller
@Post()
public createUsers(@Body() createUserDto: CreateUserDto){
    return this.userService.createUser(createUserDto)
}




//in users module 
@Module({
    imports:[TypeOrmModule.forFeature([User])] //inform user module that this enity exist
})



## practice creating post entity
post.entity.ts

@Entity()
export class post{
    @PrimaryGeneratedClumn()
    id:number;

    @Column({
        type:'varchar',
        lenght: 512,
        nullable:false
    })
    title:string;

    @Column({
        type:'enum',
        enum:postType,
        nullable:false,
        default:postType.POST
    })
    postType:postTypeEnum;
    
    @Column({
        type:'timestamp',
        nullable:true
    })
    publishOn?:Date;

    status:postStatus;

    content?:string;

    schema:string;

    featuredImageUrl?:string
}