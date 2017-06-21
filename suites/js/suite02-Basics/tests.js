const assert = require('assert');
const expect = require('chai').expect;

describe("test ex01.js", function () {
    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (returnParameter), "function");
    });
});

describe("test ex02.js", function () {
    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (retParam), "function");
    });

    it("should return 5", () => {
        assert.equal(retParam(5), 5);
    });

    it("should return 'salut'", () => {
        assert.equal(retParam("salut"), "salut");
    });

    it("should return {key: 4}", () => {
        assert.deepEqual(retParam({ key: 4 }), { key: 4 });
    });

    it("should return [424242]", () => {
        assert.deepEqual(retParam([424242]), [424242]);
    });

});

describe("test ex03.js", function () {
    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (addition), "function");
    });

    it("should return 0", () => {
        assert.equal(addition(0, 0), 0);
    });

    it("should return -75", () => {
        assert.equal(addition(-45, -30), -75);
    });

    it("should return 2000000", () => {
        assert.equal(addition(1000000, 1000000), 2000000);
    });

})

describe("test ex04.js", function () {
    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (isEven), "function");
    });

    it("should return 0", () => {
        assert.equal(isEven(1), 0);
    });

    it("should return 1", () => {
        assert.equal(isEven(2), 1);
    });

    it("should return 1", () => {
        assert.equal(isEven(10000), 1);
    });

    it("should return 1", () => {
        assert.equal(isEven(0), 1);
    });

});

describe("test ex05.js", function () {
    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (isEvenConcat), "function");
    });

    it("should return '5 est impair'", () => {
        assert.equal(isEvenConcat(5), '5 est impair');
    });

    it("should return '6 est pair'", () => {
        assert.equal(isEvenConcat(6), '6 est pair');
    });

    it("should return '0 est pair'", () => {
        assert.equal(isEvenConcat(0), '0 est pair');
    });

});

describe("test ex06.js", function () {
    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (getHumanTypeByAge), "function");
    });

    it("should return 'enfant'", () => {
        assert.deepEqual(getHumanTypeByAge(1), "enfant");
    });

    it("should return 'impossible... ou encore jamais vu'", () => {
        assert.equal(getHumanTypeByAge(0), "impossible... ou encore jamais vu");
    });

    it("should return 'impossible... ou encore jamais vu'", () => {
        assert.equal(getHumanTypeByAge(500), "impossible... ou encore jamais vu");
    });

    it("should return 'ado'", () => {
        assert.equal(getHumanTypeByAge(17), "ado");
    });

    it("should return 'adulte'", () => {
        assert.equal(getHumanTypeByAge(18), "adulte");
    });

    it("should return 'adulte'", () => {
        assert.equal(getHumanTypeByAge(123), "adulte");
    });

    it("should return 'impossible... ou encore jamais vu'", () => {
        assert.equal(getHumanTypeByAge(500), "impossible... ou encore jamais vu");
    });

});

describe("test ex07.js", function () {
    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (boostedAddition), "function");
    });

    it("should return 44", () => {
        assert.equal(boostedAddition([10, 10, 20, 4]), 44);
    });

    it("should return 20", () => {
        assert.equal(boostedAddition(new Array(20).fill(1)), 20);
    });

    it("should return 1000", () => {
        assert.equal(boostedAddition(new Array(1000).fill(1)), 1000);
    });

});

describe("test ex08.js", function () {
    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (isAllEven), "function");
    });

    it("should return 1", () => {
        assert.equal(isAllEven([10, 10, 20, 4]), 1);
    });

    it("should return 0", () => {
        assert.equal(isAllEven([10, 10, 20, 4, 1]), 0);
    });

    it("should return 0", () => {
        assert.equal(isAllEven(new Array(1000).fill(1)), 0);
    });

    it("should return 0", () => {
        assert.equal(isAllEven(new Array(1000).fill(1)), 0);
    });

});

describe("test ex09.js", function () {

    it("should be load", () => {
        assert.equal(true, true);
    });

    it("should be exist", () => {
        assert.equal(typeof (boostedEvenAddition), "function");
    });

    it("should return 44", () => {
        assert.equal(boostedEvenAddition([10, 10, 20, 4]), 44);
    });

    it("should return 44", () => {
        assert.equal(boostedEvenAddition([10, 10, 20, 4, 1]), 44);
    });

    it("should return 0", () => {
        assert.equal(boostedEvenAddition(new Array(1000).fill(1)), 0);
    });

    it("should return 2000", () => {
        assert.equal(boostedEvenAddition(new Array(1000).fill(2)), 2000);
    });

});

describe("test ex10.js", function () {

    it("should be load", () => {
        assert.equal(true, true);
    })

    it("should be exist", () => {
        assert.equal(typeof (getPerson), "function");
    })

    it("should return a person object", () => {
        const test = getPerson("toto", "tata", 5);
        expect(test).to.have.property('fullName');
        expect(test).to.have.property('age');
        expect(test).to.have.property('isAdult');
        expect(test.fullName).to.have.equal('toto tata');
        expect(test.age).to.have.equal(5);
        expect(test.isAdult()).to.have.equal(false);
    });

    it("should return a person object", () => {
        const test = getPerson("titi", "tutu", 24);
        expect(test).to.have.property('fullName');
        expect(test).to.have.property('age');
        expect(test).to.have.property('isAdult');
        expect(test.fullName).to.have.equal('titi tutu');
        expect(test.age).to.have.equal(24);
        expect(test.isAdult()).to.have.equal(true);
    });

    it("should return a person object", () => {
        const test = getPerson("", "", 0);
        expect(test).to.have.property('fullName');
        expect(test).to.have.property('age');
        expect(test).to.have.property('isAdult');
        expect(test.fullName).to.have.equal(' ');
        expect(test.age).to.have.equal(0);
        expect(test.isAdult()).to.have.equal(false);
    });

});

