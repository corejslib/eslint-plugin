const config = {
    "rules": {
        "html-quotes": ( await import( "#lib/rules/html-quotes" ) ).default,
        "camel-case": ( await import( "#lib/rules/camel-case" ) ).default,
    },
    "configs": {
        "recommended": {
            "name": "@corejslib:recommended",

            "plugins": {
                get [ "@corejslib" ] () {
                    return config;
                },
            },

            "rules": {
                "@corejslib/camel-case": [ "error", { "properties": "always" } ],
                "@corejslib/html-quotes": [ "warn", "auto" ],
                "vue/html-quotes": "off", // replaced with the @corejslib/html-quotes
            },
        },
    },
};

export default config;
