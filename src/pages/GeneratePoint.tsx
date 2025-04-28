import React from 'react'
import { MapInteractionPanel } from '@/widgets/map'
import { Header } from "@/shared/ui/Header/Header"
import { BasicLayout } from '@/widgets/basicLayout/ui/BasicLayout'

type Props = {

}

export const GeneratePointPage = (props: Props) => {
  return (
    <>
      <BasicLayout
        headerChild={<Header />}
        contentChild={<MapInteractionPanel />}
      />
    </>
  )
}
