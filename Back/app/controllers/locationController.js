const dataMapper = require('../dataMapper');
const client = require('../db');

module.exports = locationController = {

    locationList: (_, response) => {
        dataMapper.getAllLocations((error, result) => {
            if(error){
                console.error(error);
                response.send(error);
                return;
            }
            response.status(200).json({ locations: result.rows });
        });
    },

    location: (request, response, next) => {
        const id = Number(request.params.id, 10);
        
        dataMapper.getChildrenOfParentId(id,
        (error, result) => {

            if(error){
                console.error(error);
                response.send(error);
                return;
            }

            if(result.rowCount === 0){
                next();
                return;
            }

            response.status(200).json({ location: result.rows });
        });
    },
};