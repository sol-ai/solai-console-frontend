import IconButton from "../../../components/IconButton"
import React, { ReactNode } from "react"
import {
  Column,
  ColumnLeft,
  PushExampleButton,
  QueueHeader,
  QueueHeaderTitle,
  Wrapper,
} from "./elements"
import { SimulationData, SimulationResult } from "../../../services/simulation_queue/types"

type Props<T> = {
  onDeleteAll: () => void
  exampleData?: {
    onAddExampleData: () => void
    onExampleDataAccepted: () => void
    onExampleDataRejected: () => void
    editingElement?: ReactNode
  }
  queueItemsElement: ReactNode[]
}

const SingleQueue = <T extends SimulationData | SimulationResult>({
  onDeleteAll,
  exampleData,
  queueItemsElement,
}: Props<T>) => {
  const exampleDataElems = exampleData && exampleData.editingElement && (
    <div style={{ backgroundColor: "rgba(0,0,0,0.07)", borderRadius: "6px" }}>
      <ColumnLeft style={{ marginBottom: "10px" }}>
        <IconButton
          iconType={"check-light"}
          textAfter={" GO"}
          style={{ marginRight: "5px" }}
          onClick={exampleData.onExampleDataAccepted}
        />
        <IconButton
          iconType={"cross-light"}
          textAfter={" close"}
          onClick={exampleData.onExampleDataRejected}
        />
      </ColumnLeft>
      {exampleData.editingElement}
    </div>
  )

  return (
    <Wrapper>
      <QueueHeader>
        <QueueHeaderTitle>Simulations</QueueHeaderTitle>
        <Column>
          {exampleData && !exampleData.editingElement ? (
            <PushExampleButton onClick={exampleData.onAddExampleData}>
              Push example
            </PushExampleButton>
          ) : (
            <span />
          )}
          <IconButton iconType={"cross"} onClick={onDeleteAll} textAfter={" all"} />
        </Column>
        {exampleDataElems}
      </QueueHeader>
      {queueItemsElement.length === 0 ? <span>( no items )</span> : queueItemsElement}
    </Wrapper>
  )
}

export default SingleQueue
