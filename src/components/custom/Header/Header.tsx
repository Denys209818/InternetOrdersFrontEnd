import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (<header className="flex py-2 px-2">
        <div className="flex h-full w-full gap-x-8">
            <h1 className="uppercase font-bold text-2xl tracking-tighter font-oswald text-nowrap">Ще щось?</h1>

            <nav className="block w-full">
                <ul className="flex list-none m-0 py-px justify-between items-center">
                    <li>
                        <Link to='' className="text-[20px] font-normal font-lato tracking-tighter">Меню</Link>
                    </li>

                    <li>
                        <ul className="flex list-none m-0 p-0 gap-8">
                            <li className="flex gap-2 items-center">
                                <Link to='/' className="block text-[20px] font-normal font-lato tracking-tighter">Кошик</Link>  

                                <div className="flex items-center">
                                    <div className="block relative pb-[100%] w-6 h-0">
                                        <div className="absolute size-full bg-[url('/src/images/Basket.svg')]"></div>
                                    </div>       
                                </div>
                            </li>

                            <li className="px-1 border-b border-black">
                                <Link to='/auth?mode=login' className="text-[20px] font-normal font-lato tracking-tighter">Увійти</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
}