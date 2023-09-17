import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Visão geral',
        icon: dashboard,
        link: '/dashboard'
    },
   
    {
        id: 3,
        title: "Meus gastos",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Meus ganhos",
        icon: expenses,
        link: "/dashboard",
    },                                                                                                                       
]