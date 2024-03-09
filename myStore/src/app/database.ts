import { Category } from "./product-item/component";

export const initial_categories: Category[] = [
    new Category("Техника", [
        {
            name: 'Робот-пылесос Xiaomi Robot Vacuum S10+ BHR6368EU белый',
            images:
                [
                    "https://resources.cdn-kaspi.kz/img/m/p/hc3/hcc/67013518852126.jpg?format=gallery-medium",
                    "https://resources.cdn-kaspi.kz/img/m/p/hfa/h63/67013519376414.jpg?format=gallery-medium"
                ],
            real_link: "https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-bhr6368eu-belyi-108100032/?c=750000000",
            price: 169938,
            description: 'Робот Пылесос XIAOMI',
            rating: 5.0
        },
       
    ]),
    new Category("Телефоны и аксессуары", [
        {
            name: 'iPhone 13 Pro Max',
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium",
            ],
            real_link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
            price: 699,
            description: 'iPhone 13 Pro Max - мощный смартфон с одной из лучших камер на рынке.',
            rating: 7.0
        },
        {
            name: 'Samsung Galaxy S20+',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hfe/h35/64006416695326.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/samsung-galaxy-s20-12-128gb-chernyi-101207141/?c=750000000",
            price: 579,
            description: 'Samsung Galaxy S20+ - флагманский смартфон с передовыми технологиями.',
            rating: 1.0
        },
        // Добавьте другие модели смартфонов и аксессуаров
    ]),
    new Category("Бытовая техника", [
        {
            name: 'Пылесос Deerma DX700',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000",
            price: 123,
            description: 'Deerma DX700 - мощный пылесос с высокой производительностью.',
            rating: (4 / 5) * 10
        },
        {
            name: 'Мультиварка Sunqar SQ-1100',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h12/h90/80847194161182.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/sunqar-sq-1100-chernyi-110442601/?c=750000000",
            price: 10000,
            description: 'Sunqar SQ-1100 - универсальная мультиварка для приготовления разнообразных блюд.',
            rating: 8.7
        },
        // Добавьте другую бытовую технику с аналогичными описаниями
    ]),
    new Category("Дроны и игрушки", [
        {
            name: 'Дрон Lead Honor E88',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h14/h9a/64382215749662.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/lead-honor-e88-chernyi-104266203/?c=750000000",
            price: 0,
            description: 'Lead Honor E88 - квадрокоптер для любителей аэрофотосъемки и развлечений.',
            rating: (4 / 5) * 10
        },
        {
            name: 'Детский электромобиль',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h97/hbc/64264468856862.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/999-999b-chernyi-103949669/?c=750000000",
            price: 12000,
            description: 'Детский электромобиль - увлекательная игрушка для малышей.',
            rating: 7.34
        },
        // Добавьте другие дроны и игрушки с аналогичными описаниями
    ])
];
