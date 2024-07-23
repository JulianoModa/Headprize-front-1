import { useDragAndDrop } from "../../hooks/useDragAndDrop"
import { altera_fluxo } from "../../services/vagas.service"

import { ContainerCards } from "./ContainerCards"


const typesHero = ['Pendente', 'Selecionado', 'Rejeitado']

export const DragAndDrop = (props) => {
    const {data, openCandModal} = props
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data);

    const handleUpdateListHook = async (id, status) => {
        await altera_fluxo(id, status)
        console.log("handleUpdateList => ", id, status)
        handleUpdateList(id, status)
    }

    return (
        <div className="grid">
            {
                typesHero.map(container => (
                    <ContainerCards
                        items={listItems}
                        status={container}
                        key={container}
                        openCandModal={openCandModal}
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateListHook}
                    />
                ))
            }
        </div>
    )
}