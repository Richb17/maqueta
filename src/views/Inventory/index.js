import SideBar from '../SideBar';
import Item from './Item';
import Titulo from './Titulo';
import Search from './Search';
import Filters, {Brand, Category, Sort} from './Filters';
import InputName, {InputCost, InputQuantity} from './Inputs';
import ButtonAccept, { Delete, Show, Update } from './Button';



export default function Inventory(){
    return (  
        <div class="min-h-screen bg-gray-100">
            <div class = "place-content-start flex flex-rows gap-10">
                <SideBar />
                <div class = "h-fit items-start text-old-lavender flex flex-col w-11/12 my-5 ">
                    <div class="flex flex-row ml-12 self-center w-10/12 my-5 ">
                       <Titulo titulo={"INVENTARIO"}/>
                       <Search/>
                    </div>

                    <div class="flex flex-row ml-52 pl-3 mb-5 gap-4 self-start w-4/12">
                    <Filters/>
                    <Sort/>
                    </div>

                    <div class="flex flex-row my-2 gap-3 self-center w-9/12">
                        <InputName/>
                            <Category/>
                            <Brand/>
                            <InputCost/>
                            <InputQuantity/>
                            <ButtonAccept/>
                    </div>

                    <div class = "self-center flex flex-col my-5 w-9/12">
                        <Item imagen={  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0878%2F3986%2Fproducts%2F71F3oQEOF9L._SL1500.jpg%3Fv%3D1565981435&f=1&nofb=1&ipt=a13333874bac76d9077dd410207d825dda1f96ac39f3b7957fc115e598aa56bc&ipo=images" 
                                class="z-10 h-12 w-12 rounded-full object-cover shadow hover:shadow-xl" 
                                alt="Rocky Balboa" />} Nombre={"Cepillo de cerdas suaves"} cantidad={"Cantidad: 1"} precio={"Precio $199.99"} linea={"Linea - Categoria"}  inventario={false}/>
                        <Item  imagen={  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0878%2F3986%2Fproducts%2F71F3oQEOF9L._SL1500.jpg%3Fv%3D1565981435&f=1&nofb=1&ipt=a13333874bac76d9077dd410207d825dda1f96ac39f3b7957fc115e598aa56bc&ipo=images" 
                                class="z-10 h-12 w-12 rounded-full object-cover shadow hover:shadow-xl" 
                                alt="Rocky Balboa" />} Nombre={"Cepillo de cerdas suaves"} cantidad={"Cantidad: 1"} precio={"Precio $199.99"} linea={"Linea - Categoria"} inventario={false}/>
                        <Item  imagen={  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0878%2F3986%2Fproducts%2F71F3oQEOF9L._SL1500.jpg%3Fv%3D1565981435&f=1&nofb=1&ipt=a13333874bac76d9077dd410207d825dda1f96ac39f3b7957fc115e598aa56bc&ipo=images" 
                                class="z-10 h-12 w-12 rounded-full object-cover shadow hover:shadow-xl" 
                                alt="Rocky Balboa" />} Nombre={"Cepillo de cerdas suaves"} cantidad={"Cantidad: 1"} precio={"Precio $199.99"} linea={"Linea - Categoria"} inventario={false}/>
                        <Item   imagen={  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0878%2F3986%2Fproducts%2F71F3oQEOF9L._SL1500.jpg%3Fv%3D1565981435&f=1&nofb=1&ipt=a13333874bac76d9077dd410207d825dda1f96ac39f3b7957fc115e598aa56bc&ipo=images" 
                                class="z-10 h-12 w-12 rounded-full object-cover shadow hover:shadow-xl" 
                                alt="Rocky Balboa" />} Nombre={"Cepillo de cerdas suaves"} cantidad={"Cantidad: 1"} precio={"Precio $199.99"} linea={"Linea - Categoria"} inventario={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
}