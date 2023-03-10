const {Customers} = require( '../models/index.models' )

const findAllCustomers = async (  ) => {
    const data = await Customers.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findCustomerById = async ( id ) => {
    const data = await Customers.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createCustomer = async ( customerObj ) => {
    const data = await Customers.create(customerObj)
    return data
}

const updateCustomer =  async ( id, customerObj ) => {
    const data = await Customers.update( customerObj, {
        where:{
            id
        }
    } )
    return data[0] 
}

const deleteCustomer = async ( id ) => {
    const data  = await Customers.destroy( id )
    return data
}

module.exports = {
    findAllCustomers,
    findCustomerById,
    createCustomer,
    updateCustomer,
    updateCustomer,
    deleteCustomer
}





