import styled from "styled-components";
import { Image, Wrapper } from "../constants";
import { Flex, Relative } from "../Login";
import {
  CounterProps,
  counters,
  menuItems,
  pageButtons,
  tableData,
} from "./constants";
import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "../Login";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { TextField } from "../ui";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

export const Dashboard = () => {
  return (
    <>
      <Top>
        <Image src='logo2.svg' />

        <Flex>
          <IconCell>
            <Image src='Item.svg' />
          </IconCell>
          <IconCell>
            <Image src='Item-1.svg' />
          </IconCell>

          <Hover>
            <IconCell>
              <Image src='Avatar.svg' />
            </IconCell>
            <Flex style={{ marginLeft: 10, alignItems: "center" }}>
              <Image src='down.svg' />
            </Flex>
          </Hover>
        </Flex>
      </Top>
      <Wrapper style={{ maxHeight: "calc(100% - 80px)" }}>
        <LeftBar />
        <RightBar />
      </Wrapper>
    </>
  );
};

const LeftBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Left>
      {menuItems.map((m, i) => {
        return (
          <Item
            key={i}
            selected={selected === i}
            onPointerDown={() => setSelected(i)}
          >
            <Image
              src={m.icon}
              style={{ marginRight: 12 }}
              selected={selected === i}
            />
            <span>{m.title}</span>
          </Item>
        );
      })}
    </Left>
  );
};

