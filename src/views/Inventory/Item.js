import { Show, Update, Delete, Note, Dolar } from "./Button"
import Imagen from "./Imagen"
import { InputQuantity2 } from "./Inputs";


export default function Item({Nombre, imagen, cantidad,precio, linea, pantalla, imagens }){
    let botones = [];
    switch(pantalla){
        case "Inventario":
            botones = [<Show/>, <Update/>, <Delete/>]
        break;
        case "Cliente":
            botones = [<Note/>,<Show/>, <Delete/>, <Update/>]
        break;
        case "Notas":
            botones = [<Show/>, <Dolar/>, <Update/>, <Delete/>]
        break;
        case "Lineas y categorias":
            botones = [<Update/>, <Delete/>]
        break;
        case "Crear/ Editar Nota":
            botones = [<InputQuantity2/>, <Delete/>]
        break;
        case "Añadir Producto":
            botones = [<Show/>, <InputQuantity2/>]
        break;
    }
    let arr = [<Imagen/>]
    switch(imagens){
        case "Inventario":
            arr = [<Imagen/>]
        break;
        case "Cliente":
            arr = []
        break;
        case "Notas":
            arr = []
        break;
        case "Lineas y categorias":
            arr = []
        break;
        case "Crear/ Editar Nota":
            botones = [<Delete/>]
        break;
    }

    return(
        <div>
            <script src="//unpkg.com/alpinejs" defer></script>
            <div class="border-solid border-old-lavender border-2 bg-pale-pink mb-3 flex w-full max-w-screen-xl transform flex-col justify-between p-6 text-old-lavender lg:flex-row lg:p-4">
                <div class="flex w-full flex-row lg:w-1/2">
                    <div class="relative flex flex-col">
                        {arr}
                    </div>
                    <div class="ml-4 self-center overflow-x-hidden">
                        <div class="w-full truncate text-xl font-bold leading-5 tracking-tight">{Nombre}</div>
                        <div class="text-sm">{cantidad}</div>
                    </div>
                </div>

                <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0">
                <div class="text-xl font-bold leading-5 tracking-tight">
                            <span class="align-middle">{precio}</span>
                        </div>
                </div>

                <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0">
                    <div class="ml-1">
                        <div class="text-xl font-bold leading-5 tracking-tight">
                            <span class="align-middle">{linea}</span>
                        </div>
                    </div>
                </div>

                <div class="w-full self-center px-1 pt-4 pb-2 lg:w-1/6 lg:px-0 lg:pt-0 lg:pb-0">
                    <div class="flex flex-row space-x-4 lg:pr-6">
                        {botones}
                    </div>
                </div>
            </div>
        </div>   
    )
}