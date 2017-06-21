#!/usr/bin/node

"use strict";

const fs = require('fs');
const spawn = require('child_process').spawn;
const execSync = require("child_process").execSync;
const check = require('syntax-error');
const chalk = require('chalk');

const GIT_CLONE_NOT_FOUND = "Exercices folder not found.",
    NOT_VALID_CONF = "Invalid config file, please edit it.",
    EMPTY_CONFIG_FILE = "Empty config file, please fill it.",
    NO_TEST_PROVIDED = "Provide at least one test.",
    NO_DESTINATION_PATH = "Provide a destination path.",
    NO_STUDENTS = "Provide at least one student.",
    LANG_NOT_FOUND = "Error language not found, read the README.md.",
    TEST_DONE = "Tests done.",
    LAUNCH_TESTS = "All is prepared, launch tests.",
    FILE_CONTAIN_ERRORS = " contains errors, cannot correct this file.";

function log(msg) {
    return console.log(msg);
}

function valid(msg) {
    return console.log(chalk.green(msg));
}

function error(msg) {
    return console.error(chalk.red(msg));
}

function isValidConfig(config) {
    let errArr = [];

    if (!config) {
        errArr.push(EMPTY_CONFIG_FILE);
    }
    if (!config.destinationPath || !config.destinationPath.length) {
        errArr.push(NO_DESTINATION_PATH);
    }
    if (testArr(config.tests)) {
        errArr.push(NO_TEST_PROVIDED);
    }
    if (testArr(config.students)) {
        errArr.push(NO_STUDENTS);
    }
    if (errArr.length) {
        return errArr;
    }

    return 1;
}

function testArr(tab) {
    return tab && tab.length;
}

function resolveDate(nb) {
    return nb < 10 ? "0" + nb : nb;
}

function getTimeNow() {
    const D = new Date(),
        y = D.getFullYear(),
        M = resolveDate(D.getMonth() + 1),
        d = resolveDate(D.getDate()),
        h = resolveDate(D.getHours()),
        m = resolveDate(D.getMinutes()),
        s = resolveDate(D.getSeconds()),
        u = (new Date().getTime() / 100 | 0).toString().substr(-4, 4);

    return `${y}.${M}.${d}-${h}.${m}.${s}-${u}`;
}

function checkIfCreateDir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

function writeFile(dir, data) {
    fs.writeFileSync(dir, data);
}

function writeTrace(traceName, output, formatedStudent) {
    writeFile(traceName, output);
    valid(formatedStudent + TEST_DONE)
}

function createReport(test, testPath, config) {
    checkIfCreateDir("./report");
    execSync(`find ${testPath} -name "*_trace" -exec cp {} ./report \\;`);
    if (config.options.zipTraces) {
        execSync("zip ./report.zip ./report/*");
        valid(`\n### Finished [${test.name}] corrections ###\n`);
    } else {
        valid(`\n### Finished [${test.name}] corrections ###\n`);
    }
}

function appendTestToBundle(data, testFile, bundleName, language) {
    switch (language.extension) {
        case "php":
            fs.appendFileSync(bundleName, clearPhpHeader(`${fs.readFileSync(testFile)}`));
            break;
        default:
            fs.appendFileSync(bundleName, fs.readFileSync(testFile));
            break;
    }
}

function clearLogs(str) {
    return str.replace(/.*console\..*\(.*\).*[\r\n]?/g, "").trim();
}

function clearTimeoutInterval(str) {
    // need to do some stuffs
    return str;
}

function clearPhpHeader(str) {
    return str.replace(/^<\?php.*/g, "").replace(/\?>[\n\r]?$/g, "").replace("declare(strict_types=1);", "").trim();
}

function fetchGitRepository(url, dest) {
    return new Promise(resolve => {
        launchCommand("git", ["clone", url, dest]).then((output) => {
            resolve(output);
        });
    });
}

function launchCommand(command, args) {

    return new Promise(resolve => {

        const child = spawn(command, args);
        let output = "";

        child.stderr.on('data', (data) => {
            output += `${data}`;
        })

        child.stdout.on('data', (data) => {
            output += `${data}`;
        });

        child.stdout.on('close', () => {
            resolve(output);
        });
    });
}

function hasErr(dirName, key) {
    const file = `${dirName}/${key}`,
        src = fs.readFileSync(file, 'utf-8'),
        err = check(src, file);

    return err;
}

