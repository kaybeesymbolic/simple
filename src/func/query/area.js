const { ApolloError } = require("apollo-server-express")
const {queryAll,queryOne, counts} = require("./reuse/reuse")

//get all cities in a country
exports.getAreas = queryAll
//get one city
exports.getArea = queryOne

exports.addArea = async(countryId,name,City)=>{
    try {
        const area = new City({name:name,countryId:countryId})
    if(await area.save())return area
    } catch (error) {
        throw new ApolloError("Error: operation failed")
    }
}


exports.countCity = async(country,City) =>{
    const cities = await City.find().where({"countryId":country.id})
    return cities.length
}