require.config({
    "paths": {
        "jquery": "external/jquery",
        "bootstrap": ["external/bootstrap", ],
        "SomeScript": "SomeScript"
    },
    "bootstrap": {
        "deps": [
            'jquery'
        ]
    }
});

//Main module
require(["SomeScript"], function () {
    console.log("RequireJS Modules Loaded");
});