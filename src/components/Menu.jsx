import React from 'react'
import { MenuList } from './MenuList'

const elements = [
  {
    id: 1,
    el: 'Домой'
  },
  {
    id: 2,
    el: 'Особенности'
  },
  {
    id: 3,
    el: 'Преимущества'
  }
]

export const Menu = () => <MenuList data={elements} />
