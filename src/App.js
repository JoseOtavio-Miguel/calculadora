import './App.css';

import { createGlobalStyle } from 'styled-components';
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from './style';
import { useState } from 'react';


const  App = () => {
  const [calculator, setCalculator] = useState('');
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
    

  const handleEquals = () => {
    // Executa a operação atual entre o primeiro e o segundo número
    if(firstNumber !== '0' && operation != '' && currentNumber != '0') {

      console.log('operation' + operation);
      const first = Number(firstNumber);
      const second = Number(currentNumber);
      let result = 0;
      
      /* Show the operation 'History' */ 
      setCalculator(`${first} ${operation} ${currentNumber} = `);


      /* Perform the operation based on the selected operator   */
      switch(operation){
        /* Addition */
        case '+':
          result = first + second; 
          break;

        /* Subtraction */
        case '-':
          result = first - second;
          break;

        /* Division */
        case '/':
          result = first / second;
          break;

        /* Multiplication */
        case 'x':
          result = first * second;
          break;

        default:
          break;
      }
      
      /* Show the operation Result and update the main display with the result */
      setCurrentNumber(String(result));
      setFirstNumber(result);
      setOperation('');
    }
  };

  /* clear all calculator values and reset display input */
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setCalculator('');
  };

  /* Set the selecterd operation parameter (+, -, /, x) */
  const handleOperation = (op) => {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation(op);
  };

  /* Adds the clicked number to the current display value */
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  
  /* Display */
  return (
    <Container>
      <Content>
        <Input value={calculator}/>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={() => handleOperation('x')}/>
          <Button label="/" onClick={() => handleOperation('/')}/>
          <Button label="n²" onClick={() => handleOperation('**')}/>
          <Button label="C" onClick={handleOnClear}/>
        </Row> 
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleOperation('-')}/>
        </Row> 
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleOperation('+')}/>
        </Row> 
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};


export default App;
