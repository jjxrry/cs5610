import { ReactNode } from "react"
export const Highlight = ({ children }: { children: ReactNode }) => {
    return (
        <span id="wd-highlight" style={{ backgroundColor: "yellow", color: "red" }}>
            {children}
        </span>
    )
}
