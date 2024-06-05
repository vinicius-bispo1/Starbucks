import styled,{createGlobalStyle} from "styled-components";

//-----RESET GLOBAL----------------------------------
export const Globalstyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Poppins", sans-serif;
}
`;
// -----HEDAER----------------------------------------
export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 100px;
height: 17vh;
.negrito{
    font-weight: 600;
}
`;
export const BoxMenu = styled.nav`
display: flex;
width: 38vw;
`;
export const Menu = styled.ul`
width: 33vw;
display: flex;
align-items: center;
justify-content: space-evenly;
li{
    cursor: pointer;
    &:hover{
        color: #0F744B;
        font-weight: 600;
    }
}
`;
// -----MAIN--------------------------------------------
export const Main = styled.main`
height: 83vh;
display: flex;
align-items: end;
position: relative;
`;
export const BoxTitle = styled.section`
width: 50vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 98px;
padding-bottom: 100px;
`;
export const Title = styled.h1`
width: 35vw;
font-weight: 300;
font-size: 4rem;
color: #5D5D5D;
span{
    color: #037143;
    font-weight: 900;
}
`;
export const Text = styled.p`
font-weight: 500;
color: #333333;
width: 38vw;
line-height: 24px;
`;

export const Button = styled.a`
background-color: #037143;
width: 146px;
height: 42px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
color: #FEFEFE;
margin-top: 20px;
text-decoration: none;
&:hover{
    background-color:#075534;
}
`;

export const BoxImg = styled.div`
height: 20vh;
display: flex;
align-items: center;
position: absolute;
left: 34vw;
img{
    cursor: pointer;
}
`;
export const BoxImgPrincipal = styled.section`
    height: 75vh;
    width: 50vw;
    display: flex;
    background-color:${props => props.color};   
    border-radius: 100% 0px 0px 0px;
`;
export const SecondBoxImg = styled.div`
width: 45vw;
display: flex;
justify-content: center;
align-items: start;
`;
export const BoxIcone = styled.div`
 width: 10vw;
 height: 40vh;
 display: flex;
 align-items: center;
 justify-content: end;
 flex-direction: column;
 img{
    padding: 15px;
    cursor: pointer;
 }
`;
