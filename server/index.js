const Hapi = require('@hapi/hapi')

const init = async() => {
    const server = Hapi.server({
        port : 3000,
        host : 'localhost'
    })
    
    await server.start()
    console.log('Server Started..')

    server.route({
        method : ['POST', 'GET'],
        path : '/',
        handler : (req, h) => {
            return 'Hello World'
        }
    })

    server.route({
        method : 'GET',
        path : '/{name}',
        handler : (req, h) => {
            const name = req.params.name
            return 'Hello ' + name
        }
    })

    server.route({
        method : 'GET',
        path : '/home',
        handler : (req, h) => {
            return h.redirect('/');
        }
    })

    server.route({
        method : 'GET',
        path : '/user',
        handler : (req, h) => {
            const user = {
                Name : 'Yuvaraj',
                place : 'Chennai',
                dob : '04-05-1999'
            }
            return user
        }
    })
}

init()