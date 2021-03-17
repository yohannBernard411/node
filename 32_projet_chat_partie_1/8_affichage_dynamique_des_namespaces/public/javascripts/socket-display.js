function createNamespaceItem(namespace) {
  const li = document.createElement('li');
  li.classList.add('item-namespace', 'p-3', 'mb-1');
  li.innerHTML = `<img src="${ namespace.imgUrl }" />`;
  return li;
}

function displayNamespaces(namespaces){
  const namespacesContainer = document.querySelector('.list-namespaces');
  const items = namespaces.map(namespace => createNamespaceItem(namespace) );
  namespacesContainer.innerHTM = "";
  namespacesContainer.prepend(...items);

}