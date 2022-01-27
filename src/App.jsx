import React from 'react';

import Random from './components/basics/Random'
import Fragment from './components/basics/Fragment';
import WithProps from './components/basics/WithProps';
import First from './components/basics/First';
import Card from './components/layout/Card';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import ListStudents from './components/repeat/ListStudents';
import ProductsTable from './components/repeat/ProductsTable';
import EvenOrOdd from './components/condition/EvenOrOdd';

import './App.css'

export default _ =>
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card title="#08 - Renderização Condicional" backgroundColor="lightpink">
        <EvenOrOdd number={4}></EvenOrOdd>
      </Card>
      <Card title="#07 - Desafio de Repetição" backgroundColor="orange">
        <ProductsTable />
      </Card>
      <Card title="#06 - Repetição" backgroundColor="	yellowgreen">
        <ListStudents />
      </Card>
      <Card title="#05 - Componente com Filhos" backgroundColor="purple">
        <Family surname="Silva">
          <FamilyMember name="Pedro" />
          <FamilyMember name="Jacir" />
          <FamilyMember name="Claúdia" />
        </Family>
      </Card>
      <Card title="#04 - Desafio Aleatório" backgroundColor="red">
        <Random min={1} max={10} />
      </Card>
      <Card title="#03 - Fragmento" backgroundColor="blue">
        <Fragment />
      </Card>
      <Card title="#02 - Com Propriedades">
        <WithProps title="Nota do aluno:" name="Paulo" grade={8.2} />
      </Card>
      <Card title="#01 - Primeiro Componente" backgroundColor="green">
        <First></First>
      </Card>
    </div>
  </div >
