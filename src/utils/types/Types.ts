export interface pnlProps {
    trend: 'up'|'down',
    pnl: string,
    badge?: boolean
}

export interface cardProps extends pnlProps {
    icon: string,
    title:string,
    amount: number,
    period: string
  }

export interface flowProps {
    icon: string,
    amount: string,
    pnl:pnlProps,
    children: React.ReactNode
}