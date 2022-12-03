import React, { useState } from 'react'
import styled from 'styled-components'


const StyledTabContainer = styled.div`
 display: flex;
 flex-direction: column;
 font-weight: 400;
font-size: 18px;
line-height: 28px;
`

const StyledTabList = styled.div`
    display: flex;
    gap: 20px;
    border-bottom: 1px solid transparent;
	cursor: pointer;
	margin-right: 32px;
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.83rem;
	color: rgba(66, 74, 87, 0.5);;
`

const StyledTabItem = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 44px;
    color: ${({active}) => active ? 'green' : ''};
    border-bottom: ${({active}) =>  active ? '1px solid green' : ''};
`

const StyledTabContent = styled.div`
  display: flex;
`

const TabContent = ({ value }) => (
    <StyledTabContainer>
        {value}
    </StyledTabContainer>
);



const Tabs = ({ data }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const { description } = data[activeTabIndex]
    const changeTab = ({ target }) => setActiveTabIndex(target.getAttribute('data-tabIdx'));
    return (
        <>
            <StyledTabContainer>
                <StyledTabList>
                    {data.map((elem, idx) => {
                        return <StyledTabItem
                            data-tabIdx={idx}
                            onClick={changeTab}
                            active={+activeTabIndex === idx}
                            children={elem.title}
                        />
                    })}
                </StyledTabList>
                <TabContent value={description} />
            </StyledTabContainer>
        </>
    )
}

export default Tabs