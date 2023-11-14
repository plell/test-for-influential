import styled from "styled-components";
import {
  Image,
  LeftBar,
  ListItem,
  RightBar,
  Tile,
  TileProps,
  Wrapper,
} from "../constants";
import { useState } from "react";
import { TextField } from "../ui";

const list = [
  { title: "Account Type", desc: "Select your account type" },
  { title: "Personal Info", desc: "Setup your personal info" },
  { title: "Verification", desc: "Verify your account" },
  { title: "Creator Info", desc: "Setup creator details" },
  { title: "Completed", desc: "Your account is created" },
];

const footerItems = ["Terms", "Plans", "Contact Us"];

export const Login = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <Wrapper>
      <Left selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Right selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </Wrapper>
  );
};

type Leftprops = {
  selectedItem: number;
  setSelectedItem: (n: number) => void;
};
const Left = ({ selectedItem, setSelectedItem }: Leftprops) => {
  return (
    <LeftBar>
      <div style={{ height: 60 }} />
      <InnerWrap>
        <Image src='logo.svg' style={{ marginBottom: 100 }} />
        {list.map((l, i) => {
          const selected = selectedItem === i;
          return (
            <div key={i}>
              <ListItem onClick={() => setSelectedItem(i)}>
                <Tile selected={selected}>{i + 1}</Tile>
                <C>
                  <T selected={selected}>{l.title}</T>
                  <D>{l.desc}</D>
                </C>
              </ListItem>
              {i < list.length - 1 && <Gap />}
            </div>
          );
        })}
      </InnerWrap>

      <Footer>
        <Flex style={{ justifyContent: "space-evenly", width: "100%" }}>
          {footerItems.map((s, i) => {
            return <FooterTxt key={i}>{s}</FooterTxt>;
          })}
        </Flex>
      </Footer>
    </LeftBar>
  );
};

type CheckProps = {};

const StyledCheckbox = styled.div<CheckProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 3px;
  transition: all 150ms;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid #e1e3ea;
`;

const Accept = styled.span`
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 107.692% */
  color: #5e6278;
  margin: 0 7px;
`;

const Title = styled.div`
  color: #181c32;
  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 100% */
  letter-spacing: -0.24px;
  margin-bottom: 16px;
`;

const Desc = styled.div`
  color: #a1a5b7;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
`;

type BtnProps = {
  selected: boolean;
};

const Btn = styled.div<BtnProps>`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  max-height: 93px;
  width: 100%;
  height: 93px;
  border-radius: 8px;
  user-select: none;

  color: #181c32;

  ${(p) =>
    !p.selected
      ? ` border: 1px dashed var(--gray-gray-400, #D8D8E5);
background: #FFF;`
      : `border: 1px dashed #2884ef;
background: #eef6ff;`}

  cursor: pointer;
`;
type Pro = {
  setSelectedItem: (n: number) => void;
};

const Form1 = (props: Pro) => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div>
      <div
        style={{
          width: 538,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Title>Choose an account type</Title>
        <Desc>
          If you need more info, please visit our{" "}
          <span style={{ color: "#3E97FF", cursor: "pointer" }}>
            help page.
          </span>
        </Desc>
      </div>
      <Flex style={{ marginTop: 35 }}>
        <IconButton
          selected={selectedItem === 0}
          onClick={() => setSelectedItem(0)}
          text='Creator'
          subText='Sign-up as a creator'
          icon='user-square.svg'
        />
        <Space />
        <IconButton
          selected={selectedItem === 1}
          onClick={() => setSelectedItem(1)}
          text='Agency'
          subText='Sign-up as an agency'
          icon='briefcase.svg'
        />
      </Flex>

      <FloatRight>
        <PrimeBtn onClick={() => props.setSelectedItem(1)}>Continue</PrimeBtn>
      </FloatRight>
    </div>
  );
};

const GSignIn = styled.div`
  display: flex;
  height: 38px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 6px;
  border: 1px solid #e1e3ea;
  background: #fff;
  color: #7e8299;
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
  padding: 0 12px;
`;

const OrWithEmail = styled.div`
  color: #a1a5b7;
  text-align: center;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
  margin: 0 5px;
`;

const Line = styled.div`
  display: flex;
  height: 1px;

  width: 100%;
  gap: 10px;
  flex: 1 0 0;
  background: #eff2f5;
`;

const Spacer = styled.div`
  width: 10px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #a1a5b7;
  stroke-width: 2px;
