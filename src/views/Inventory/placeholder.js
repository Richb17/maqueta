export default function Placeholder(){
    return(
        <label class="relative block">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
            <input class="placeholder:italic placeholder:text-slate-400 block bg-gray-50 border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender w-full p-2.5 " placeholder="Nombre..." type="text" name="Name"/>
                          
        </label>
    )
}


//bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm