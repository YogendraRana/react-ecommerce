export const useStore = () => {
    const store_menu = [
        {
            id: 1,
            label: 'Men',
            href: 'store/men',
            icon: 'fa-solid fa-mars'
        },
        {
            id: 2,
            label: 'Woman',
            href: 'store/woman',
            icon: 'fa-solid fa-venus'
        },
        {
            id: 3,
            label: 'Kids',
            href: 'store/kids',
            icon: 'fa-solid fa-child-reaching'
        },
        {
            id: 4,
            label: 'Sports',
            href: 'store/sports',
            icon: 'fa-solid fa-dumbbell'
        },
        {
            id: 5,
            label: 'Jewelry',
            href: 'store/jewelry',
            icon: 'fa-regular fa-gem'
        }
    ];

    return store_menu;
}