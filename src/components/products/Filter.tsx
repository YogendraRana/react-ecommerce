
const Filter = () => {

    return (
        <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-[0.5rem]">
                <h2 className="text-[1.75rem]">Sort by Price</h2>
                <select className="w-full p-[1rem] text-[1.25rem] rounded-[0.5rem]">
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>

            <div>
                <h2 className="text-[1.75rem]">Price Range</h2>
                <div className="flex flex-col gap-[1rem]">
                    <input 
                        className="w-[100%] p-[0.75rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]" 
                        type="text" 
                        placeholder="Min" 
                    />
                    <input 
                        className="w-[100%] p-[0.75rem] text-[1.25rem] border rounded-[0.5rem] placeholder:text-[1.25rem]" 
                        type="text" 
                        placeholder="Max" 
                    />
                </div>
            </div>

            <div className="flex flex-col gap-[0.5rem] items-start">
                <h2 className="text-[1.75rem]">Categories</h2>
                <label className="text-[1.25rem]">
                    <input className="h-[1.5rem] w-[1.5rem] mr-[0.75rem] cursor-pointer" type="checkbox" name="option1" /> Shirt
                </label>
                <label className="text-[1.25rem]">
                    <input className="h-[1.5rem] w-[1.5rem] mr-[0.75rem] cursor-pointer" type="checkbox" name="option2" /> T Shirt
                </label>
                <label className="text-[1.25rem]">
                    <input className="h-[1.5rem] w-[1.5rem] mr-[0.75rem] cursor-pointer" type="checkbox" name="option3" /> Pants
                </label>
                <label className="text-[1.25rem]">
                    <input className="h-[1.5rem] w-[1.5rem] mr-[0.75rem] cursor-pointer" type="checkbox" name="option4" /> Shoes
                </label>
            </div>

            <div className="flex flex-col gap-[0.5rem] items-start">
                <h2 className="text-[1.75rem]">Brand</h2>
                <label className="text-[1.25rem]">
                    <input className="h-[1.5rem] w-[1.5rem] mr-[0.75rem] cursor-pointer" type="checkbox" name="option1" /> Brand 1
                </label>
                <label className="text-[1.25rem]">
                    <input className="h-[1.5rem] w-[1.5rem] mr-[0.75rem] cursor-pointer" type="checkbox" name="option2" /> Brand 2
                </label>
                <label className="text-[1.25rem]">
                    <input className="h-[1.5rem] w-[1.5rem] mr-[0.75rem] cursor-pointer" type="checkbox" name="option3" /> Brand 3
                </label>
                <label className="text-[1.25rem]">
                    <input className="h-[1.5rem] w-[1.5rem] mr-[0.75rem] cursor-pointer" type="checkbox" name="option4" /> Brand 3
                </label>
            </div>
        </div>
    );
};

export default Filter;