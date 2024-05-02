import CheckBox from "../../../layout/checkBox/checkBox";

const items = [
    { 
      title: 'categories',
      item: [
        'indy',
        'adventure',
        'mmo',
        'casual game',
        'strategy',
        'simulator',
        'sports game',
        'active game',
      ],
    },
    { 
        title: 'platforms',
        item: [
          'pc',
          'playStation 5',
          'playStation 4',
          'xbox series',
          'nintendo switch',
        ],
    },
];

export default function Items() {
    return (
        <>
          {items.map((i) => (
            <div key={i.title}>
                <h6 className="text-light my-2 fw-bold">
                    {i.title}
                </h6>
                {i.item.map((x) => (
                    <CheckBox text={x} key={x} />
                ))}
            </div>
          ))}
        </>
    );
}