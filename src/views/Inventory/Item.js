import { Show, Update, Delete, Note } from "./Button"


export default function Item({Nombre, imagen, cantidad,precio, linea,inventario }){
    return(
        <div>
            <script src="//unpkg.com/alpinejs" defer></script>
            <div class="border-solid border-old-lavender border-2 bg-pale-pink mb-3 flex w-full max-w-screen-xl transform flex-col justify-between p-6 text-old-lavender lg:flex-row lg:p-4">
                <div class="flex w-full flex-row lg:w-3/12">
                    <div class="relative flex flex-col">
                        <div class="flex h-12 w-12 flex-shrink-0 flex-col justify-center rounded-full bg-slate-200 bg-opacity-50 dark:bg-slate-600">
                          {imagen}
                        </div>
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
                        {inventario ? <Note/> : <></>}
                        <Show/>
                        <Delete/>
                        <Update/>
                    </div>
                </div>
            </div>
        </div>   
    )
}