describe("test ex11.js", function () {

    it("should be load", () => {
        assert.equal(true, true);
    })

    it("should be exist", () => {
        assert.equal(typeof (shoppingList), "function");
    })

    it("should return a shoppingList object", () => {
        assert.deepEqual(shoppingList([
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"]
        ]), { "banane": 5, "kiwi": 3 });
    });

    it("should return a shoppingList object", () => {
        assert.deepEqual(shoppingList([
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"],
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"],
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"]
        ]), { "banane": 15, "kiwi": 9 });
    });

    it("should return a shoppingList object", () => {
        assert.deepEqual(shoppingList([
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"],
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"],
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"],
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"],
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"],
            ["banane", "banane", "banane", "banane", "banane", "kiwi", "kiwi", "kiwi"]
        ]), { "banane": 30, "kiwi": 18 });
    });

    it("should return a shoppingList object", () => {
        assert.deepEqual(shoppingList([
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"],
            ["toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah", "toto", "nimporte", "ahahah"]
        ]), { "toto": 36, "nimporte": 36, "ahahah": 36 });
    });

});

describe("test ex12.js step 1 - evalExpr", function () {

    it("should be load", () => {
        assert.equal(true, true);
    })

    it("should be exist", () => {
        assert.equal(typeof (evalExpr), "function");
    })

    it("should return a 50", () => {
        assert.deepEqual(evalExpr(25, 25, "+"), 50);
    });

    it("should return a 0", () => {
        assert.deepEqual(evalExpr(5, 0, "/"), 0);
    });

    it("should return a 50", () => {
        assert.deepEqual(evalExpr(25, 2, "*"), 50);
    });

    it("should return a 50", () => {
        assert.deepEqual(evalExpr(100, 2, "/"), 50);
    });

    it("should return a 1", () => {
        assert.deepEqual(evalExpr(3, 2, "%"), 1);
    });

    it("should return a 0", () => {
        assert.deepEqual(evalExpr(5, -5, "+"), 0);
    });

    it("should return a 0", () => {
        assert.deepEqual(evalExpr(5, 5, "-"), 0);
    });

});

describe("test ex12.js step 2 - getRandNum", function () {
    it("should be load", () => {
        assert.equal(true, true);
    })

    it("should be exist", () => {
        assert.equal(typeof (getRandNum), "function");
    })

    it("should be return random number [100, 1000]", () => {
        const result = getRandNum();
        assert.equal(result >= 100 && result <=1000, true);
    })

    it("should be return random number [100, 1000]", () => {
        const result = getRandNum();
        assert.equal(result >= 100 && result <=1000, true);
    })

    it("should be return random number [100, 1000]", () => {
        const result = getRandNum();
        assert.equal(result >= 100 && result <=1000, true);
    })

    it("should be return random number [100, 1000]", () => {
        const result = getRandNum();
        assert.equal(result >= 100 && result <=1000, true);
    })

    it("should be return random number [100, 1000]", () => {
        const result = getRandNum();
        assert.equal(result >= 100 && result <=1000, true);
    })

    it("should be return random number [100, 1000]", () => {
        const result = getRandNum();
        assert.equal(result >= 100 && result <=1000, true);
    })

    it("should be return random number [100, 1000]", () => {
        const result = getRandNum();
        assert.equal(result >= 100 && result <=1000, true);
    })

    it("should be return random number [100, 1000]", () => {
        const result = getRandNum();
        assert.equal(result >= 100 && result <=1000, true);
    })

});

describe("test ex12.js step 3 - getRandSign", function () {

    it("should be load", () => {
        assert.equal(true, true);
    })

    it("should be exist", () => {
        assert.equal(typeof (getRandSign), "function");
    })

    it("should be return random number [0, 4]", () => {
        const result = getRandSign();
        assert.equal(result >= 0 && result <= 4, true);
    })

    it("should be return random number [0, 4]", () => {
        const result = getRandSign();
        assert.equal(result >= 0 && result <= 4, true);
    })

    it("should be return random number [0, 4]", () => {
        const result = getRandSign();
        assert.equal(result >= 0 && result <= 4, true);
    })

    it("should be return random number [0, 4]", () => {
        const result = getRandSign();
        assert.equal(result >= 0 && result <= 4, true);
    })

    it("should be return random number [0, 4]", () => {
        const result = getRandSign();
        assert.equal(result >= 0 && result <= 4, true);
    })

    it("should be return random number [0, 4]", () => {
        const result = getRandSign();
        assert.equal(result >= 0 && result <= 4, true);
    })

    it("should be return random number [0, 4]", () => {
        const result = getRandSign();
        assert.equal(result >= 0 && result <= 4, true);
    })

});