import SideBar from "../SideBar";
import Titulo from "../Inventory/Titulo"
import Search from "../Inventory/Search";
import Filters, { Sort } from "../Inventory/Filters";
import ButtonAccept from "../Inventory/Button";
import Item from "../Inventory/Item"
import Placeholder from "../Inventory/placeholder";
import { Label } from "reactstrap";


export default function CreateEditNotes(){
    return(
        <div class="min-h-screen bg-gray-100">
            <div class = "place-content-start flex flex-rows gap-10">
                <SideBar />
                <div class = "h-fit items-start text-old-lavender flex flex-col w-11/12 my-5 ">
                    <div class="flex flex-row ml-12 self-center w-10/12 my-5 ">
                    <Titulo titulo={"Crear/Editar Notas"}/>
                    <Search/>
                    </div>
                    <div class="flex flex-row ml-52 pl-3 mb-5 gap-4 self-start w-4/12">
                        <Filters/>
                        <Sort/>
                        <ButtonAccept texto={"Aceptar"}/>
                    </div>
                    <div class = "self-center flex flex-col my-5 w-9/12">
                            <Item Nombre={"Producto"} cantidad={"Cantidad:-"} precio={"Precio $"} linea={"Categoria-Linea"} pantalla={"Crear/ Editar Nota"} />
                            <Item Nombre={"Producto"} cantidad={"Cantidad:-"} precio={"Precio $"} linea={"Categoria-Linea"} pantalla={"Crear/ Editar Nota"}/>
                             <Item Nombre={"Producto"} cantidad={"Cantidad:-"} precio={"Precio $"} linea={"Categoria-Linea"} pantalla={"Crear/ Editar Nota"}/>
                    </div>

                    <div class=" place-items-end  inset-x-0 bottom-0 h-16">
                         <ButtonAccept texto={"Crear"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}