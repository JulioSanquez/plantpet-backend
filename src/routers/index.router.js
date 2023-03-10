const routerCategories = require( './categories.router' )
const routerCustomersInfo = require( './customersInfo.router' )
const routerCustomers = require( './customers.router' )
const routerPermissions = require( './permissions.router' )
const routerProducts = require( './products.router' )
const routerProvidersInfo = require( './providersInfo.router' )
const routerProviders = require( './providers.router' )
const routerPurchasesDetails = require( './purchasesDetail.router' )
const routerPurchases = require( './purchases.router' )
const routerRols = require( './rols.router' )
const routerSaleDetails = require( './salesDetail.router' )
const routerSales = require( './sales.router' )
const routerUsers = require( './users.router' )
const routerAuth = require( '../auth/auth.routers' )

const apiRouter = require( 'express' ).Router()

apiRouter.use( '/categories', routerCategories )
apiRouter.use( '/customers-info', routerCustomersInfo )
apiRouter.use( '/customers', routerCustomers )
apiRouter.use( '/permissions', routerPermissions )
apiRouter.use( '/products', routerProducts )
apiRouter.use( '/providers-info', routerProvidersInfo )
apiRouter.use( '/providers', routerProviders )
apiRouter.use( '/purchases-detail', routerPurchasesDetails )
apiRouter.use( '/purchases', routerPurchases )
apiRouter.use( '/rols', routerRols )
apiRouter.use( '/sales-detail', routerSaleDetails )
apiRouter.use( '/sales', routerSales )
apiRouter.use( '/users', routerUsers )
apiRouter.use( '/auth', routerAuth )

module.exports = apiRouter