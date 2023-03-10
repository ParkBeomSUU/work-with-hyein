import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

const Content = ({title, children}) => (
    <form onSubmit={() => console.log("!")}>
        <Title>{title}</Title>
        {children}
    </form>
);

export default Content;