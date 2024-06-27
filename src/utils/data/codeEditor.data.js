const data = [
    { name: "javascript", version: "18.15.0" },
    { name: "typescript", version: "5.0.3" },
    { name: "python", version: "3.10.0" },
    { name: "java", version: "15.0.2" },
    { name: "csharp", version: "6.12.0" },
    { name: "php", version: "8.2.3" },
];

const CODE_SNIPPETS = {
    javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
    python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    csharp: 'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
    php: "<?php\n\n$name = 'Alex';\necho $name;\n",
};


const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
};



const questions = [{
        name: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target",
        code: "NY",
    },
    {
        name: "Given a collection of intervals, merge all overlapping intervals.",
        code: "RM",
    },
    { name: "Reverse a singly linked list", code: "LDN" },
    {
        name: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        code: "IST",
    },
];




export { data, CODE_SNIPPETS, LANGUAGE_VERSIONS, questions }