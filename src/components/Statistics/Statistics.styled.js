import styled from '@emotion/styled'

export const StatisticSection = styled.section`
width: 250px;
margin: 20px auto;

background-color:rgb(245,245,245);
border-radius:8px; 
`

export const Title = styled.h2`
color: gray;
font-size: 16px;
font-weight: 700;
text-transform: uppercase;
line-height: 1.125;
margin: 0;
margin-bottom: 12px;
text-align:center` 

export const StatsList = styled.ul`
padding: 0;
display:flex;
text-align: center;
width: 250px;
height: 40px;
margin: 0;
border-radius: 8px; 
overflow: hidden;
`

export const StatsItem = styled.li`
display:flex;
justify-content: center;
flex-direction:column;
width: 50px;
height: 40px;
gap:5px;
color: white;
`

export const Label = styled.span`
font-size:10px;
font-weight: 400;
`

export const Percentage = styled.span`
font-size: 14px;
font-weight: 500;
`