function cleanConcat(data, language, dirName, studentName, test) {
    let concatFile = "",
        keys = Object.keys(data);

    for (let key of keys) {

        switch (language.extension) {

            case "js":
                if (language.opt && language.opt.clearLogs) {
                    data[key] = clearLogs(data[key]);
                }
                if (hasErr(dirName, key) && language.opt && language.opt.checkErrors) {
                    error(`[${studentName}] File ` + key + FILE_CONTAIN_ERRORS);
                    concatFile += "/* " + data[key] + " */\n";
                } else if (language.opt && language.opt.strictMode && !keys.indexOf(key)) {
                    concatFile += "\"use strict;\"\n" + data[key] + "\n";
                } else {
                    concatFile += data[key] + "\n";
                }
                break;

            case "php":
                data[key] = clearPhpHeader(data[key]);
                if (language.opt.strictTypes && !keys.indexOf(key)) {
                    concatFile += "<?php\ndeclare(strict_types=\d+);\n" + data[key] + "\n";
                } else if (!keys.indexOf(key)) {
                    concatFile += "<?php\n" + data[key] + "\n";
                } else {
                    concatFile += data[key] + "\n";
                }
                break;

            case "java":
                concatFile += data[key] + "\n";

            default:
                break;

        }
    }

    return concatFile;
}

function readFilesAndEpure(data, dirName, studentName, language) {
    if (!fs.existsSync(dirName)) {
        throw GIT_CLONE_NOT_FOUND;
    }

    const fileNames = fs.readdirSync(dirName),
        pattern = new RegExp(`${language.prefix}\\d*\\.${language.extension}`, 'g');

    for (let fileName of fileNames) {
        if (fileName.match(pattern)) {
            const src = fs.readFileSync(`${dirName}/${fileName}`, 'utf-8');
            data[fileName] = src.replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*[*/]?[*/]?|\/\/.*/g, '').trim();
        }
    }
}

function prepareBundle(data, exercicesFolder, bundleName, options, studentName, language) {
    readFilesAndEpure(data, exercicesFolder, studentName, language);
    writeFile(bundleName, cleanConcat(data, language, exercicesFolder, studentName));
}

function correctStudent(studentName, test, studentFolder, language, options, host) {

    const repositoryName = test.gitFolder,
        testFile = test.testFile,
        command = language.command,
        protocol = options.ssh ? "git@" : "https://",
        protocolPathSep = options.ssh ? ":" : "/",
        bundleName = `${studentName}_bundle.${language.extension}`,
        studentBundleDir = `${studentFolder}/${bundleName}`,
        studentTraceDir = `${studentFolder}/${studentName}_${language.extension}_trace`,
        exercicesFolder = `${studentFolder}/${repositoryName}`,
        args = language.args.concat([studentBundleDir]),
        gitRepoUrl = `${protocol}${host}${protocolPathSep}${studentName}/${repositoryName}.git`,
        formatedStudent = `[${studentName}] `;

    return new Promise(resolve => {
        checkIfCreateDir(studentFolder);
        checkIfCreateDir(exercicesFolder);
        fetchGitRepository(gitRepoUrl, exercicesFolder).then((output) => {
            let data = {};

            log(formatedStudent + " " + output.replace(/[\r\n]?$/g, ''));
            try {
                valid(formatedStudent + LAUNCH_TESTS)
                prepareBundle(data, exercicesFolder, studentBundleDir, options, studentName, language, test);
                appendTestToBundle(data, testFile, studentBundleDir, language);
                if (language.interpreted) {
                    launchCommand(command, args).then((output) => {
                        resolve(writeTrace(studentTraceDir, output, formatedStudent));
                    });
                } else {
                    const compilation = language.compilation;
                    launchCommand(compilation.command, compilation.args.concat([studentBundleDir])).then((output) => {
                        launchCommand(command, language.args.concat([studentBundleDir.replace("." + language.extension, "")])).then((output) => {
                            resolve(writeTrace(studentTraceDir, output, formatedStudent));
                        });
                    });
                }
            } catch (err) {
                resolve(error(formatedStudent + err));
            }
        });
    });
}

function launchTest(test, testPath, students, languages, options, host) {
    const language = languages[test.language];

    if (language) {
        checkIfCreateDir(testPath);
        return students.map((studentName) => correctStudent(
            studentName,
            test,
            `${testPath}/${studentName}`,
            language,
            options,
            host
        ));
    } else {
        error(`[${studentName}] ` + LANG_NOT_FOUND);
    }
}

function launchTests(config) {
    const destination = config.destinationPath;

    checkIfCreateDir(destination);
    config.tests.map(test => {
        valid(`\n### Launch [${test.name}] corrections ###\n`);
        const testPath = `./${destination}/${test.name}-` + getTimeNow();
        Promise.all(launchTest(
            test || {},
            testPath || "",
            test.students || [],
            config.languages || {},
            config.options || {},
            config.host || ""
        )).then((output) => {
            if (config.options.createReport) {
                createReport(test, testPath, config);
            } else {
                valid(`\n### Finished [${test.name}] corrections ###\n`);
            }
        });
    });
}

(!(function _init() {
    const config = JSON.parse(`${fs.readFileSync(process.argv[2] || "./teacher.json")}`);

    isValidConfig(config) ? launchTests(config)
        : error(NOT_VALID_CONF);
}()));

