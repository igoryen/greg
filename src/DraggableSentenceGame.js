import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DraggableSentenceGame() {
    const { fileId } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    // fetch lesson JSON dynamically
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`/data/cnici/${fileId}.json`);
                if (!res.ok) throw new Error("Could not load JSON");
                const json = await res.json();

                const randomized = json.map((obj) => {
                    const entries = Object.entries(obj);
                    const randomizedEntries = [...entries].sort(() => Math.random() - 0.5);
                    return randomizedEntries.map(([key, value]) => ({
                        key,
                        value,
                    }));
                });

                setData(randomized);
            } catch (e) {
                setError(e.message);
            }
        }
        fetchData();
    }, [fileId]);

    function handleOnDragEnd(result, rowIndex) {
        if (!result.destination) return;

        const items = Array.from(data[rowIndex]);
        const [moved] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, moved);

        const newData = [...data];
        newData[rowIndex] = items;
        setData(newData);
    }

    function checkCorrectness(row) {
        return row.map((item, i) => {
            const prev = row[i - 1];
            if (!prev) return false;
            return Number(item.key) === Number(prev.key) + 1;
        });
    }

    function isRowCorrect(row) {
        return row.every((item, i) => Number(item.key) === i + 1);
    }

    if (error) return <div>Error: {error}</div>;
    if (!data.length) return <div>Loading...</div>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Lesson: {fileId}</h2>
            {data.map((row, rowIndex) => {
                const correctness = checkCorrectness(row);
                const correctRow = isRowCorrect(row);
                return (
                    <div
                        key={rowIndex}
                        style={{
                            border: correctRow ? "2px solid green" : "2px solid #ccc",
                            marginBottom: "10px",
                            padding: "10px",
                        }}
                    >
                        <DragDropContext
                            onDragEnd={(result) => handleOnDragEnd(result, rowIndex)}
                        >
                            <Droppable droppableId={`row-${rowIndex}`} direction="horizontal">
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        style={{ display: "flex", gap: "1px", flexWrap: "wrap" }}
                                    >
                                        {row.map((item, i) => (
                                            <Draggable
                                                key={item.key}
                                                draggableId={`${rowIndex}-${item.key}-${i}`}
                                                index={i}
                                            >
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            padding: "10px",
                                                            border: "1px solid #000",
                                                            borderRadius: "5px",
                                                            background: correctness[i]
                                                                ? "lightgreen"
                                                                : "lightgray",
                                                            ...provided.draggableProps.style,
                                                        }}
                                                    >
                                                        {item.value}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                );
            })}
        </div>
    );
}

export default DraggableSentenceGame;
