import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import Section from './UI/Section'
import Slider from './Slider/Slider'
import Tabs from './Tab/Tabs'
import { FeaturesList } from './Tab/dataFeatures'
import { dataSlides } from './Slider/dataSlides'
import { dataBenefits } from './Benefits/dataBenefits'


export const MainContent = () => {
    return (
        <>
            <Slider data={dataSlides} />
            <Section>
                <Tabs data={FeaturesList} />
            </Section>
            <Section>
                <Benefits data={dataBenefits} />
            </Section>
        </>
    )
}
