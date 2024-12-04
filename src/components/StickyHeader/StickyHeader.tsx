import React from 'react';

interface StickyHeaderProps {
  totalEventCount: number;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({totalEventCount}) => {
  const headerItems = [
    `Event Count: ${totalEventCount}`,
    'Yorumlar',
    'MBS',
    '1',
    'X',
    '2',
    'Alt',
    'Üst',
    'H1',
    '1',
    'X',
    '2',
    'H2',
    '1-X',
    '1-2',
    'X-2',
    'Var',
    'Yok',
    '+99',
  ];

  return (
    <table className="sticky">
      <colgroup>
        <col className="col-first" />
        <col className="col-second" />
        <col className="col-other" />
      </colgroup>
      <thead className="header">
        <tr>
          {headerItems.map((item, index) => (
            <td key={index}>{item}</td>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default StickyHeader;
