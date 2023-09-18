export default {
    testEnvironment: "jsdom",
    "moduleNameMapper":{
       ".(css|less|scss)$": "identity-obj-proxy", 
    },
    collectCoverage: true,
    verbose: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: -10,
        },
    },
    modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json']
};
