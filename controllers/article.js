'use strict'

var controller = {
    test: (req, res) => {
        return res.status(200).send({
            message: "Este es el endpoint de prueba para el controlador de articulos"
        })
    }

}

module.exports = controller;