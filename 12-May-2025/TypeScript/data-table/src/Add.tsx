const Add = () => {
  const sum = (a: number, b: number) => {
    return a + b;
  };

  // Example sum calculation
  const result = sum(3, 5);

  return (
    <div className="font-semibold mt-10 p-3">
      SUM: {result}
      
    </div>
  );
};

export default Add;
