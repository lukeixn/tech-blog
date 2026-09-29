// Keep Mermaid diagrams as source text at build time; render only on pages that contain them.
export default function remarkMermaid() {
  return (tree) => {
    function visit(node) {
      if (node.type === 'code' && node.lang === 'mermaid') {
        const escaped = node.value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
        node.type = 'html';
        node.value = `<pre class="mermaid">${escaped}</pre>`;
        delete node.lang;
        delete node.meta;
      }
      if (node.children) node.children.forEach(visit);
    }
    visit(tree);
  };
}
