import './App.css';
import ReactTask from './Components/ReactTask';
import Form1 from './reusable-components/Form1';
import MultiSelect from './reusable-components/MultiSelect';
import TaskForm from './reusable-components/TaskForm';
import TextFields from './reusable-components/TextFields';
function App() {
  const textfieldata = [
    { label: "Device Name", value: "DCZNTR1R01R07" },
    { label: "Device Type", value: "Router" },
    { label: "Device Model", value: "Cisco 2901" },
    {label:"Device Serial Number",value:"FHK12345678"}

  ];

  const textfieldata1 = [
    { label: "Router 1 ", value: "Airtel" },
    { label: "OPM SERVER-1", value: "Router" },
    { label: "Device Model", value: "Cisco 2901" },
    { label: "Device Serial Number", value: "FHK12345678" },
    { label: "Device IP Address", value: "78788" },
    { label: "Device MAC Address", value:"255.255.255.254"},
     { label: "OPM SERVER-1", value: "Router" }
     
  ];

  const textfieldata2 = [
    { label: "Router 1 ", value: "Airtel" },
    { label: "OPM SERVER-1", value: "Router" },
    { label: "Device Model", value: "Cisco 2901" },
    { label: "Device Serial Number", value: "FHK12345678" },
    { label: "Device IP Address", value: "78788" },
    { label: "Device MAC Address", value:"78454"}
  ];
  return (
    <>
      <h1>REUSABLE</h1>
      
     {/* <TaskForm 
      buttontext={"Assign Credential"}
      buttontext1={"Submit"}
      buttontext2={"Close"}
      inputlabeltext={"Assign Credential"}
      inputlabeltext1={"Additional Comments"}
      status={"Status"}
      heading={"Add Device"}
      textfield1={"Device Name"}
      textfield2={"Device Type"}
      textfield3={"Business Unit"}
      textfield4={"Business Vertical"}
      textfield5={"Add Title"}
      textfield6={"Host Name"}

     /> */}
    
<Form1 textfieldata={textfieldata} xs={4}/>
<Form1 textfieldata={textfieldata1} xs={6}/>
<Form1 textfieldata={textfieldata2} xs={12}/>

    {/* <ReactTask /> */}
    </>
  );
}

export default App;
