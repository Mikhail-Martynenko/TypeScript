//1. Написать тип для функции, которая принимает один аргумент - число или строку. Если пришло число - возвращает {d: 1}, если пришла строка {z: 2}

function f<T extends string | number>(arg: T): T extends number ? { d: 1 } : { z: 2 } {
    return typeof arg === 'number' ? {d: 1} : {z: 2} as any;
}

f(1).d
f("t").z

//2. Реализовать класс SomeClass:

type SomeClassArgs = Record<string, unknown>;

class SomeClass<T extends SomeClassArgs> {
    run<K extends keyof T>(methodName: K, args: T[K] | null): void {
        console.log(`Called ${String(methodName)} with argument ${args}`);
    }
}

const a = new SomeClass<
    {
        runMethodOne: number;
        runMethodTwo: void;
    }
>();

a.run("runMethodOne", 1);
a.run("runMethodTwo", null);

//a.run("runMethodsdjhfbs", null); // Type error
//