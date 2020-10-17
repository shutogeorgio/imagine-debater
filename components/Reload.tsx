// constructor(props) {
//   super(props);
  
//   this.state = {
//     location: ''
//   }

//   this.reloadFunc = this.reloadFunc.bind(this);
// }

// reloadFunc() {
//   location.reload();
// }

// componentDidMount() {
//   const currentLocation = window.location.pathname;
//   this.setState({
//     location: currentLocation
//   })
// {this.state.location == "/game" ? "Reload" : "リロード" }

interface ReloadProps {
  reloadTxt?: string
}

const getReloadTxt = (props: ReloadProps) => ({
  reloadTxt: props.reloadTxt || typeof window !== "undefined" && window.location.pathname == "/game" ? "Reload" : "リロード"
});

const Reload: React.FunctionComponent<ReloadProps> = (props) => {
  return (
    <button className="btn btn-info mt-3"
      onClick={() => location.reload()}
    >{getReloadTxt(props)}&#8635; </button>
  )
}

export default Reload