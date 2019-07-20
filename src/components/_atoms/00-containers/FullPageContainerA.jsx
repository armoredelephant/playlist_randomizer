import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
`;

const FullPageContainerA = props => {
    const { children } = props;
    return (
        <Container>
            {children}
        </Container>
    );
}

export default FullPageContainerA;