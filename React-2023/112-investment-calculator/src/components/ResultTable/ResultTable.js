const formatter = new Intl.NumberFormat('en-US',{
  style:'currency',
  currency: 'USD',
  minimumFractionDigits:2,
  maximumFractionDigits:2,
});

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
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>{formatter.format(item.totalInterest)}</td>
            <td>{formatter.format(item.totalInvested)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
