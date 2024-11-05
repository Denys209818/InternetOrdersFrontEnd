import React from 'react';
import * as Styles from './styles';
import CardMenu from '../custom/CardMenu';
import Button from '../custom/Button';
import LiItem from '../custom/LiItem';

export const MainPage: React.FC = () => {
    const sectionStyles = `
        ${Styles.sectionLargeStyle}
        ${Styles.sectionPhoneStyle}
        ${Styles.sectionSmallphoneStyle}
        ${Styles.sectionStyle}
        ${Styles.sectionTabletStyle}
        `;
    
    const forkBlue = `
        min-[1440px]:translate-x-negative-left-fork 
        min-[1000px]:translate-x-negative-left-fork-main
        min-[375px]:translate-x-negative-left-fork-tablet
        min-[1440px]:w-[215px]
        min-[744px]:w-[139px]
        min-[480px]:w-[100px]
        min-[375px]:w-[74px]
        `;

    const titleHead = `
        min-[1440px]:text-headerHuge 
        min-[1000px]:text-headerHugeMain
        min-[744px]:text-headerHugeTablet
        min-[375px]:text-headerHugePhone
    `;

    const minTitleHead = `
        min-[1440px]:text-headerLess
        min-[1000px]:text-headerLessMain
        min-[375px]:text-headerLessTablet
    `;

    const cardChoice = `
        min-[1440px]:text-cardChoice
        min-[1000px]:text-cardChoiceMain
        min-[375px]:text-cardChoiceTablet
    `;

    const betterMarkupLeft = `
        min-[1440px]:col-start-1 min-[1440px]:col-end-7
        min-[1000px]:col-start-1 min-[1000px]:col-end-8
        min-[744px]:col-start-1 min-[744px]:col-end-10
        min-[375px]:col-span-4
    `;

    const betterMarkupRight = `
        min-[1440px]:col-start-7 min-[1440px]:col-end-13
        min-[744px]:col-start-1 min-[744px]:col-end-13
        min-[375px]:col-span-4
    `;

    const imgElse = `
        min-[1440px]:size-[325px]
        min-[1000px]:size-[300px]
        min-[744px]:size-[215px]
        min-[480px]:size-[200px]
        min-[375px]:size-[163px]
    `;

    const imgElseTitle = `
        min-[1440px]:col-start-1 min-[1440px]:col-end-10
        min-[744px]:col-start-1 min-[744px]:col-end-13
        min-[375px]:col-span-4
    `;

    const imgColLeft = `
        min-[1440px]:col-start-1 min-[1440px]:col-end-2
        min-[744px]:col-start-1 min-[744px]:col-end-3
        min-[375px]:col-start-1 min-[375px]:col-end-2
    `;

    const imgColRight = `
        min-[1440px]:col-start-2 min-[1440px]:col-end-13
        min-[744px]:col-start-3 min-[744px]:col-end-13
        min-[375px]:col-start-2 min-[375px]:col-end-4
    `;

    const hugeText = `
        min-[1000px]:text-headerHuge 
        min-[375px]:text-headerHugeMain
    `;

    return (<main className={
        `
        block
        bg-[#9CC2FF] 
        w-full
        min-h-height-w-h-t 
        min-[744px]:min-h-height-w-h
        min-[1440px]:pt-[328px]
        min-[375px]:pt-[160px]
        `
        }>

        <section className={`max-w-[1440px] m-auto ${sectionStyles}`}>
            <h2 className={`font-oswald ${minTitleHead}`}>Шаурма, піцца, млинці</h2>
            <h1 className={`relative block font-oswald ${titleHead}`}>
                Створи своє– <br/>обирай інгредієнти сам!

                <div className={`
                    absolute 
                    top-0 
                    left-[100%] 
                    ${forkBlue} 
                    min-[744px]:translate-y-negative-top-fork 
                    min-[480px]:translate-y-negative-top-phonefork 
                    min-[375px]:translate-y-negative-top-smallphonefork 
                    block
                    `}>
                    <div className="relative pb-[152.5%]">
                        <div className="absolute top-0 left-0 size-full bg-[url('/src/images/Fork.svg')] bg-cover"></div>
                    </div>
                </div>
            </h1>

            <div className={`
                grid 
                min-[744px]:grid-cols-12 
                min-[375px]:grid-cols-4
                gap-5 
                min-[744px]:pt-[120px] 
                min-[375px]:pt-[65px]
                `}>
                <CardMenu title='Шаурма' type='shawarma' />

                <CardMenu title='Піца' type='pizza' />

                <div className={`
                    flex 
                    items-center 
                    justify-center 
                    min-[744px]:col-span-3 
                    min-[480px]:col-span-2 
                    min-[375px]:col-span-2 
                    size-full
                    `}>
                    <h2 className={`font-oswald ${cardChoice} uppercase`}>Буде дуже смачно</h2>
                </div>

                <CardMenu title='Млинці' type='cakes' />

                <div className='min-[744px]:col-start-4 min-[744px]:col-end-10 col-span-4 py-16'>
                    <Button title='Перейти до меню' background='black' sizeBtn='huge'/>
                </div>
            </div>
        </section>

        <section className={'bg-[#FFE9DE] ' + sectionStyles}>
            <div className="max-w-[1440px] m-auto">
                <div className='block w-52'>
                    <div className='relative block pb-[77%]'>
                        <div className="absolute left-0 top-0 size-full bg-[url('/src/images/HandCheese.svg')] bg-cover"></div>
                    </div>
                </div>

                <div className={`
                    grid 
                    min-[744px]:grid-cols-12 
                    min-[375px]:grid-cols-4
                    gap-x-6 
                    min-[375px]:gap-y-8 
                    min-[744px]:pt-16 
                    min-[375px]:pt-10
                    `
                    }>
                    <div className={"flex flex-col gap-6 " + betterMarkupLeft}>
                        <h2 className={`
                            font-oswald 
                            min-[744px]:text-headerLess 
                            min-[375px]:text-headerHugePhone 
                            uppercase
                            `}>
                                Що робить нас найкращіми?
                        </h2>

                        <p className='font-lato min-[1440px]:text-paragraph min-[375px]:text-paragraphMain'>
                            Ми віримо, що їжа може бути і смачною, і збалансованою! Ми використовуємо лише якісні інгредієнти.  Але це ще не все – ми вже прорахували білки, жири та вуглеводи, щоб вам було зручно планувати своє харчування на день. 
                        </p>
                    </div>

                    <div className={`
                        min-[744px]:grid 
                        min-[744px]:grid-cols-12 
                        gap-6 pb-[72px] 
                        min-[1000px]:flex 
                        min-[1440px]:flex-col 
                        min-[1000px]:flex-row 

                        min-[1000px]:justify-center 
                        min-[1000px]:items-baseline
                        min-[1440px]:items-center 

                        min-[375px]:flex 
                        min-[375px]:flex-col
                        ` + betterMarkupRight}>
                        <LiItem
                            title='Конструктор страв'
                            description='Наш конструктор страв допоможе створити ідеальне поєднання смаків.'
                            type='chat'
                        />

                        <LiItem
                            title='Підрахунок кБЖУ'
                            description='Страви з даними про білки, жири та вуглеводи. Вашого гармонійного харчування.'
                            type='pie'
                        />

                        <LiItem
                            title='На зручний час'
                            description='Замовляйте наперед і вкажіть зручний для вас час готовності замовлення.'
                            type='time'
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className={'bg-[#FFFFFF] py-[72px] overflow-hidden' + sectionStyles}>
            <div className={`
                grid 
                min-[744px]:grid-cols-12 
                min-[375px]:grid-cols-4
                items-end 
                gap-x-5 
                max-w-[1440px] 
                m-auto
                `}>
                <div className={`
                    flex 
                    min-[375px]:flex-col 
                    min-[744px]:flex-row 
                    min-[744px]:items-end 
                    min-[375px]:items-start 
                    gap-5 
                    ${imgElseTitle}
                    `}>
                    <h1 className={`font-oswald ${hugeText} uppercase text-right`}>Щось?<br/>Ще</h1>

                    <p className='font-oswald text-else uppercase'>
                        Загляньте у соцмережі за рецептами клієнтів, але тихіше – Планктон десь близько!
                    </p>
                </div>

                <div className={`${imgColLeft} pt-[90px]`}>
                    <div className='mx-[15px] w-full'>
                        <div className="relative block w-full pb-[136.3%]">
                            <div className="absolute top-0 left-0 size-full bg-cover bg-[url('/src/images/Plancton.svg')]"></div>
                        </div>
                    </div>
                </div>

                <div className={`${imgColRight} pt-[90px]`}>
                    <div className={`
                        relative 
                        min-[375px]:left-[20px] 
                        min-[744px]:left-[40px] 
                        flex min-[744px]:gap-5 
                        min-[375px]:gap-4
                        `}>
                        <div className={`relative ${imgElse} shrink-0 border-2 border-black`}>
                            <div className="absolute size-full bg-cover bg-[url('/src/images/new1.png')]"></div>
                        </div>

                        <div className={`relative ${imgElse} shrink-0 border-2 border-black`}>
                            <div className="absolute size-full bg-cover bg-[url('/src/images/new2.png')]"></div>
                        </div>

                        <div className={`relative ${imgElse} shrink-0 border-2 border-black`}>
                            <div className="absolute size-full bg-cover bg-[url('/src/images/new3.png')]"></div>
                        </div>

                        <div className={`relative ${imgElse} shrink-0 border-2 border-black`}>
                            <div className="absolute size-full bg-cover bg-[url('/src/images/new4.png')]"></div>
                        </div>
                    </div>
                </div>

                <div className='min-[375px]:col-span-4 min-[744px]:col-start-4 min-[744px]:col-end-10 py-16'>
                    <Button title='Instagram' additionalImage='instagram' background='black' sizeBtn='huge'/>
                </div>
            </div>
        </section>
    </main>);
}