import Link from '@docusaurus/Link';
import { Tile } from '@tairu/react-dom'
import CodeBlock from '@theme/CodeBlock';

import styles from './styles.module.css'

export default function HomepageDisplayTile() {
  return <div className="container">
    <div className="row">
      <div className="col text--center">
        <h2>Display as you need</h2>
        <p>Use agents such as the <Link to="/docs/agents/react-dom">React DOM library</Link> to easily integrate Tiles in your UIs.</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className={styles.displayTile}>
          <CodeBlock language='jsx'>{`<Tile url="https://tairu.dev/tiles/hello.json" />`}</CodeBlock>
          <Tile url="/tiles/hello.json" />
        </div>
      </div>
    </div>
  </div>
}