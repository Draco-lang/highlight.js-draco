
export default function(hljs) {
    const KEYWORDS = [
        'and',
        'else',
        'for',
        'func',
        'goto',
        'if',
        'import',
        'in',
        'intenral',
        'mod',
        'not',
        'or',
        'public',
        'rem',
        'return',
        'val',
        'var',
        'while',
    ];
    const BUILT_INS = [
        'bool',
        'char',
        'float32',
        'float64',
        'int8',
        'int16',
        'int32',
        'int64',
        'uint8',
        'uint16',
        'uint32',
        'uint64',
        'unit',
        'string',
    ];
    const LITERALS = [
        'true',
        'false',
    ];

    const ESCAPED_CHARACTER = (rawDelimiter = '') => ({
        className: 'subst',
        variants: [
            { 
                match: `\\${rawDelimiter}[0\\tnr"']`,
            },
            { 
                match: `\\${rawDelimiter}u\{[0-9a-fA-F]{1,8}\}`,
            },
        ],
    });
    const ESCAPED_NEWLINE = (rawDelimiter = "") => ({
        className: 'subst',
        match: `\\${rawDelimiter}[\t ]*(?:[\r\n]|\r\n)`,
    });
    const INTERPOLATION = (rawDelimiter = "") => ({
        className: 'subst',
        label: 'interpolation',
        begin: `\\${rawDelimiter}\{`,
        end: '\}',
    });
    const SINGLELINE_STRING = (rawDelimiter) => ({
        begin: `${rawDelimiter}"`,
        end: `"${rawDelimiter}`,
        contains: [
            ESCAPED_CHARACTER(rawDelimiter),
            INTERPOLATION(rawDelimiter),
        ],
    });
    const MULTILINE_STRING = (rawDelimiter = '') => ({
        begin: `${rawDelimiter}"""`,
        end: `"""${rawDelimiter}`,
        contains: [
            ESCAPED_CHARACTER(rawDelimiter),
            ESCAPED_NEWLINE(rawDelimiter),
            INTERPOLATION(rawDelimiter),
        ]
    });
    const STRING = {
        className: 'string',
        variants: [
            SINGLELINE_STRING(''),
            SINGLELINE_STRING('#'),
            SINGLELINE_STRING('##'),
            SINGLELINE_STRING('###'),

            MULTILINE_STRING(''),
            MULTILINE_STRING('#'),
            MULTILINE_STRING('##'),
            MULTILINE_STRING('###'),
        ],
    };

    return {
        name: 'Draco',
        case_insensitive: false,
        keywords: {
            keyword: KEYWORDS,
            built_in: BUILT_INS,
            literal: LITERALS,
        },
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            STRING,
        ],
    };
}
