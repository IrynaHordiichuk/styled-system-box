
import styled from 'styled-components';
import { color, space, layout, flexbox } from 'styled-system'; 
//! color, space, layout ... are functions
// а именно цвет текста и цвет бекграунда 

export const Box = styled('div')(color, space, layout, flexbox); 

// to ask teacher about this syntax