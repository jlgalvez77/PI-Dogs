

const getDogsHandler = (req, res) => {
    res.status(200).send('dogs');
};

const getDogsIdHandler = (req, res) => {
    res.status(200).send('dogsId');
};



module.exports = {
    getDogsHandler,
    getDogsIdHandler
};