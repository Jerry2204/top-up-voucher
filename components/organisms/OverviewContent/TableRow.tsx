import Image from 'next/image';

interface TableRowProps {
  title: string;
  price: number;
  category: string;
  item: number;
  status: string;
}

export default function TableRow(props: TableRowProps) {
  const { title, category, price, status, item } = props;
  return (
    <tr className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src="/img/overview-1.png"
          width={80}
          height={60}
          alt="game-thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
            Mobile Legends: The New Battle 2021
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category} Desktop
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}200 Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          {price}Rp 290.000
        </p>
      </td>
      <td>
        <div>
          <span className="float-start icon-status pending"></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}Pending
          </p>
        </div>
      </td>
    </tr>
  );
}
