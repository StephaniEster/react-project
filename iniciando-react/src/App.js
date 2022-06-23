import React from "react";

function App(props) {

const modificarNome = event => {

}

  const criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano"];
    const comboBoxOpcoes = opcoes.map((opcao) => <option>{opcao}</option>);
    return(
      <select>
      {comboBoxOpcoes}
      </select>
    ) 
  };

  const MeuComboBox = () => criaComboBox();
  return (
    <>
      <input
        type="text"
        value={props.name}
        onChange={modificarNome}
      />
      <h1>Hello {props.name} sua idade é {props.idade}</h1>
      <MeuComboBox />
    </>
  );
}

export default App;
