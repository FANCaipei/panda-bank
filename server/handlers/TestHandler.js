const TestHandler = async (req, res) => {
    res.send({
        response: 'test',
        ...req?.body
    });
};

module.exports = TestHandler;
