import React from 'react';
import ReactDOM from 'react-dom';
import { EditablePage, EditorContextHelper } from '@magnolia/react-editor';
import Home from './pages/Home';
import Basic from './pages/Basic';
import Text from './components/Text';
import List from './components/List';
import Item from './components/Item';

const nodeName = 'spa-home';
const config = {
  componentMappings: {
    'spa-lm:pages/Home': Home,
    'spa-lm:pages/Basic': Basic,
    'spa-lm:components/Text': Text,
    'spa-lm:components/List': List,
    'spa-lm:components/Item': Item,
  },
};

class App extends React.PureComponent {
  state = {};

  async componentDidMount() {
    let templateDefinitions;
    const pagesRes = await fetch(
      '/magnoliaAuthor/.rest/delivery/pages/' +
        nodeName +
        window.location.pathname.replace(new RegExp('(.*' + nodeName + '|.html)', 'g'), '')
    );
    const page = await pagesRes.json();

    if (EditorContextHelper.inEditor()) {
      const templateDefinitionsRes = await fetch(
        '/magnoliaAuthor/.rest/template-definitions/v1/' + page['mgnl:template']
      );

      templateDefinitions = await templateDefinitionsRes.json();
    }

    this.setState({ page, templateDefinitions });
  }

  render() {
    const { page, templateDefinitions } = this.state;

    return (
      <div>{page && <EditablePage content={page} config={config} templateDefinitions={templateDefinitions} />}</div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
