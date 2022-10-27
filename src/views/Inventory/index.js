import SideBar from '../SideBar';
import Item from './Item';

export default function Inventory(){
    return (  
        <div class="min-h-screen bg-gray-100">
            <div class = "place-content-start flex flex-rows gap-10">
                <SideBar />
                <div class = "h-fit items-start text-old-lavender flex flex-col w-11/12 my-5 ">
                    <div class="flex flex-row ml-12 self-center w-10/12 my-5 border-old-lavender border-2">
                        <div class = "m-3 h-fit w-10 px-2 self-start border-solid flex flex-auto"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <h1 class="cursor-pointer text-3xl font-bold">Inventario</h1>
                        </div>
                        <div class = "mr-28 my-3 h-fit w-fit self-end border-solid flex border-old-lavender border-2 ">
                            <form action="" class="relative mx-auto w-max">
                                <input type="search" 
                                    class="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border border-old-lavender bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-persian-pink focus:pl-16 focus:pr-4" />
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-old-lavender stroke-old-lavender px-3.5 peer-focus:border-persian-pink peer-focus:stroke-persian-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </form>
                        </div>
                    </div>
                    
                    <div class="flex flex-row ml-44 mb-5 self-start w-2/12 border-old-lavender border-2">

                    </div>

                    <div class = "self-center flex flex-col my-5 w-9/12">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    );
}