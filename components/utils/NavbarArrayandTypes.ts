export interface NavbarItemType {
   
    label: string,
    href: string,
    isDropDown: boolean,
    dropDownData?: Array<NavbarItemType>,
};


export const NavbarArray: Array<NavbarItemType> = [
    {
        label: "Female",
        href: "/female/female",
        isDropDown: true,
        dropDownData: [
            {
                label: "Dresses",
                href: "/female/dress",
                isDropDown: false,
            },
            {
                label: "T-Shirts",
                href: "/female/t-shirt",
                isDropDown: false,
            },
            {
                label: "Pents",
                href: "/female/pant",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href: "/female/jacket",
                isDropDown: false,
            },
            {
                label: "Sweater",
                href: "/female/sweater",
                isDropDown: false,
            },
        ]
    },
    {
        label: "Male",
        href: "/male/male",
        isDropDown: true,
        dropDownData: [
            {
                label: "Sweaters",
                href: "/male/sweater",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href: "/male/jacket",
                isDropDown: false,
            },
        ]
    },
    {
        label: "Kids",
        href: "/kid",
        isDropDown: false,
    },
    {
        label: "All Products",
        href: "/products",
        isDropDown: false,
    },
];