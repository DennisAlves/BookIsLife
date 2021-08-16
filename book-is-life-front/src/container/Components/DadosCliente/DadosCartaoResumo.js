import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";


const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
`
const CardFieldsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const CardLogo = styled.img`
  object-fit: contain;
  height: 25px;
  margin-right: 10px;
`


export default function DadosCartaoResumo(props) {


    return (
        <CardWrapper>
            <CardLogo
                src={props.bandeira}
            />
            <CardFieldsWrapper>

                <Typography variant="subtitle1" color="textPrimary" align="center" style={{marginRight: 5}}>
                    Final
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" align="center" style={{marginRight: 10}}>
                     {props.numero}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary" align="center" style={{marginRight: 5}}>
                    {props.valText}
                </Typography>
                <Typography  variant="subtitle1" color="textSecondary" align="center" style={{marginRight: 5}}>
                    {props.validade}
                </Typography>
            </CardFieldsWrapper>
        </CardWrapper>

    );
}
