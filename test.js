import { Utils } from "./src/utils.js";
const utils = new Utils();
const tests = [
    {
        name: "Masck",
        data: [
            {
                method: "Money",
                value: {
                    success: utils.masks().money("9.99"),
                    errors: [
                        utils.masks().money({}),
                        utils.masks().money(""),
                        utils.masks().money([]),
                        utils.masks().money(9),
                        utils.masks().money(null),
                        utils.masks().money(true),
                    ],
                },
            },
            {
                method: "credCard",
                value: {
                    success: utils.masks().credCard("5226266696818712"),
                    errors: [
                        utils.masks().credCard({}),
                        utils.masks().credCard(""),
                        utils.masks().credCard([]),
                        utils.masks().credCard(9),
                        utils.masks().credCard(null),
                        utils.masks().credCard(true),
                    ],
                },
            },
            {
                method: "zipCode",
                value: {
                    success: utils.masks().zipCode("59300000"),
                    errors: [
                        utils.masks().zipCode({}),
                        utils.masks().zipCode(""),
                        utils.masks().zipCode([]),
                        utils.masks().zipCode(9),
                        utils.masks().zipCode(null),
                        utils.masks().zipCode(true),
                    ],
                },
            },
            {
                method: "birthDate",
                value: {
                    success: utils.masks().birthDate("05121987"),
                    errors: [
                        utils.masks().birthDate({}),
                        utils.masks().birthDate(""),
                        utils.masks().birthDate([]),
                        utils.masks().birthDate(9),
                        utils.masks().birthDate(null),
                        utils.masks().birthDate(true),
                    ],
                },
            },
            {
                method: "cpfOrCnpj",
                value: {
                    success: utils.masks().cpfOrCnpj("05837311475"),
                    errors: [
                        utils.masks().birthDate({}),
                        utils.masks().birthDate(""),
                        utils.masks().birthDate([]),
                        utils.masks().birthDate(9),
                        utils.masks().birthDate(null),
                        utils.masks().birthDate(true),
                    ],
                },
            },
            {
                method: "cpfOrCnpj",
                value: {
                    success: utils.masks().cpfOrCnpj("51075116000120"),
                    errors: [
                        utils.masks().birthDate({}),
                        utils.masks().birthDate(""),
                        utils.masks().birthDate([]),
                        utils.masks().birthDate(9),
                        utils.masks().birthDate(null),
                        utils.masks().birthDate(true),
                    ],
                },
            },
        ],
    },
    {
        name: "Strings",
        data: [
            {
                method: "captalizeWord",
                value: {
                    success: utils
                        .strings()
                        .captalizeWord("olá mundo, isso é um teste!"),
                    errors: [
                        utils.strings().captalizeWord({}),
                        utils.strings().captalizeWord(""),
                        utils.strings().captalizeWord([]),
                        utils.strings().captalizeWord(9),
                        utils.strings().captalizeWord(null),
                        utils.strings().captalizeWord(true),
                    ],
                },
            },
            {
                method: "captalizePhrase",
                value: {
                    success: utils
                        .strings()
                        .captalizePhrase("olá mundo, isso é um teste!"),
                    errors: [
                        utils.strings().captalizePhrase({}),
                        utils.strings().captalizePhrase(""),
                        utils.strings().captalizePhrase([]),
                        utils.strings().captalizePhrase(9),
                        utils.strings().captalizePhrase(null),
                        utils.strings().captalizePhrase(true),
                    ],
                },
            },
            {
                method: "upperCase",
                value: {
                    success: utils
                        .strings()
                        .upperCase("olá mundo, isso é um teste!"),
                    errors: [
                        utils.strings().upperCase({}),
                        utils.strings().upperCase(""),
                        utils.strings().upperCase([]),
                        utils.strings().upperCase(9),
                        utils.strings().upperCase(null),
                        utils.strings().upperCase(true),
                    ],
                },
            },
            {
                method: "lowerCase",
                value: {
                    success: utils
                        .strings()
                        .lowerCase("olá mundo, isso é um teste!"),
                    errors: [
                        utils.strings().lowerCase({}),
                        utils.strings().lowerCase(""),
                        utils.strings().lowerCase([]),
                        utils.strings().lowerCase(9),
                        utils.strings().lowerCase(null),
                        utils.strings().lowerCase(true),
                    ],
                },
            },
            {
                method: "removeNumbers",
                value: {
                    success: utils
                        .strings()
                        .removeNumbers("O número da placa é 789, anotou aí?"),
                    errors: [
                        utils.strings().removeNumbers({}),
                        utils.strings().removeNumbers(""),
                        utils.strings().removeNumbers([]),
                        utils.strings().removeNumbers(9),
                        utils.strings().removeNumbers(null),
                        utils.strings().removeNumbers(true),
                    ],
                },
            },
            {
                method: "removeCaracters",
                value: {
                    success: utils
                        .strings()
                        .removeCaracters("O número da placa é 789, anotou aí?"),
                    errors: [
                        utils.strings().removeCaracters({}),
                        utils.strings().removeCaracters(""),
                        utils.strings().removeCaracters([]),
                        utils.strings().removeCaracters(9),
                        utils.strings().removeCaracters(null),
                        utils.strings().removeCaracters(true),
                    ],
                },
            },
            {
                method: "removeSpecialCaracters",
                value: {
                    success: utils
                        .strings()
                        .removeSpecialCaracters(
                            "O número da placa é 789, anotou aí?"
                        ),
                    errors: [
                        utils.strings().removeSpecialCaracters({}),
                        utils.strings().removeSpecialCaracters(""),
                        utils.strings().removeSpecialCaracters([]),
                        utils.strings().removeSpecialCaracters(9),
                        utils.strings().removeSpecialCaracters(null),
                        utils.strings().removeSpecialCaracters(true),
                    ],
                },
            },

            {
                method: "removeHTMLTags",
                value: {
                    success: utils
                        .strings()
                        .removeHTMLTags(
                            "<html><body><p>O número da placa é 789, anotou aí?</p></body></html>"
                        ),
                    errors: [
                        utils.strings().removeHTMLTags({}),
                        utils.strings().removeHTMLTags(""),
                        utils.strings().removeHTMLTags([]),
                        utils.strings().removeHTMLTags(9),
                        utils.strings().removeHTMLTags(null),
                        utils.strings().removeHTMLTags(true),
                    ],
                },
            },
        ],
    },
    {
        name: "Links",
        data: [
            {
                method: "generate",
                value: {
                    success: utils
                        .links()
                        .generate("olá mundo, isso é um teste!"),
                    errors: [
                        utils.links().generate({}),
                        utils.links().generate(""),
                        utils.links().generate([]),
                        utils.links().generate(9),
                        utils.links().generate(null),
                        utils.links().generate(true),
                    ],
                },
            },
            {
                method: "breadCrumb",
                value: {
                    success: utils.links().breadCrumb([
                        {
                            page: 1,
                            search: "coentro",
                        },
                    ]),
                    errors: [
                        utils.links().breadCrumb({}),
                        utils.links().breadCrumb(""),
                        utils.links().breadCrumb([]),
                        utils.links().breadCrumb(9),
                        utils.links().breadCrumb(null),
                        utils.links().breadCrumb(true),
                    ],
                },
            },
            {
                method: "searchParams",
                value: {
                    success: utils
                        .links()
                        .searchParams(
                            "test",
                            false,
                            "https://goo.com?test=verdadeiro"
                        ),
                    errors: [
                        utils.links().searchParams({}),
                        utils.links().searchParams(""),
                        utils.links().searchParams([]),
                        utils.links().searchParams(9),
                        utils.links().searchParams(null),
                        utils.links().searchParams(true),
                    ],
                },
            },
            {
                method: "serialize",
                value: {
                    success: utils
                        .links()
                        .serialize({ page: 1, search: "coentro" }, true),
                    errors: [
                        utils.links().serialize({}),
                        utils.links().serialize(""),
                        utils.links().serialize([]),
                        utils.links().serialize(9),
                        utils.links().serialize(null),
                        utils.links().serialize(true),
                    ],
                },
            },
        ],
    },
    {
        name: "Validates",
        data: [
            {
                method: "isPromise",
                value: {
                    success: utils.validates().isPromise(new Promise(() => {})),
                    errors: [
                        utils.validates().isPromise({}),
                        utils.validates().isPromise(""),
                        utils.validates().isPromise([]),
                        utils.validates().isPromise(9),
                        utils.validates().isPromise(null),
                        utils.validates().isPromise(true),
                    ],
                },
            },
            {
                method: "isString",
                value: {
                    success: utils.validates().isString("Olá mundo!"),
                    errors: [
                        utils.validates().isString({}),
                        utils.validates().isString(""),
                        utils.validates().isString([]),
                        utils.validates().isString(9),
                        utils.validates().isString(null),
                        utils.validates().isString(true),
                    ],
                },
            },
            {
                method: "isObject",
                value: {
                    success: utils.validates().isObject({
                        nome: "Aurenilson Morais",
                    }),
                    errors: [
                        utils.validates().isObject({}),
                        utils.validates().isObject(""),
                        utils.validates().isObject([]),
                        utils.validates().isObject(9),
                        utils.validates().isObject(null),
                        utils.validates().isObject(true),
                    ],
                },
            },
            {
                method: "isArray",
                value: {
                    success: utils.validates().isArray({
                        nome: "Aurenilson Morais",
                    }),
                    errors: [
                        utils.validates().isArray({}),
                        utils.validates().isArray(""),
                        utils.validates().isArray([]),
                        utils.validates().isArray(9),
                        utils.validates().isArray(null),
                        utils.validates().isArray(true),
                    ],
                },
            },
            {
                method: "isEmail",
                value: {
                    success: utils
                        .validates()
                        .isEmail("aurenilsonmorais@hotmail.com"),
                    errors: [
                        utils.validates().isEmail({}),
                        utils.validates().isEmail(""),
                        utils.validates().isEmail([]),
                        utils.validates().isEmail(9),
                        utils.validates().isEmail(null),
                        utils.validates().isEmail(true),
                    ],
                },
            },
            {
                method: "hasLastname",
                value: {
                    success: utils.validates().hasLastname("aurenilson morais"),
                    errors: [
                        utils.validates().hasLastname({}),
                        utils.validates().hasLastname(""),
                        utils.validates().hasLastname([]),
                        utils.validates().hasLastname(9),
                        utils.validates().hasLastname(null),
                        utils.validates().hasLastname(true),
                    ],
                },
            },
            {
                method: "hasObject",
                value: {
                    success: utils.validates().hasObject("name", {
                        name: "aurenilson",
                        lastname: "morais",
                    }),
                    errors: [
                        utils.validates().hasObject({}),
                        utils.validates().hasObject(""),
                        utils.validates().hasObject([]),
                        utils.validates().hasObject(9),
                        utils.validates().hasObject(null),
                        utils.validates().hasObject(true),
                    ],
                },
            },
        ],
    },
];
console.log(tests);
