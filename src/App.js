import QRCode from 'qrcode.react';
import { useState } from 'react';
import './app.css'

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="container">
      <h1>Poc QRcode</h1>
      <label htmlFor="input">Digite o conteudo do QRcode</label>
      <input id="input" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <QRCode
        value={value}
        size={200}
        bgColor='white'// css colors
        fgColor='black'// css colors
        level='L'
      />
    </div>
  );
}

export default App;
