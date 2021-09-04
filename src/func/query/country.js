const { ApolloError } = require("apollo-server-express")
const {queryAll,queryOne} = require("./reuse/reuse")

//get all the countries
exports.getCountries = queryAll

//get specified country
exports.getCountry = queryOne

//add on country
exports.addCountry = async(name=null, model= {})=>{
    try {
        const country = await new model({name:name})
    if(await country.save()) return country
    } catch (error) {
        throw new ApolloError("Error: operation failed")
    }
}

exports.countCountryPeople = async(country,Person) =>{
    const people =await Person.find().where({"countryId":country.id})
    return people.length
}