export interface NavbarItemType {
   
    label: string,
    href: string,
    isDropDown: boolean,
    dropDownData?: Array<NavbarItemType>,
};


export const NavbarArray: Array<NavbarItemType> = [
    {
        label: "Female",
        href: "/female/Female",
        isDropDown: true,
        dropDownData: [
            {
                label: "Dresses",
                href: "/female/Dress",
                isDropDown: false,
            },
            {
                label: "T-Shirts",
                href: "/female/T-Shirts",
                isDropDown: false,
            },
            {
                label: "Pents",
                href: "/female/Pants",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href: "/female/Jackets",
                isDropDown: false,
            },
            {
                label: "Sweater",
                href: "/female/Sweater",
                isDropDown: false,
            },
        ]
    },
    {
        label: "Male",
        href: "/male/Male",
        isDropDown: true,
        dropDownData: [
            {
                label: "Sweaters",
                href: "/male/Sweater",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href: "/male/Jackets",
                isDropDown: false,
            },
        ]
    },
    {
        label: "Kids",
        href: "/Kid",
        isDropDown: false,
    },
    {
        label: "All Products",
        href: "/products",
        isDropDown: false,
    },
];