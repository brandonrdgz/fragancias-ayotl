// Crear un componente de React en JavaScript puro
const App = () => {
   return React.createElement(
     'div',
     null,
     React.createElement('h1', null, '¡Hola, React sin Node!'),
     React.createElement('p', null, 'Este es un componente simple usando React.')
   );
 };
 
 // Renderizar el componente en el DOM
 const root = document.getElementById('root');
 ReactDOM.createRoot(root).render(React.createElement(App));