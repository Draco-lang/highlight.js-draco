
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
        ],
    };
}
