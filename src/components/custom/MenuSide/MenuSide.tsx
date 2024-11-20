import { Link } from "react-router-dom"

export const MenuSide = () => {
    return (<aside id="menu" className="fixed bg-[#BBEE80] z-30 size-full top-0 left-0">
        <div className="flex h-full flex-col justify-between pt-[102px] pb-[54px]">
            <nav>
                <ul className="list-none p-0">
                    <li className="block px-2 py-[18px]">
                        <Link to='/menu' className="block text-center font-lato text-asideMenu">Меню</Link>
                    </li>

                    <li className="block px-2 py-[18px]">
                        <Link to='/' className="block text-center font-lato text-asideMenu">Кошик</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex flex-col gap-y-6 text-center">
                <div className="flex justify-center gap-2">
                    <div className="block size-8 p-1">
                        <div className="relative size-full">
                            <div className="absolute top-0 left-0 size-full bg-instagram bg-hover"></div>
                        </div>
                    </div>

                    <div className="block size-8 p-1">
                        <div className="relative size-full">
                            <div className="absolute top-0 left-0 size-full bg-viber bg-hover"></div>
                        </div>
                    </div>

                    <div className="block size-8 p-1">
                        <div className="relative size-full">
                            <div className="absolute top-0 left-0 size-full bg-telegram bg-hover"></div>
                        </div>
                    </div>
                </div>

                <p className="block p-1 font-lato text-black text-menu tracking-tighter">+380 63 888 62 62</p>
                <p className="block p-1 font-lato text-black text-menu tracking-tighter">+380 99 888 62 62</p>
            </div>
        </div>
    </aside>)
}