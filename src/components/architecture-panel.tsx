export function ArchitecturePanel() {
  return <div className="architecture-panel" aria-label="React, Laravel and MySQL application architecture">
    <div className="panel-top"><span className="signal" /><span className="signal" /><span className="signal" /><span className="panel-title">system.map</span></div>
    <div className="architecture-body"><div className="node react-node"><span>01</span><strong>React</strong><small>Interface layer</small></div><i className="connector connector-a" /><div className="node api-node"><span>02</span><strong>REST API</strong><small>Laravel backend</small></div><i className="connector connector-b" /><div className="node database-node"><span>03</span><strong>MySQL</strong><small>Data layer</small></div></div>
    <div className="panel-footer"><span><b className="live-dot" /> SYSTEM READY</span><span>v1.0.0</span></div>
  </div>;
}
