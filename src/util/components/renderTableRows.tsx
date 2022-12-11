import renderText from "./renderText";

export default function renderTableRows(rows: any[] = []) {
  return rows.map((rowItems = [], index) => (
    <tr key={index}>
      {rowItems.map((detail:any, idx:number) => (
        <td key={idx}>{renderText(detail)}</td>
      ))}
    </tr>
  ));
}
