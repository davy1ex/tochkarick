import React from "react"
import "./BasicLayout.css"

interface Prop {
    headerChild: React.ReactNode,
    contentChild: React.ReactNode
}

export const BasicLayout = (props: Prop) => {
    return (
        <div className="basicLayoutWrapper">
            {props.headerChild}
            {props.contentChild}
        </div>

    )

}