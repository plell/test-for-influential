import styled from "styled-components";

export const Wrapper = styled.div`
height:100%;
background:#fff;
min-height:100%;
min-width:100%;
display:flex;
flex-shrink:0;
flex-grow:0;
`

export const LeftBar = styled.div`
display:flex;
position:relative;
flex-direction:column;
height:calc(100% - 70px);
padding:35px;
justify-content:space-between;
align-items:center;
background:#036cea;
min-width:500px;
background-image: url('hex.svg');
background-size:cover;
overflow:auto;
color: #ffffff;
`
export const RightBar = styled.div`
display:flex;
position:relative;
flex-direction:column;
height:calc(100% - 80px);
padding:40px;
overflow:auto;
width:100%;
justify-content:center;
align-items:center;
min-width:500px;

`

export const ListItem = styled.div`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
`


type ImageProps = {
    src: string
    selected?: boolean
}
export const Image = styled.img<ImageProps>`
src:url('${p => p.src}');
background-repeat:no-repeat;
background-size:contain;


`

export const Svg = styled.svg<ImageProps>`
src:url('${p => p.src}');


`

export type TileProps = {
    selected: boolean;
}

export const Tile = styled.div<TileProps>`
display: flex;
width: 46px;
height: 46px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 9px;
border: 1px dashed rgba(255, 255, 255, 0.30);
background: ${p => p.selected ? '#5acf8f' : 'rgba(255, 255, 255, 0.05)'};
transition: background 0.2s;
user-select: none;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 100% */
letter-spacing: -0.18px;
`