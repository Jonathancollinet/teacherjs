Teacher
==========

Will create "destinationPath" directory, with all "students" folders, which contains the repository, the trace and the unit test bundle.

For each tests, for each students, will fetch git repository, concatenate all exercices with the current test file, and launch it with the provided "command" in the provided "language".

(see configuration file below)

### Checklist to run the current exemple

```
$> chmod +x install.sh
$> ./install.sh
```
```
$> chmod +x teacher
$> ./teacher
```

```
{
    "destinationPath": "correction01",  // destination folder for trace/bundle/repo

    "host": "github.com",   // git repository provider
    "options": {            // options (not necessary provided)

        "ssh": true,        // for remote authentification (git clone)
                            // true if want use ssh; false if want use https;

        "createReport": true,           // create the "./report/" centralised folder
        "zipTraces": true               // create a .zip from report folde
    },

    "languages": {                  // supported languages
                                    // you can add a language by adding a new key

        "js": {                     // key for JavaScript
            "interpreted": true,    // true if the language is interpreted
            "prefix": "ex",         // set the exercices prefix to match with it
            "extension": ".js",     // the extension for exercices files
            "command": "mocha",     // the unit tester program
            "args": [],             // unit tester arguments
            "opt": {
                "strictMode": true,             // add strict mode
                "clearLogs": true,              // clear console.log
                "clearTimeoutInterval": true,   // clear timeout/interval (not working)
                "checkErrors": true             // check errors
            }

        },
        "php": {                     // key for php
            "prefix": "ex",
            "extension": "php",
            "command": "phpunit",
            "args": [],
            "opt": {
                "strictTypes": true     // delete all founded "declare(strict_types=1);"
                                        // and add "declare(strict_types=1);" at the top of first file
            }
        },
        "java": {
            "interpreted": false,       // false if its a compiled language
            "prefix": "ex",
            "extension": "java",
            "compilation": {            // provide compilation object
                "command": "javac",     // compilation command
                "args": [               // compilation arguments
                    "-cp",
                    ".:junit-4.12.jar"
                ]
            },
            "command": "java",          // run command
            "args": [                   // run arguments
                "-cp",
                ".:junit-4.12.jar:hamcrest-core-1.3.jar",
                "org.junit.runner.JUnitCore"
            ],
            "opt": {}
        }
 
    },

    "tests": [      // simply add a test in the array "tests"
                    // you can choose an other provided language
        {
            "name": "testJS",                                   // name of the test
            "language": "js",                                   // used language
            "testFile": "./suites/js/suite01-Basics/test01.js", // unit tests file
            "gitFolder": "suite01-Basics",                      // git folder name
            "students": [                                       // student github name list
                "Jonathancollinet"
            ]
        },
        {
            "name": "testPHP",
            "language": "php",
            "testFile": "./suites/php/suite01-Basics/tests.php",
            "gitFolder": "phptest",
            "students": [
                "Jonathancollinet"
            ]
        },
        {
            "name": "testJAVA",
            "language": "java",
            "testFile": "./suites/java/suite01-Basics/tests.java",
            "gitFolder": "javatest",
            "students": [
                "Jonathancollinet"
            ]
        }

    ]
}
```