`;

type H = {
  hide: boolean;
  onClick: () => void;
};

const Hider = ({ hide, onClick }: H) => {
  return (
    <HidePassword onClick={onClick}>
      <Image
        src={hide ? "security.svg" : "security2.svg"}
        style={{ width: 16, height: 16 }}
      />
    </HidePassword>
  );
};

const Form2 = () => {
  const [checked, setChecked] = useState(false);
  const [p1, setP1] = useState(true);
  const [p2, setP2] = useState(true);
  return (
    <div style={{ width: 390 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 35,
        }}
      >
        <Title>Account Details</Title>
        <Desc>Add you personal info</Desc>
      </div>
      <Flex>
        <GSignIn>
          <Image src='google.svg' />
          <div>Sign in with Google</div>
        </GSignIn>
        <Spacer />
        <GSignIn
          style={{
            border: "1px solid  #E1E3EA",
            background: "#F9F9F9",
          }}
        >
          <Image src='apple.svg' />
          <div>Sign in with Google</div>
        </GSignIn>
      </Flex>
      <Flex
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          margin: "35px 0",
        }}
      >
        <Line />
        <OrWithEmail>Or with email</OrWithEmail>
        <Line />
      </Flex>

      <Flex style={{ width: "100%", justifyContent: "space-between" }}>
        <TextField placeholder='First Name' />
        <Spacer style={{ minWidth: 20 }} />
        <TextField placeholder='Last Name' />
      </Flex>
      <TextField placeholder='Creator Name' />
      <TextField placeholder='Email' />
      <TextField placeholder='Phone Number' type='tel' />

      <Relative>
        <TextField placeholder='Password' type={p1 ? "password" : "text"} />
        <Hider hide={p1} onClick={() => setP1(!p1)} />
      </Relative>

      <Relative>
        <TextField
          placeholder='Confirm Password'
          type={p2 ? "password" : "text"}
        />
        <Hider hide={p2} onClick={() => setP2(!p2)} />
      </Relative>

      <Flex style={{ userSelect: "none" }}>
        <StyledCheckbox onClick={() => setChecked(!checked)}>
          <Icon style={{ opacity: checked ? 1 : 0 }} viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        </StyledCheckbox>
        <Flex>
          <Accept>I Accept the </Accept>
          <Link>Terms</Link>
        </Flex>
      </Flex>

      <PrimeBtn>Continue</PrimeBtn>

      <Already>
        Already have an Account?{" "}
        <span style={{ color: "#3E97FF", cursor: "pointer" }}>Sign in</span>
      </Already>
    </div>
  );
};

const Already = styled.div`
  color: #a1a5b7;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
`;

const Relative = styled.div`
  position: relative;
`;

const Space = styled.div`
  min-width: 22px;
  width: 22px;
`;

const Link = styled.div`
  color: #3e97ff;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 107.692% */
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
`;

type P = {
  text: string;
  subText: string;
  icon: string;
  selected: boolean;
  onClick?: () => void;
};

const Btext = styled.div`
  color: #181c32;
  margin-bottom: 8px;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 106.667% */
`;

const Bsubtext = styled.div`
  color: #7e8299;

  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 161.538% */
`;

const IconButton = ({ text, subText, icon, selected, onClick }: P) => {
  return (
    <Btn selected={selected} onClick={onClick}>
      <Flex style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Image style={{ marginRight: 16 }} src={icon} />
        <div>
          <Btext>{text}</Btext>
          <Bsubtext>{subText}</Bsubtext>
        </div>
      </Flex>
    </Btn>
  );
};

type Rightprops = {
  selectedItem: number;
  setSelectedItem: (n: number) => void;
};

const Right = ({ selectedItem, setSelectedItem }: Rightprops) => {
  return (
    <RightBar>
      {selectedItem === 0 ? (
        <Form1 setSelectedItem={setSelectedItem} />
      ) : selectedItem === 1 ? (
        <Form2 />
      ) : null}
    </RightBar>
  );
};

const HidePassword = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
  color: #000;
  cursor: pointer;
`;

const FloatRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 35px;
`;

const PrimeBtn = styled.div`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 6px;
  background: #3e97ff;
  cursor: pointer;
  margin-bottom: 20px;
  user-select: none;
  color: #ffffff;
`;

const FooterTxt = styled.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  color: #50cd89;
  cursor: pointer;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  width: calc(100% - 70px);

  margin-top: 100px;
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Gap = styled.div`
  display: flex;
  width: 1px;
  max-height: 46px;
  height: 46px;

  margin: 6px 0 6px 32px;
  border-left: 1px dashed rgba(255, 255, 255, 0.3);
`;

const C = styled.div`
  margin-left: 20px;
`;
const T = styled.div<TileProps>`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 100% */
  letter-spacing: -0.2px;
  margin-bottom: 10px;
  opacity: ${(p) => (p.selected ? 1 : 0.7)};
  transition: opacity 0.2s;
  user-select: none;
`;
const D = styled.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 107.692% */
  opacity: 0.5;
  user-select: none;
`;
