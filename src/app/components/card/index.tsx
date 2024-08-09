"use client"
/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
import clsx from "clsx"
import IconCheck from '../../assets/icons/icon-check.svg'
import IconCheck1 from '../../assets/icons/icon-check1.svg'
import IconDollar from '../../assets/icons/icon-dollar.svg'
import IconHelp from '../../assets/icons/icon-help.svg'
import IconNa from '../../assets/icons/icon-na.svg'
import IconArrowRight from '../../assets/icons/icon-arrow-right.svg'
import IconPhone from '../../assets/icons/icon-phone.svg'
import Button from '../button';

const coffinTypes = [
    { type: 'WITH', label: 'Service with coffin'},
    { type: 'WITHOUT', label: 'Service without coffin'}
]

const cremationService = [
    'Everything in Bare Cremation'
]

const bareFuneralService = [
    'Bare Partner Venue',
    'Professional Funeral Celebrant',
    'Curated Slideshow and AV Equipment',
    'Selection of Flowers',
    'Stationery & Service Booklets',
    'Dedicated Event Manager',
    'Bare Funeral Coffine'
]
const price = {
    WITH: '$5,899',
    WITHOUT: '$3,899'
}


const Card = () => {
    const [activeService, setActiveService] = React.useState<string>('WITH')

    const sectionTitle = (title: string) => {
        return (
            <div className="sectiontitle flex justify-center my-6 items-center font-semibold">
                <div className="line bg-bareChalk w-full h-[3px]"/>
                <p className="text-nowrap mx-5">{title}:</p>
                <div className="line bg-bareChalk w-full h-[3px]"/>
            </div>
        )
    }

    const getBareFuneralService2 = () => {
        const services = [
            {
                status: 'active',
                label: 'Viewing',
                price: '$400'
            },
            {
                status: 'active',
                label: 'Premium Coffin',
                price: '$100 - $4000'
            },
            {
                status: 'active',
                label: 'Live Streaming',
                price: 'P.O.A'
            },
            {
                status: 'active',
                label: 'Catering',
                price: 'P.O.A'
            },
        ]

        if(activeService === 'WITHOUT') {
            services[0].status = 'inactive'
            services[1].status = 'inactive'
        }

        return services;
    }



    return (
        <div className="card w-[600px] rounded-xl overflow-hidden text-green1">
            <div className="card--header flex px-10 py-6 justify-between items-center bg-gray1">
                <h2 className="text-2xl font-Merriweather font-normal ">
                    Bare Funeral Service
                </h2>
                <div className="flex bg-white items-center py-3 px-8 rounded-[50px] font-OpenSans font-semibold">
                    <span className="text-sm">From</span>
                    <h2 className="text-[32px] font-semibold ml-2 mr-1 leading-[38px]">{price[activeService as keyof typeof price]}</h2>
                    <span>inc. GST</span>
                </div>
            </div>

            <div className="card--details p-5 bg-white font-OpenSans">
                <div className="description mb-8">
                    <p>
                        A complete funeral service. You may have the service prior to cremation with your loved one's coffin present, 
                        or without the coffin present after the cremation (often referred to as a memorial service).
                    </p>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <div className="flex mb-2 items-center gap-2">
                        Service type preferred
                        <IconHelp />
                    </div>
                    <div className="types flex bg-bareMint40 py-[6px] px-[10px] rounded-[100px] cursor-pointer" >
                        {
                            coffinTypes.map((type, index) => (
                                <div className={clsx('px-5 py-3 flex gap-[10px] rounded-[75px] items-center', {
                                    ['bg-white transition-all ease-in-out']: type.type === activeService
                                })} key={index} onClick={() => setActiveService(type.type)}>
                                    { type.type === activeService && <IconCheck1 />  }
                                    { type.label }
                                </div>
                            ))
                        }
                    </div>
                </div>

                {sectionTitle('Cremation Service')}
                {
                    cremationService.map((item, index) => (
                        <div className="list gap-2 flex items-center" key={index}>
                            <IconCheck />
                            <p>{item}</p>
                        </div>
                    ))
                }

  

                {sectionTitle('Bare Funeral Service')}
                {
                    bareFuneralService.map((item, index) => (
                        <div className="list gap-2 flex items-center mb-6" key={index}>
                            <IconCheck />
                            <p>{item}</p>
                        </div>
                    ))
                }

                {sectionTitle('Bare Funeral Service')}
                {
                    getBareFuneralService2().map((item, index) => (
                        <div className="list flex justify-between items-center mb-6" key={index}>
                            <div className="flex gap-2">
                                {
                                    item.status === 'active' ? <IconDollar /> : <IconNa />
                                }
                                <div className={clsx('flex items-center gap-[5px]', { ['text-gray500 '] : item.status === 'inactive'})}>
                                    {item.label}
                                    <IconHelp />
                                </div>
                            </div>
                            <p className={clsx('', { ['text-gray500 line-through'] : item.status === 'inactive'})}>{item.price}</p>
                        </div>
                    ))
                }
                <div className="flex gap-3 justify-center">
                    <Button variant='primary'>
                        <div className="flex items-center gap-3">
                            Learn More
                            <IconArrowRight/>
                        </div>
                    </Button>

                    <Button variant='outline'>
                        <div className="flex items-center gap-3">
                            <IconPhone className="text-white" />
                            1800 071 176
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )       
}


export default Card