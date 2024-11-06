import React from "react";
import CardMenu from "../custom/CardMenu";
import { cardChoice } from "../MainPage/styles";

export const MenuPage = () => {
    return (<main className={
        `
        absolute
        bg-[#BBEE85] 
        w-full
        min-h-height-w-h-t 
        min-[744px]:min-h-height-w-h
        `
        }>
        <section className="min-[1440px]:px-10 min-[1000px]:px-6 min-[375px]:px-4 pb-[60px]">
            <h1 className="font-oswald text-headerLessMain min-[1440px]:text-headerLess uppercase pt-[64px]">Меню</h1>

            <div className={`
                grid 
                min-[744px]:grid-cols-12 
                min-[375px]:grid-cols-4
                gap-5 
                min-[744px]:pt-[40px] 
                min-[375px]:pt-[65px]
                `}>
                <CardMenu title='Шаурма' type='shawarma' tabletHuge />

                <CardMenu title='Піца' type='pizza' tabletHuge />

                <div className={`
                    flex 
                    items-center 
                    justify-center 
                    min-[744px]:col-span-3 
                    min-[480px]:col-span-2 
                    min-[375px]:col-span-2 
                    size-full
                    `}>
                    <h2 className={`font-oswald ${cardChoice} uppercase`}>
                        Обирай.
                        Міксуй.
                        Смакуй.
                    </h2>
                </div>

                <CardMenu title='Фрі і нагетси' type='free' tabletHuge />

                <div className="min-[375px]:block min-[744px]:hidden col-span-4"></div>
                
                <CardMenu title='Млинці' type='cakes' tabletHuge />

                <CardMenu title='Напої' type='drinks' tabletHuge />
            </div>
        </section>

        <section>
            <div className="min-[480px]:block min-[375px]:hidden pb-[54px] overflow-hidden">
                <div className="flex gap-2 bg-[#FFE9DE] w-full">
                    {[1, 2, 3, 4, 5].map(id => (<React.Fragment key={id}>
                        <p className="block min-[480px]:text-lismall min-[1440px]:text-li font-oswald uppercase">Обирай.</p>
                        <p className="block min-[480px]:text-lismall min-[1440px]:text-li font-oswald uppercase">Міксуй.</p>
                        <p className="block min-[480px]:text-lismall min-[1440px]:text-li font-oswald uppercase">Смакуй.</p>
                    </React.Fragment>))}
                    
                </div>
            </div>
        </section>
    </main>);
}