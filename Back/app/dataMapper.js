const client = require("./db");

module.exports = {

    getAllLocations: (functionDeCallback) => {
        client.query(`SELECT * FROM "location" WHERE "parentid" IS NULL`, (error, result) => {
            if (error) {
                console.error(error);
            }
            functionDeCallback(error, result);
        });
    },

    getChildrenOfParentId: (parentid, callback) => {
        client.query(`SELECT * FROM "location" AS parent JOIN "location" AS children ON parent.id = children.parentid WHERE parent.id = $1`, [parentid], callback);
    },

};