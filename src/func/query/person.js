const {queryAll,queryOne} = require("./reuse/reuse")

//get all persons in a city or country
exports.getPersons = queryAll
//get one person with specify id, in a city or country
exports.getPerson = queryOne

exports.addPerson =async(areaId,first, middle,last,Person)=>{
    const person = await new Person({areaId:areaId,firstName:first,middleName:middle,lastName:last})
    if(await person.save())return person
    else return {}
}

exports.updatePerson = async(id,input,Person)=>{
  return  Person.findByIdAndUpdate(id,{...input},{upsert:true},(err,data)=>{
        if(err)return err
        return data
    })
}

exports.countCityPeople = async(area,Person)=>{
  const result = await Person.find().where({"areaId":area.id})
  return result.length
}


