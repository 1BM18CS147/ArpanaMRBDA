db.getCollection('Studentdata').find()
show dbs
use Student
db
db.createCollection("Studentdata",{
 $jsonSchema: {
    bsonType: "object",
    required:[ "RollNo" ]
    properties:{
        Rollno:{
            bsonType:"int"
        },
        Name:{
            bsonType:"string"
        },
        Age:{
            bsonType:"int"
        },
        ContactNo:{
            bsonType:"long"
        },
        EmailId:{
            bsonType:"string"
        }
    
}}})

            
db.Studentdata.insert({RollNo:NumberInt(10),Name:"Arpana M R",Age:NumberInt(20),ContactNo:NumberLong(22222344),EmailId:"amr2211@gmail.com"})

db.Studentdata.insertMany([{RollNo:NumberInt(12),Name:"ABC",Age:NumberInt(20),ContactNo:NumberLong(233222344),EmailId:"abc@gmail.com"},
{RollNo:NumberInt(13),Name:"Anna",Age:NumberInt(22),ContactNo:NumberLong(53222344),EmailId:"anna@gmail.com"}])
db.Studentdata.insert({RollNo:NumberInt(11),Name:"ABC",Age:NumberInt(21),ContactNo:NumberLong(24422344),EmailId:"abcdd@gmail.com"})

db.Studentdata.update({RollNo:10},
{
    $set:{EmailId:"amr@gmail.com"}
})

db.Studentdata.update({RollNo:11},
{
    $set:{Name:"FEM"}
})

db.Studentdata.drop()