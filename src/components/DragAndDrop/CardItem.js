export const CardItem = ({ data, handleDragging, onClick }) => {

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)

    return (
        <div
            className='card-container'
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onClick={() => onClick(data)}
        >
            <div className="card-controller">
                {data.user != null && data.user != undefined && <>
                    <img src={data.user.foto_perfil == null || data.user.foto_perfil == null ? "https://static.thenounproject.com/png/220984-200.png" : data.user.foto_perfil} />
                    <p>{data.user.nome}</p>
                    </>
                }
                
            </div>
        </div>
    )
}