const RightBar = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [drop1, setDrop1] = useState("");
  const [drop2, setDrop2] = useState("");

  useEffect(() => {
    if (drop1 === "Select Date") {
      console.log("select date");
    }
  }, [drop1]);
  return (
    <Right>
      <Flex
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        {drop1 === "Select Date" && (
          <Hidden>
            <RangePicker
              open={true}
              onChange={(e) => {
                const s: string = `${e[0].toDate()}`;
                setDrop1(s);
              }}
            />
          </Hidden>
        )}
        <Txt>Sort by</Txt>
        <MyDropdown
          type={"active"}
          selected={drop1}
          onChange={(e) => setDrop1(e)}
          options={[
            "Today",
            "Yesterday",
            "This Week",
            "This Month",
            "Select Date",
          ]}
          placeholder={"Today"}
        />
      </Flex>

      <Flex
        style={{ width: "100%", flexDirection: "column", margin: "30px 0" }}
      >
        <Flex style={{ justifyContent: "space-between", width: "100%" }}>
          {counters.map((c, i) => {
            return <CounterComp key={i} {...c} />;
          })}
        </Flex>
      </Flex>

      <TableWrap>
        <Flex style={{ justifyContent: "space-between", marginBottom: 20 }}>
          <Relative>
            <InputIcon>
              <Image src={"users.svg"} style={{ width: 16, height: 16 }} />
            </InputIcon>

            <TextField
              placeholder='Search'
              style={{
                borderRadius: 6,
                background: "#F9F9F9",
                width: 180,
                paddingLeft: "42px",
                marginBottom: 0,
              }}
            />
          </Relative>
          <Flex>
            <Export>
              <Image src='arrows.svg' style={{ marginRight: 5 }} />
              Export
            </Export>
            <Spacer />
            <MyDropdown
              selected={drop1}
              onChange={(e) => setDrop1(e)}
              options={[
                "Today",
                "Yesterday",
                "This Week",
                "This Month",
                "Select Date",
              ]}
              placeholder={"Today"}
            />
            <Spacer />
            <MyDropdown
              selected={drop2}
              onChange={(e) => setDrop2(e)}
              placeholder={"Status"}
              options={["Removed", "Delisted"]}
            />
          </Flex>
        </Flex>
        <table
          style={{
            borderSpacing: 30,
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <TableH>
              <th>
                <Checkbox style={{ background: "#F1F1F2", border: "none" }} />
              </th>
              {tableData.headers.map((h, i) => {
                const lastStyle =
                  i === tableData.headers.length - 1
                    ? {
                        textAlign: "right",
                      }
                    : {};

                return (
                  <th key={i} style={{ ...lastStyle }}>
                    {h}
                  </th>
                );
              })}
            </TableH>
          </thead>
          <tbody>
            {tableData.rows.map((r, i) => {
              return (
                <tr
                  style={{
                    borderTop: `1px ${i < 1 ? "dashed" : "solid"} #E1E3EA`,
                    height: 90,
                  }}
                  key={i}
                >
                  <td>
                    <Checkbox
                      style={{ background: "#F1F1F2", border: "none" }}
                    />
                  </td>
                  {r.map((d, ii) => {
                    if (d.parentStyle) {
                      return (
                        <td key={ii} style={{ ...d.parentStyle }}>
                          {" "}
                          <div style={{ ...d.style }}>
                            {d.href ? (
                              <Link href={d.href} target='_blank'>
                                {d.value}
                              </Link>
                            ) : (
                              d.value
                            )}
                          </div>
                        </td>
                      );
                    }

                    return (
                      <td key={ii} style={{ ...d.style }}>
                        {d.href ? (
                          <Link href={d.href} target='_blank'>
                            {d.value}
                          </Link>
                        ) : (
                          d.value
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Flex
          style={{
            width: "100%",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <LilButton>Total Result: 455</LilButton>

          <Flex>
            <Bulk>
              <Image src='bulk_left.svg' />
            </Bulk>
            {pageButtons.map((n, i) => {
              return (
                <PageButton
                  selected={selectedPage === n}
                  key={i}
                  onClick={() => setSelectedPage(n)}
                >
                  {n}
                </PageButton>
              );
            })}
            <Bulk>
              <Image src='bulk_right.svg' />
            </Bulk>
          </Flex>
        </Flex>
      </TableWrap>
    </Right>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: #3e97ff;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 100% */
`;

const Hidden = styled.div`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
  padding-right: 100px;
`;

const Txt = styled.div`
  color: #7e8299;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 85.714% */
  margin-right: 8px;
`;

type DropProps = {
  options: string[];
  placeholder: string;
  selected: string;
  onChange: (s: string) => void;
  type?: string;
};

const Spacer = styled.div`
  width: 20px;
`;

export const InputIcon = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  color: #000;
  cursor: pointer;
`;

const MyDropdown = ({
  options,
  placeholder,
  selected,
  onChange,
  type,
}: DropProps) => {
  const myOptions = useMemo(
    () =>
      options.map((o) => ({
        value: o,
        label: o,
        className: selected === o ? "mySelectedClassName" : "myOptionClassName",
      })),
    [selected]
  );

  return (
    <>
      <Dropdown
        placeholder={placeholder}
        className='myClassName'
        controlClassName={
          type === "active" ? "myControlClassNameActive" : "myControlClassName"
        }
        placeholderClassName='myPlaceholderClassName'
        menuClassName='myMenuClassName'
        arrowClassName='myArrowClassName'
        options={myOptions}
        value={selected}
        onChange={(option) => onChange(option.value)}
        arrowClosed={<Image src='down.svg' />}
        arrowOpen={<Image src='down.svg' />}
      />
    </>
  );
};
const Export = styled.div`
  display: flex;
  padding: 0 12px;
  align-items: center;
  height: 38px;
  border-radius: 6px;
  background: #eef6ff;
  color: #3e97ff;

  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 107.692% */
  user-select: none;
  cursor: pointer;
`;

type PageProps = {
  selected: boolean;
};

const Bulk = styled.div`
  display: flex;
  margin-left: 12px;
  width: 36px;
  padding: 9px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;

  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
  letter-spacing: -0.18px;
  cursor: pointer;
`;

const PageButton = styled.div<PageProps>`
  display: flex;
  margin-left: 12px;
  width: 36px;
  padding: 9px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: #3e97ff;
  background: ${(p) => (p.selected ? "#3e97ff" : "#fff")};
  color: ${(p) => (p.selected ? "#fff" : "#7E8299")};

  text-align: center;
  transition: all 0.2s;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
  letter-spacing: -0.18px;
  cursor: pointer;
`;

const LilButton = styled.div`
  display: flex;
  color: #a1a5b7;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: #f9f9f9;
  color: var(--gray-gray-500, #a1a5b7);

  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 10px; /* 100% */
  letter-spacing: -0.3px;
`;

const TableH = styled.tr`
  text-align: left;
  color: #a1a5b7;
  height: 58px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
`;

const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: calc(100% - 60px);

  border-radius: 12px;
  background: #fff;
`;

const CounterComp = ({
  count,
  color,
  borderBottom,
  desc,
  icon,
}: CounterProps) => {
  return (
    <Counter color={borderBottom}>
      <Flex style={{ justifyContent: "space-between" }}>
        <Numb>{count}</Numb>
        <Box color={color}>
          <Image src={`counters/${icon}.svg`} />
        </Box>
      </Flex>
      <Note>{desc}</Note>
    </Counter>
  );
};

type ItemProps = {
  selected: boolean;
};

type BoxProps = {
  color: string;
};

const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: ${(p) => p.color};
`;

type CounterProps2 = {
  color: string;
};
const Counter = styled.div<CounterProps2>`
  display: flex;
  flex-direction: column;
  width: 268px;
  min-width: 180px;
  margin-right: 10px;

  padding: 28px 27.8px;
  justify-content: center;

  gap: 8px;
  flex-wrap: wrap;
  border-radius: 12px;
  border-bottom: 3px solid ${(p) => p.color};
  background: #fff;
`;

const Numb = styled.div`
  color: #181c32;

  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px; /* 100% */
  letter-spacing: -0.68px;
`;

const Note = styled.div`
  color: #5e6278;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
`;

const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #5e6278;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 106.667% */
  width: calc(100% - 20px);
  margin-bottom: 6px;
  transition: all 0.2s;
  user-select: none;

  ${(p) =>
    p.selected &&
    `
  background:#EEF6FF;
  color:#3E97FF;`}
`;

const Hover = styled.div`
  display: inherit;
  cursor: pointer;
`;

const IconCell = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  margin-left: 10px;
`;
const Top = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  border-bottom: 1px solid #e1e3ea;
`;

const Left = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(100% - 165px);
  padding: 30px;
  overflow: auto;
  justify-content: flex-start;
  align-items: flex-start;
  background: #fff;
  width: 280px;
  overflow: auto;
  color: #ffffff;
  border-right: 1px solid var(--gray-gray-300, #e1e3ea);
  background: #fff;
`;

const Right = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: auto;
  height: calc(100% - 165px);
  width: calc(100% - 60px);
  padding: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 500px;
  background: #f6f7fa;
`;
