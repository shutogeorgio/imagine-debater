export default class Footer extends React.Component {
  render() {
    const logostyles = {
      width: 25,
      height: 25,
      marginRight: 15,
      borderRadius: 5
    }
    return(
      <footer>
          <a
            href="https://github.com/shutogeorgio"
            target="_blank"
            rel="noopener noreferrer"
            className="copy-right-text"
        >
          <img src="/logo.png" style={logostyles} />©Copyright2020 UwasS .All Rights Reserved.
          </a>
      </footer>
    )
  }
}