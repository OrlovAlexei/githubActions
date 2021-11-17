import {getApplicationVars} from "./applicationVars";

function App() {
  const {baseUrl,env} =getApplicationVars()
  return (
    <div>
      <p>Environment: { env }</p>
      <p>Base Url: { baseUrl }</p>
    </div>
  );
}

export default App;