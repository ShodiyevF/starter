const serializer = (dto, data) => {
    try {
        const dtoKeys = Object.keys(dto);
        const dataKeys = Object.keys(data);

        const dtoValues = Object.values(dto);
        const dataValues = Object.values(data);

        console.log(dtoKeys, '  DTO_KEYS');
        console.log(dtoValues, '  DTO_VALUES');
        console.log(dataKeys, '  DATA_KEYS');
        console.log(dataValues, '  DATA_VALUES');
    } catch (error) {}
};

module.exports = {
    serializer,
};
