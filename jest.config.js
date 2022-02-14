module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        "\\.(module).(less)": "identity-obj-proxy",
    },
    snapshotSerializers: ["enzyme-to-json/serializer"]
};