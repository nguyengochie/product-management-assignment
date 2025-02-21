export const PRODUCTS_DATA = [
    {
        id: "PRD1",
        name: "Coca cola",
        price: 10000,
        quantity: 99
    },
    {
        id: "PRD2",
        name: "Pepsi",
        price: 9000,
        quantity: 90
    },
    {
        id: "PRD3",
        name: "7up",
        price: 9000,
        quantity: 90
    },
    {
        id: "PRD4",
        name: "Sting",
        price: 8000,
        quantity: 80
    },
    {
        id: "PRD5",
        name: "Tea+",
        price: 12000,
        quantity: 88
    },
]

export const getDetailProduct = (id) => {
    return PRODUCTS_DATA.find((prd) => prd?.id === id);
}