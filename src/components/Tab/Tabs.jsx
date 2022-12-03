import React, { useState } from 'react'
import styled from 'styled-components'


const StyledTabContainer = styled.div`
 display: flex;
`

const StyledTabList = styled.div`
    border-bottom: 1px solid transparent;
	cursor: pointer;
	margin-right: 32px;
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.83rem;
	color: rgba(66, 74, 87, 0.5);;
`

const StyledTabItem = styled.h3`

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

    const changeTab = e => setActiveTabIndex(e.target.dataset.tabIdx);
    return (
        <>
            <StyledTabContainer>
                <StyledTabList>

                </StyledTabList>
                <TabContent value={data[activeTabIndex].description} />
            </StyledTabContainer>
        </>
    )
}

export default Tabs