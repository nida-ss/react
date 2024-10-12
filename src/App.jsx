const Copy = () => {
  const copyHandler = () => {
    console.log("stop stealing my content");
  };

  return (
    <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ut saepe molestiae fugit ex id nobis nisi debitis recusandae iste? Nesciunt veritatis ad beatae odit, deleniti aut commodi quas dolore.</p>
  );
};

const App = () => {
  return (
    <section>
      <Copy />
    </section>
  );
};

export default App;