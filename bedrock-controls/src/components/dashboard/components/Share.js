import React from 'react'
import QRCode from 'qrcode.react'

class Share extends React.Component {

  render() {

    // const styles = {
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   textAlign: 'center',
    // }

    return (
      <div>
        <div>
          <h2>Share this app</h2>
        </div>
        <div>
          <QRCode
            id="qr-code"
            value={this.props.baseURL}
            size={120}
            level={"H"}
            includeMargin={true}
          />
        </div>
      </div>
    )
  }

}

export default Share
