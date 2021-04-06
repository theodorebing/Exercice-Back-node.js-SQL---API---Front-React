module.exports = {

    notFound : (response) => {
        response.status(404).json({
            error: '404 Not Found'
        });
    },

    errorServer: (error, response) => {
        console.trace(error);
        response.status(500).json({
            error: 'Error : Something went wrong !'
        });
    } 



}