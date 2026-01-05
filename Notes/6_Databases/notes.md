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