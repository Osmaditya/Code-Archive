function Msg({ name, colr }) {
  return (
    <div>
      <h1 style={{ color: colr }}>Hello {name}!</h1>
    </div>
  );
}

export default Msg;
