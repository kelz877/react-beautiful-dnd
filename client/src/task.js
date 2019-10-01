import React from 'react';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
 

const Container = styled.div`
    margin-bottom: 8px;
    border: 1px solid lightgrey;
    padding: 8px;
    border-radius: 2px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}

    display: flex;
    `;


export default class Task extends React.Component {
    render() {
        return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided, snapshot) => (
        <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
        >
            
        {this.props.task.content} 
        </Container>
            )}
        </Draggable>
        )
    }
}