import SideBar from "../SideBar";
import Titulo from "../Inventory/Titulo"
import Search from "../Inventory/Search";
import Filters, { Sort } from "../Inventory/Filters";
import ButtonAccept from "../Inventory/Button";
import Item from "../Inventory/Item"





export default function Customers(){
    return(
        <div class="min-h-screen bg-gray-100">
            <div class = "place-content-start flex flex-rows gap-10">
                <SideBar />
                <div class = "h-fit items-start text-old-lavender flex flex-col w-11/12 my-5 ">
                    <div class="flex flex-row ml-12 self-center w-10/12 my-5 ">
                       <Titulo titulo={"CLIENTE"}/>
                       <Search/>
                    </div>
                    <div class="flex flex-row ml-52 pl-3 mb-5 gap-4 self-start w-4/12">
                        <Filters/>
                        <Sort/>
                        <ButtonAccept texto={"Cliente"}/>
                    </div>
                    <div class = "self-center flex flex-col my-5 w-9/12">
                        <Item imagens={"Cliente"} Nombre={"Cliente 1"} cantidad={"saldo $0.00"} precio={"Numero de contacto: 4441234569"} pantalla={"Cliente"}/>
                        <Item imagens={"Cliente"} Nombre={"Cliente 1"} cantidad={"saldo $0.00"} precio={"Numero de contacto: 4441234569"} pantalla={"Cliente"}/>
                        <Item imagens={"Cliente"} Nombre={"Cliente 1"} cantidad={"saldo $0.00"} precio={"Numero de contacto: 4441234569"} pantalla={"Cliente"}/>
                    </div>

                </div>
            </div>
        </div>
    )
}