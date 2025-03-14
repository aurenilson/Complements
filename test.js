import { Utils } from "./src/utils.js";
const utils = new Utils();
const types = (f) => {
    return [
        class {},
        {},
        [],
        "is text",
        999,
        null,
        true,
        undefined,
        () => {},
        new Promise(() => {}),
    ]
        .map((item) => {
            return { type: item, value: f(item) };
        })
        .filter((item) => item.value);
};
const tests = [
    {
        name: "Masck",
        data: [
            {
                method: "Money",
                value: {
                    success: utils.masks().money("9.99"),
                    erros: types(utils.masks().money),
                },
            },
            {
                method: "credCard",
                value: {
                    success: utils.masks().credCard("5226266696818712"),
                    erros: types(utils.masks().credCard),
                },
            },
            {
                method: "zipCode",
                value: {
                    success: utils.masks().zipCode("59300000"),
                    erros: types(utils.masks().zipCode),
                },
            },
            {
                method: "birthDate",
                value: {
                    success: utils.masks().birthDate("05121987"),
                    erros: types(utils.masks().birthDate),
                },
            },
            {
                method: "cpfOrCnpj",
                value: {
                    success: utils.masks().cpfOrCnpj("05837311475"),
                    erros: types(utils.masks().cpfOrCnpj),
                },
            },
            {
                method: "cpfOrCnpj",
                value: {
                    success: utils.masks().cpfOrCnpj("51075116000120"),
                    erros: types(utils.masks().cpfOrCnpj),
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
                    erros: types(utils.strings().captalizeWord),
                },
            },
            {
                method: "captalizePhrase",
                value: {
                    success: utils
                        .strings()
                        .captalizePhrase("olá mundo, isso é um teste!"),
                    erros: types(utils.strings().captalizePhrase),
                },
            },
            {
                method: "upperCase",
                value: {
                    success: utils
                        .strings()
                        .upperCase("olá mundo, isso é um teste!"),
                    erros: types(utils.strings().upperCase),
                },
            },
            {
                method: "lowerCase",
                value: {
                    success: utils
                        .strings()
                        .lowerCase("olá mundo, isso é um teste!"),
                    erros: types(utils.strings().lowerCase),
                },
            },
            {
                method: "removeNumbers",
                value: {
                    success: utils
                        .strings()
                        .removeNumbers("O número da placa é 789, anotou aí?"),
                    erros: types(utils.strings().removeNumbers),
                },
            },
            {
                method: "removeCaracters",
                value: {
                    success: utils
                        .strings()
                        .removeCaracters("O número da placa é 789, anotou aí?"),
                    erros: types(utils.strings().removeCaracters),
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
                    erros: types(utils.strings().removeSpecialCaracters),
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
                    erros: types(utils.strings().removeHTMLTags),
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
                    erros: types(utils.links().generate),
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
                    erros: types(utils.links().breadCrumb),
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
                    erros: types(utils.links().searchParams),
                },
            },
            {
                method: "serialize",
                value: {
                    success: utils
                        .links()
                        .serialize({ page: 1, search: "coentro" }, true),
                    erros: types(utils.links().serialize),
                },
            },
        ],
    },
    {
        name: "Validates",
        data: [
            {
                method: "isNumber",
                value: {
                    success: utils.validates().isNumber(7),
                    erros: types(utils.validates().isNumber),
                },
            },
            {
                method: "isPromise",
                value: {
                    success: utils.validates().isPromise(new Promise(() => {})),
                    erros: types(utils.validates().isPromise),
                },
            },
            {
                method: "isString",
                value: {
                    success: utils.validates().isString("Olá mundo!"),
                    erros: types(utils.validates().isString),
                },
            },
            {
                method: "isObject",
                value: {
                    success: utils.validates().isObject({
                        nome: "Aurenilson Morais",
                    }),
                    erros: types(utils.validates().isObject),
                },
            },
            {
                method: "isArray",
                value: {
                    success: utils.validates().isArray([]),
                    erros: types(utils.validates().isArray),
                },
            },
            {
                method: "isEmail",
                value: {
                    success: utils
                        .validates()
                        .isEmail("aurenilsonmorais@hotmail.com"),
                    erros: types(utils.validates().isEmail),
                },
            },
            {
                method: "hasLastname",
                value: {
                    success: utils.validates().hasLastname("aurenilson morais"),
                    erros: types(utils.validates().hasLastname),
                },
            },
            {
                method: "hasObject",
                value: {
                    success: utils.validates().hasObject("name", {
                        name: "aurenilson",
                        lastname: "morais",
                    }),
                    erros: types(utils.validates().hasObject),
                },
            },
        ],
    },
];
console.log(tests);
