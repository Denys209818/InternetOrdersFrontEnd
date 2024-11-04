import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (<header className="absolute z-10 w-full flex py-2 px-2">
        <div className="flex h-full w-full gap-x-8">
            <h1 className="uppercase font-bold text-2xl tracking-tighter font-oswald text-nowrap">Ще щось?</h1>

            <nav className="block w-full">
                <ul className="flex list-none m-0 py-px justify-between items-center">
                    <li>
                        <Link to='' className="text-[20px] font-normal font-lato tracking-tighter min-[375px]:hidden min-[744px]:inline">Меню</Link>
                    </li>

                    <li>
                        <ul className="flex items-center list-none m-0 p-0 gap-8">
                            <li className="flex gap-2 items-center">
                                <Link to='/' className="block text-[20px] font-normal font-lato tracking-tighter">Кошик</Link>  

                                <div className="flex items-center">
                                    <div className="block relative pb-[100%] w-6 h-0">
                                        <div className="absolute size-full bg-[url('/src/images/Basket.svg')]"></div>
                                    </div>       
                                </div>
                            </li>

                            <li className="px-1 border-b border-black min-[375px]:hidden min-[744px]:inline">
                                <Link to='/auth?mode=login' className="text-[20px] font-normal font-lato tracking-tighter">Увійти</Link>
                            </li>

                            <li className="min-[375px]:inline min-[744px]:hidden">
                                {<div className="relative block size-6">
                                    <div className={`absolute block size-full bg-[url('/src/images/Menu.svg')] bg-cover`}></div>
                                </div>}
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
}