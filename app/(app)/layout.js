export default function Layout(props) {
  return (
    <div className="app-layout">
      {props.children}
      {props.modal}
    </div>
  );
}
