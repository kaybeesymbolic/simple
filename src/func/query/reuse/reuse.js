const { ApolloError } = require("apollo-server-express")

//retrieve all the models in the collection
exports.queryAll = async(first=null,last=null,model={})=>{
    try {
        const result =await model.find({})  
        if(first) return result.slice(0,first)
        let count = result.length-last
        if(last)return result.slice(count)
        return result
    } catch (error) {
        throw new ApolloError("Error: operations failed")
    }
}
//retrieve single model with specified id
exports.queryOne = async(id=null,model={}) =>{
    try {
        const result = await model.findById(id)
        if(result)return result 
    } catch (error) {
        throw new ApolloError(`Error: No match`)
    }
}