// TODO Enum
enum ActionMap {
    ADD = 'add',
    DELETE = 'delete',
    UPDATE = 'update',
}

const actionMap: ActionMap[] = [
    ActionMap.ADD, ActionMap.DELETE, ActionMap.UPDATE
];

type Result = [string, number]

const func = (id: number, isActive: boolean, callback: () => void): Result[] => {
    return [
        ['name', 123]
    ]
}
func(1, true, () => {});

// TODO Interface
interface Item {
    id: number;
    name: string;
    items: [] | null;
}

interface A {
    id: number;
    name: string;
    items: Item[]
}

const a: A = {
    id: 123,
    name: 'Eric',
    items: [
        {
            id: 55,
            name: 'Masha',
            items: []
        },
        {
            id: 34,
            name: 'Max',
            items: null
        }
    ]
};

interface ObjectN {
    [key: string]: (number) => string;
}

// Ключ может оказаться любым. Нужно создать интерфейс, описывающий объект n (типизировать ключи и значения)
const n: ObjectN = {
    smth: function (number) {
        return 'test';
    },
    smth2: function (number) {
        return 'test';
    },
    smth3: function (number) {
        return 'test';
    }
};