import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import DataExplorer from '@nteract/transform-dataresource';

import data from './sample.json'
import schema from './sample.schema.json'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      schema
    }
    this.onChangeData = this.onChangeData.bind(this)
    this.onChangeSchema = this.onChangeSchema.bind(this)
  }
  onChangeData(newValue, e) {
    try {
      this.setState({data: JSON.parse(newValue)});
    } catch {

    }
  }
  onChangeSchema(newValue, e) {
    try {
      this.setState({schema: JSON.parse(newValue)});
    } catch {
      
    }
  }
  render() {
    const {data, schema} = this.state;
    const options = {
      selectOnLineNumbers: true
    };
    
    return (
      <>
         <table>
          <tbody>
            <tr>
              <td>
                <MonacoEditor
                  width="800"
                  height="600"
                  language="json"
                  theme="vs-dark"
                  value={JSON.stringify(data)}
                  options={options}
                  onChange={this.onChangeData}
                />
              </td>
              <td>
                <MonacoEditor
                  width="800"
                  height="600"
                  language="json"
                  theme="vs-dark"
                  value={JSON.stringify(schema)}
                  options={options}
                  onChange={this.onChangeSchema}
                />
              </td>
            </tr>
          </tbody>
        </table> 
        <DataExplorer data={{ schema, data }} />
      </>
    );
  }
}