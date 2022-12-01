import SideBar from "../SideBar";
import Titulo from "../Inventory/Titulo"
import Search from "../Inventory/Search";
import Filters, { Sort } from "../Inventory/Filters";
import ButtonAccept from "../Inventory/Button";
import Item from "../Inventory/Item"
import Placeholder from "../Inventory/placeholder";

export default function LineCategoty(){
    return(
        <div class="min-h-screen bg-gray-100">
            <div class = "place-content-start flex flex-rows gap-10">
                <SideBar />
                <div class = "h-fit items-start text-old-lavender flex flex-col w-11/12 my-5 ">
                    <div class="flex flex-row ml-12 self-center w-10/12 my-5 ">
                    <Titulo titulo={"Lineas y categorias"}/>
                    <Search/>
                    </div>
                    <div class="flex flex-row ml-52 pl-3 mb-5 gap-4 self-start w-4/12">
                        <Filters/>
                        <Sort/>
                    </div>
                    <div class="flex flex-row">
                        <div class="flex flex-row ml-52 pl-3 mb-5 gap-4 self-start w-4/12">
                            <Placeholder/>
                            <ButtonAccept texto={"Categoria"}/>
                        </div>
                        <div class="flex flex-row ml-52 pl-3 mb-5 gap-4 self-start w-4/12">
                            <Placeholder/>
                            <ButtonAccept texto={"Línea"}/>
                        </div>
                    </div>
                    <div class="flex flex-row ml-52 pl-3 gap-4  space-x-32" >
                            <div class = "self-center flex flex-col my-5 w-1/2">
                                <Item imagens={"Lineas y categorias"} Nombre={"Categoria"} pantalla={"Lineas y categorias"}/>
                                <Item imagens={"Lineas y categorias"} Nombre={"Categoria"} pantalla={"Lineas y categorias"}/>
                                <Item imagens={"Lineas y categorias"} Nombre={"Categoria"} pantalla={"Lineas y categorias"}/>
                            </div>
                            <div class = "self-center flex flex-col my-5 w-1/2">
                                <Item imagens={"Lineas y categorias"} Nombre={"Linea"} pantalla={"Lineas y categorias"}/>
                                <Item imagens={"Lineas y categorias"} Nombre={"Linea"} pantalla={"Lineas y categorias"}/>
                                <Item imagens={"Lineas y categorias"} Nombre={"Linea"} pantalla={"Lineas y categorias"}/>
                            </div>
                    </div>
                </div>
            </div>
    </div>
    )
}