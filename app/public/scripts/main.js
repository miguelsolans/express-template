//Main config file: http://requirejs.org/docs/api.html#config-baseUrl
require.config({
    //Define 3rd party plugins dependencies
    "*": {
        "SomeScript":    {}
    },
    paths: {
        jquery: 'external/jquery',
        SomeScript: 'SomeScript'
    },
});

//Main module
require(["SomeScript"], function () {
    console.log("RequireJS Modules Loaded");
});