import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const About = () => {
    return (
        <>
            <Header />
            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:text-center">
                        <h2 class="text-base font-semibold leading-7 text-indigo-600">О нас</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">МАГАЗИН КРОССОВОК LUXSHOES</p>
                        <p class="mt-6 text-lg leading-8 text-gray-600">«LuxShoes» — это интернет-магазин брендовых кроссовок в Бишкеке, который порадует многообразием ассортимента даже самого взыскательного покупателя. У Вас есть возможность не только подобрать отличную модель кроссовок на нашем сайте, но и купить их с примеркой в нашем магазине на 1-этаже ТЦ Цум, в самом центре города.</p>
                    </div>
                    <div class="mx-auto max-w-2xl lg:text-center assorti"><p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">АССОРТИМЕНТ КРОССОВОК</p></div>

                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">

                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

                            <div class="relative pl-16">
                                <h2 class="text-base font-semibold leading-7 text-indigo-600 black">Nike Inc.</h2>
                                <p class="mt-6 text-lg leading-8 text-gray-600"> американская транснациональная компания, специализирующаяся на спортивной одежде и обуви. Nike продаёт свою продукцию под собственным брендом, а также под марками Nike Golf, Nike Pro, Air Jordan.</p>

                            </div>
                            <div class="relative pl-16">
                                <h2 class="text-base font-semibold leading-7 text-indigo-600 black">adidas Originals </h2>
                                <p class="mt-6 text-lg leading-8 text-gray-600">основанная в 2001 году линия повседневной обуви от немецкого бренда. В рамках линии представлены как переиздания архивных, некогда культовых моделей, так и трендовые новинки.</p>

                            </div>
                            <div class="relative pl-16">
                                <h2 class="text-base font-semibold leading-7 text-indigo-600 black">Puma</h2>
                                <p class="mt-6 text-lg leading-8 text-gray-600">немецкий производитель спортивной одежды и обуви, ставший одним из крупнейших в мире. В коллекциях бренда возрождаются классические спортивные силуэты под актуальные тренды.</p>

                            </div>
                            <div class="relative pl-16">
                                <h2 class="text-base font-semibold leading-7 text-indigo-600 black">Saucony </h2>
                                <p class="mt-6 text-lg leading-8 text-gray-600"> американская компания, проделавшая за 60 лет существования долгий путь – от обуви для астронавтов до спортивных и повседневных кроссовок</p>

                            </div>

                        </dl>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;