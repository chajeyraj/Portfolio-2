// Minimal test component with no dependencies
export default function TestComponent() {
  console.log('TestComponent is rendering');
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'red', 
      color: 'white',
      fontSize: '24px'
    }}>
      <h1>TEST COMPONENT WORKING!</h1>
      <p>React is rendering correctly</p>
    </div>
  );
}