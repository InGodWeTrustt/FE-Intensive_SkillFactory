import React from 'react'
import styled from 'styled-components'
import Benefits from '../components/Benefits/Benefits'
import Section from './UI/Section'
import Slider from './Slider/Slider'
import Tabs from './Tab/Tabs'
import { FeaturesList } from './Tab/dataFeatures'
import { dataSlides } from './Slider/dataSlides'

const Main = styled.main`
    display: flex;
    justify-content:center;
    padding: 100px;
 `

export const MainContent = () => {
    return (
        <Main>
            <Section>
                <Slider data={dataSlides}/>
            </Section>
            <Section>
                <Tabs  data={FeaturesList}/>
            </Section>
            {/* <Section>
                <Benefits />
            </Section> */}
        </Main>
    )
}
