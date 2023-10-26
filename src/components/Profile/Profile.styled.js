import styled from '@emotion/styled'


export const UserDescription = styled.div`
margin: 40px auto;
text-align: center;
width: 200px;
height: 250px;
padding-top: 50px;
border: 1px solid silver;
border-radius: 8px;
`

export const UserName = styled.p`
color: #111;
font-size: 16px;
font-weight: 700;
line-height: 1.125;
margin-top: 10px;
margin-bottom: 0;
`

export const UserInfo = styled.p`
color: gray;
font-size: 14px;
margin-top: 10px;
margin-bottom: 0;
`

export const StatsList = styled.ul`
display:flex;
justify-content: space-between;
height: 60px;
margin-top: 48px;
margin-bottom:0;
padding: 0;
background-color: lightsteelblue;
border-radius:  0 0 8px 8px; 
overflow: hidden;
`

export const StatsItem = styled.li`
display:flex;
flex-direction:column;
gap:5px;
border: 1px solid silver; 
width: 100%;
height:100%;`

export const StatsNumbers = styled.span`
color: #111;
font-size: 14px;
font-weight: 500;
`