import { createContext, useState } from "react";
import Form from "./components/Form";

const initialFormData = {
  id: "",
  password: "",
  confirmPassword: "",
};

// useContext
export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
});

function App() {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <Form />
    </FormContext.Provider>
  );
}

export default App;
