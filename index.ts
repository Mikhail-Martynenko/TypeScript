// TODO Enum
enum EActionMap {
    ADD = 'add',
    DELETE = 'delete',
    UPDATE = 'update',
}

const actionMap: EActionMap[] = [
    EActionMap.ADD, EActionMap.DELETE, EActionMap.UPDATE
];

// TODO Interface
interface IResult {
    0: string;
    1: number;
}

interface IFunc {
    (id: number, isActive: boolean, callback: () => void): IResult[];
}

const func: IFunc = (id, isActive, callback) => {
    return [
        ['name', 123]
    ]
}
func(1, true, () => {});

// TODO Interface
interface IItem {
    id: number;
    name: string;
    items: [] | null;
}

interface IA {
    id: number;
    name: string;
    items: IItem[]
}

const a: IA = {
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

interface IObjectN {
    [key: string]: (number) => string;
}

// Ключ может оказаться любым. Нужно создать интерфейс, описывающий объект n (типизировать ключи и значения)
const n: IObjectN = {
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