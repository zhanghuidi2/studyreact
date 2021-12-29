function render(vnode, container) {
  console.log('vnde', vnode);
  // vnode-》node
  // vnode -> node
  const node = createNode(vnode);
  // node插入到container中
  container.appendChild(node);
}
function isString(type) {
  console.log(typeof type)
  return typeof type == 'string'
}
// v-node => node
function createNode(vnode) {
  const { type } = vnode
  if (isString(type)) {
    // 节点元素
    return updateHostComponent(vnode)
  } else if (typeof type == 'function') {
    // 函数组建
    return type.prototype.isReactComponent ? updateClassComponent(vnode) : updateFunctionComponent(vnode)
  } else {
    // 文本元素
    return updateTextComponent(vnode)
  }
}
// 节点元素vnode->node
function updateHostComponent(vnode) {
  const { type, props } = vnode
  const node = document.createElement(type)
  // 协调子节点
  reconcileChildren(node, props.children)
  // 更新属性
  updateNode(node, props);
  return node
}
// 文本元素vnode->node
function updateTextComponent(vnode) {
  const node = document.createTextNode(vnode)
  return node
}
// 函数组建
function updateFunctionComponent(vnode) {
  const { type, props } = vnode
  const jsx = type(props)
  // v -> n
  return createNode(jsx)
} 
// 类组建
function updateClassComponent(vnode) {
  const { type, props } = vnode
  const jsx = new type(props).render()
  // v -> n
  return createNode(jsx)
}

// 协调
function reconcileChildren(node, children) {
  const newChildren = Array.isArray(children) ? children : [children]
  newChildren.forEach(item => {
    render(item, node)
  })
}
// 更新属性
function updateNode(node, props) {
  Object.keys(props).filter(item => item != 'children').forEach(key => {
    node[key] = props[key]
  })
}
export default {render}