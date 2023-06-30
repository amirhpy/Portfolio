import React from 'react';

// shared
import HeadComponent from '../shared/HeadComponent/HeadComponent';

// icon
import telegram from '../../assets/svg/Telegram.svg'
import discord from '../../assets/svg/Discord.svg'
// import dots from '../../assets/svg/dots.svg'

const Contacts = () => {
    return (
        <section className='relative mt-28'>
            {/* <img src={dots} alt='dots' className='absolute -left-10 top-16 hidden lg:block' /> */}
            <div className='container'>
                <div className='mb-12'>
                    <HeadComponent nameComponent='contacts' lineHidden='w-36' hidden='hidden' />
                </div>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-full sm:w-1/2'>
                        <p className='font-fira-500'>
                            I’m interested in freelance opportunities.
                            However, if you have other request or question,
                            don’t hesitate to contact me
                        </p>
                    </div>
                    <div className='w-full sm:w-1/2 flex justify-end mt-12 sm:mt-0'>
                        <div className='border p-4 w-full sm:w-52 flex flex-col border-gray'>
                            <p className='font-fira-600 text-white'>Message me here</p>
                            <div className='mt-4'>
                                <p className='flex items-center'>
                                    <img src={telegram} alt='telegram' className='mr-1' />
                                    09362931516
                                </p>
                                <p className='flex items-center mt-2'>
                                    <img src={discord} alt='discord' className='mr-1' />
                                    amir_hpy#3097
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;