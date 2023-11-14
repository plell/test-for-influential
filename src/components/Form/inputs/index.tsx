import {
  Input,
  TextField,
  TextArea,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FloatLabel,
  ToggleButton,
  FieldWrap,
} from "../../ui";

export default function MyInput(props: any) {
  let label = props.label;
  if (props.price) label += ` (+$${props.price})`;
  if (props.error) label += ` (${props.error})`;

  function getMuiWrap(el: any) {
    return (
      <FieldWrap key={props.name}>
        <FormControl fullWidth>{el}</FormControl>
      </FieldWrap>
    );
  }

  switch (props.type) {
    case "space":
      return <div style={{ height: 30, textAlign: "center" }}>{label}</div>;
    case "header":
      return (
        <div
          style={{
            fontSize: 20,
            width: "100%",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          {label}
        </div>
      );
    case "subheader":
      return (
        <div
          style={{
            fontSize: 18,
            width: "100%",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          {label}
        </div>
      );
    case "element":
      return props.element;
    case "text":
      return getMuiWrap(
        <>
          <FloatLabel err={props.error}>{label}</FloatLabel>
          <Input
            placeholder=''
            value={props.value || ""}
            // label={props.label}
            onChange={(e: any) => {
              props.handleChange(e.target.value);
            }}
          />
        </>
      );
    case "textarea":
      return getMuiWrap(
        <>
          <FloatLabel err={props.error}>{label}</FloatLabel>
          <Input
            multiline
            maxRows={4}
            placeholder=''
            value={props.value || ""}
            // label={props.label}
            onChange={(e: any) => {
              props.handleChange(e.target.value);
            }}
          />
        </>
      );

    case "number":
      return getMuiWrap(
        <>
          <FloatLabel err={props.error}>{label}</FloatLabel>
          <Input
            placeholder=''
            value={props.value || ""}
            // label={props.label}
            onChange={(e: any) => {
              const value = e.target.value.trim();
              if (value && isNaN(value)) return;
              props.handleChange(value);
            }}
          />
        </>
      );
    case "toggleButtons":
      return (
        <>
          <InputLabel err={props.error}>{label}</InputLabel>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.options?.map((o: any, i: number) => {
              let toggleState = props.value || "";
              let selected = toggleState === o;

              if (props.multi) {
                toggleState = props.value || [];
                selected = toggleState.includes(o);
              }

              const thisPrice = props.prices ? props.prices[i] : null;

              return (
                //   @ts-ignore
                <ToggleButton
                  selected={selected}
                  value={selected}
                  style={{ marginRight: 10 }}
                  key={i + "toggle_" + props.name}
                  variant='text'
                  onClick={() => {
                    if (props.multi) {
                      if (selected) {
                        const rmIndex = toggleState.findIndex(
                          (f: any) => f === o
                        );
                        toggleState.splice(rmIndex, 1);
                      } else {
                        toggleState.push(o);
                      }
                    } else {
                      if (selected && !props.neverNull) toggleState = null;
                      else toggleState = o;
                    }
                    props.setFieldValue(props.name, toggleState);
                  }}
                >
                  {o}
                  {thisPrice && ` (+$${thisPrice})`}
                </ToggleButton>
              );
            })}
          </div>
          <div style={{ height: 16 }} />
        </>
      );

    case "select":
      const price = props.prices;
      return getMuiWrap(
        <>
          <InputLabel err={props.error}>{label}</InputLabel>
          <Select
            value={props.value}
            label={label}
            onChange={(e: any) => {
              props.handleChange(e.target.value);
            }}
          >
            {props.options.map((o: any, i: number) => {
              return (
                <MenuItem key={i + "options"} value={o}>
                  {o} {props.prices && `($${props.prices[i]})`}
                </MenuItem>
              );
            })}
          </Select>
        </>
      );

    default:
      return <></>;
  }
}
