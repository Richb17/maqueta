import SideBar from '../SideBar';
import Item from './Item';

export default function Inventory(){
    return (  
        <div class="min-h-screen bg-gray-100">
            <div class = "place-content-start flex flex-row gap-10">
                <SideBar />
                <div class = "flex flex-col justify-center pt-6 pr-4 w-11/12">
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    );
}