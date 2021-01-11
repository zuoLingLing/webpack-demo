const { NODE_ENV } = process.env;
const config = {
    development: {
        API_CONFIG: "development"
    },
    production: {
        API_CONFIG: "production"
    },
    test: {
        API_CONFIG: "test"
    }
};
module.exports = config[NODE_ENV];
