import React from 'react'
import styled from 'styled-components'
import Task from './task';
import { Droppable } from 'react-beautiful-dnd'



const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    display: flex;
    flex-direction: row;
    `;
const Title = styled.h3`
    padding: 8px;
    min-width: 50px
`;
const StopsList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
    display: flex;
    min-width: 200px
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} direction='horizontal'>
                {(provided, snapshot) => ( 
                <StopsList
                ref={provided.innerRef} 
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}>
                    {this.props.tasks.map((task, index) => (<Task key={task.id} task={task} index={index} />))}
                    {provided.placeholder}
                </StopsList>
                )}
                </Droppable>
            </Container>
        )
    }
}