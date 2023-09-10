const ResultTable = (props) => {
  const data = props.data.yearlyData;
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.year}</td>
            <td>${item.savingsEndOfYear.toFixed(2)}</td>
            <td>${item.yearlyInterest.toFixed(2)}</td>
            <td>${item.totalInterest.toFixed(2)}</td>
            <td>${item.totalInvested.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
