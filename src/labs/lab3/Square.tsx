import { ReactNode } from "react"

export const Square = ({ children }: { children: ReactNode }) => {
    const num = Number(children)
    return <span id="wd-square">{num * num}</span>
}
