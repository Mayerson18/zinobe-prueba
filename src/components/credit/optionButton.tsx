import * as React from "react";

interface propsButton {
    title: string
}

const OptionButton = (props: propsButton) => {

  return (
    <button
      key={name}
      className={"active"}
      style={{
        display: 'flex',
        position: 'relative',
        left: '40%',
        top: '1em'
      }}
    >
      {props.title}
    </button>
  );
};

export default OptionButton;
