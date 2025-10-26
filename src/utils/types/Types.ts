export interface pnlProps {
    trend?: 'up'|'down',
    pnl?: string,
    badge?: boolean
}

export interface cardProps extends pnlProps {
    icon: string,
    title:string,
    amount: any,
    period?: string,
    
  }

export interface flowProps {
    icon: string,
    amount: string,
    pnl:pnlProps,
    children: React.ReactNode
}

type data= {
    dataTitle: string,
    dataColor: string,
    data: number
}
export interface doughnutProps {
    options: data[],
    title: string,
    // total: number
}
export interface doughnutChartProps {
    chartData: data[],
    title: string,
    // totalData: number
}

export interface transactionsProp {
    transactions:{
        username: string,
        email: string,
        tnxId: string,
        tnxType: string,
        date: string,
        status: string,
        refNum: string,
        amount:number
    } []
}

export interface btnProps {
    logo: string,
    className?:string,
    children: React.ReactNode,
    onClick: () => void

}

